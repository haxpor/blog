---
layout: post
title:  "Model & Approach for Private Delivery of iOS Frameworks Using Cocoapods"
date:   2017-03-25 00:03
thumbnail: /assets/images/post-thumbnail/cocoapods-icon.png
categories: blog
tags: [cocoapods, pod, private, framework, ios, model]
---

Lately, I've been thinking about the way to deliver **private** iOS frameworks to users using [Cocoapods](https://cocoapods.org/).

Firstly, don't get me wrong, I do love open source, I embrace the way of its approach, and even put tagline _Open source by default_ on my [Twitter profile](https://twitter.com/haxpor). Yup, I do understand that not every situation or entity can go all-in with such approach. There will be certain circumstance that the project needs to be in closed-source forever, or for certain time period until it can be open, or due to as part of the deal that makes open source is not an option.

Whatever the reason it might be, having Cocoapods as your delivery and dependency management is still a leading choice. I do point it out because if we're going to deliver frameworks privately through Cocoapod, there's going to be additional effort.

Let's first understand the underlying system of Cocoapods, until we come to overall big picture of model to use it.

## Underlying

---

Under the hood, there are 2 main things that work together for Cocoapods.

1. `Specs` repo
2. `.podspec` files

`Specs` repo contains multiple `.podspec` files. Main [Spec repo](https://github.com/CocoaPods/Specs) of Cocoapods is used to serve general public frameworks to users. Your `pod install` command will check to see information from this repo, and go down to check `.podspec` file for specific version of target framework in order to know URL to pull down framework's source code then finally integrate it with your Xcode project. See example of `.podspec` file [here](https://github.com/CocoaPods/Specs/blob/master/Specs/d/a/2/Alamofire/4.4.0/Alamofire.podspec.json).

You notice that Spec repo is public, thus also `.podspec` file. Anyone can take a peek, and get relavent information. Now you see the problem that such information can lead to information breached in term of closed-source approach. They might get to know which client you work with, or github URL. With those two information, competitors can imply or even try to download the project source code (if permission is not set properly, yup github project as served on Cocoapods can be set to be private. It's just a matter how who can access.).

<a id="steps"></a>What we need to do is

1. Self-host `Specs` repo
2. Build framework in universal binary without exposing source code
3. Upload result framework to public server for user to grab
2. Create a proper `.podspec` file and set its `source` field to use URL as result from 3.

### Self-host Spec repo

To gain the benefit of setting the permission of `Specs` repo, you have only option which is to do self-host of it.
Even you do self-host, you also have an option of setting access permission to be in public or private. In this case, we're primarily interested in private access.

Cocoapods has official document on [how to host private Specs repo](https://guides.cocoapods.org/making/private-cocoapods.html).

### Build framework in universal binary without exposing source code

I came across this well explained [article](https://eladnava.com/publish-a-universal-binary-ios-framework-in-swift-using-cocoapods/) of how to publish a universal binary iOS framework using Cocoapods.

Only difference from what we're trying achieving compared to that article is that, the author publishes it publicly. But we want it in private. Thus we have no need to involve using `pod trunk ...` command as we don't publish to the main public `Specs` repo but to our private one.

### Upload result framework to public server

Upload such built frameworks to our public server. Ensure that it's in universal binary form thus it can be used to run on device and simulator. Ensure that you didn't include any source code with it. Normally, aim for `.zip` file. The content of `.zip` file mainly contains `.framework` along with `README` or any relavent files if you need. All of them are at the same level. It might be as follows.

```
framework-result.zip
               |_ myFW.framework
               |_ README
               |_ strip-frameworks.sh
```

> `strip-frameworks.sh` is usually needed at the end when users want to publish the result application to AppStore. It will help stripping un-needed architecture from frameworks being in use. You can see and make use of [strip-frameworks.sh](https://github.com/realm/realm-cocoa/blob/master/scripts/strip-frameworks.sh) by Realm. Insert it insidee _Build Phases_.

### Create a proper `.podspec` file

Properly create a `.podspec` file to match the version of such framework. The most important thing is `source` field instead of providing github URL, you provide the end-result of URL of `.zip` for users to download.

## Model

---

Now it's time for a big picture to see how everything gets involved.
Please note that I observe the main `Specs` repo's file structure then compare with our private one, there is slightly difference. So I include it here too.

**Main `Specs` repo**

```
Specs
  |_ 0
     |_ 0
         |_ framework-A
                   |_ 1.0.0
                         |_ framework-A.podspec
                   |_ 1.0.1
                         |_ framework-A.podspec
                   |_ 1.1.0
                         |_ framework-A.podspec
         |_ framework-B
                   |_ 1.0.0
                         |_ framework-B.podspec
		 |_ 1
		    |_ ...
		 |_ 2
		    |_ ...
	|_ 1
	   |_ 0
	      |_ ...
```

**Our private `Specs` repo**

```
Specs
   |_ framework-A
       |_ 1.0.0
           |_ framework-A.podspec
       |_ 1.0.1
           |_ framework-A.podspec
       |_ 1.1.0
           |_ framework-A.podspec
   |_ framework-B
       |_ 1.0.0
           |_ framework-B.podspec
```

I cloned the project and inspected, the following is what I found.

* Each directory holds up to 40 MB
* There are 3 layers of numerical directory for each framework to reside in i.e. `Specs/0/0/0/framework-A`, `Specs/0/1/0/framework-B`
* Each layer of numerical directory consists of directory ranging from `0` to `9`, also `a` to `f` in total of 16 directories
* (as above for what I've found) `Specs` repo can hold up to 163.84 GB in total. Right now it's at 583 MB (0.584 GB) or 0.003%. I suspect this part is to optimize the directory system, not to make each individual directory too large

I came up with two possible models; Variant A, and B.

### Variant A

![Model Variant A](/assets/images/cocoapods/VariantA.png)

#### Annotations

**1** ---> Ownership (included just to show authentic owenership)  
**2** ---> Public server to host built (.zip) frameworks  
**3** ---> Each circle is **private** `Specs` repo exposed to selected external party (client)  
**4** ---> Multiple of client parties spanning into multiple groups

#### Requirements

1. Public server to host built (.zip) frameworks.
2. Paid Github acccount to have ability to create private repositories ($7/month)

#### Feature

It allows another layer to control which party (client) can see such `Specs` repo.
Imagine if we have 2 clients. Each client might use multiple of frameworks and are different from ones used by another client.  
Thus we will have 2 private `Specs` repo one for each client.

We need to allow users (github account) to have read access towards such `Specs` repo. So when they pull down via configured `Podfile`, it will be fine.

#### Summary

##### Pros

* Additional layer to manage and control which party can have access to which frameworks via private `Specs` repo.

##### Cons

* Need to manage and allow access for users towards such `Specs` repo
* Might not be feasible for who which doesn't want to pay monthly in order to use Github's private repositories feature

### Variant B

![Model Variant B](/assets/images/cocoapods/VariantB.png)

#### Annotations

**1** ---> Ownership (included just to show authentic owenership)  
**2** ---> Public server to host built (.zip) frameworks  
**3** ---> One single `Specs` repo exposed to general public  
**4** ---> Multiple of client parties treated as a single public group

#### Requirement

1. Public server to host built (.zip) frameworks.

#### Feature

It has no control layer over which party or users should have access towards our framework.
Thus there is no need to create private `Specs` repo and manage (allow users access) to it.

One caveat is that if users inspect the content inside `Specs` repo, they will have information for all frameworks we have, and might be able to know which client we work with. But it might be less likely for normal users as when they're done with configuring `Podfile`, usually they have no time or interest to study our `Specs` repo. Even if they do so, they have to try by trial and error to use the framework as most likely we will deliver document to client privately too.

#### Summary

##### Pros

* No additional effort to manage each private `Specs` repository as there is none to manage.
* No additional cost, normal Github account will do the work

##### Cons

* Users might gain information about our all frameworks and where to download; and possible to know which client we've worked with.

## Final words

Now we get to know models to use in delivery frameworks to clients privately, and even has options to choose one that is more suitable to use. To go further than that, it's possible to reduce [steps](#steps) needed especially 2, 3, and 4 which are building framework, uploading, and creating a proper `.podspec` via automated script.

Then even more advanced, for build step, we can make it more robust using automated build system (CI). The overall combination should be pleasant and extremely automated.

I might consider writing about automated build, and how to combine it with models we've learned for next articles. For now, we have models and technical background included with steps to accomplish as a foundation to further utilize Cocoapod in delivery and automated flow.

Until next time...
