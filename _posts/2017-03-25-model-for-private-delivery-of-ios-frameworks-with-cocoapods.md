---
layout: post
title:  "Model for Private Delivery of iOS Frameworks With Cocoapods"
date:   2017-03-25 00:03
thumbnail: /assets/images/post-thumbnail/cocoapods-icon.png
categories: blog
tags: [cocoapods, pod, private, framework, ios, model]
---

Lately, I've been thinking about the way to deliver **private** iOS frameworks to users with Cocoapods.

Firstly, don't get me wrong, I do love open source, I embrace the way of its approach, and even put tagline "Open source by default" on my [Twitter profile](https://twitter.com/haxpor). Yup, I do understand that not every situation or entity can go all-in with such approach. There will be certain circumstance that the project needs to be in closed-source forever, or for certain time period until it can be open, or due to as part of the deal that makes open source is not an option.

Whatever the reason it might be, having Cocoapods as your delivery and dependency management is still a leading choice as everyone uses it. I do point it out because there's going to be additional effort to achieve what we need to deliver frameworks privately.

Let's first understand the underlying system of Cocoapods, until we come to overall big picture of model to use it.

## Underlying

Under the hood, there are 2 main things that work together for Cocoapods.

1. Spec repository
2. `.podspec` file for individual release of framework

Spec repository contains multiple `.podspec` files. Main [Spec repository](https://github.com/CocoaPods/Specs) of Cocoapod is used to serve general public frameworks to users. Your `pod install` command will check to see information from this repository, and go down to check `.podspec` file for specific version of target framework in order to know URL to pull down framework's source code then finally integrate it with your Xcode project.

You notice that Spec repository is public, thus also `.podspec` file. Anyone can take a peek, and get relavent information. Now you see the problem that such information can lead to information breached in term of closed-source approach. They might get to know which client you work with, or github URL. With those two information, competitors can imply or even try to download the project source code (if permission is not set properly, yup github project as served on Cocoapods can be set to be private, we talk more next).

What we need to do is

1. Host Spec repository privately and allow to only selected parties to access it
2. 

## Publish it Privately

The term *private* here is to achieve 

In order to publish framework privately, we need to do the following

1. Allow access to Spec repository privately to selected users
2.



## Now what?

Cocoapods is not 100% suitable for non open source approach. To gain benefit as it can provide to deliver and manage **private** frameworks to deliver to users later, we need to the way Cocoapod works a little bit.

I came across this [article](https://eladnava.com/publish-a-universal-binary-ios-framework-in-swift-using-cocoapods/) on how to build universal library then publish it as a binary file (no source code) on Cocoapod. Inspired and confirmed me that actually this stuff can be done. But be aware that that article publishes your framework on to public [Spec repository](https://github.com/CocoaPods/Specs). The `.podspec` file as configured is set for users to pull down source code [as hosted on github](https://github.com/CocoaPods/Specs/blob/e918d3c7ae5acca45b05b3dac6d78dcb13a34859/Specs/d/a/2/Alamofire/4.3.0/Alamofire.podspec.json#L11-L14)(take Alamofire's `.podspec` as example) to users computer when build although it's possible for your code to be hosted elsewhere like bitbucket.org.

What we need to do is to host Spec repository privately, or better to allow selected parties (users) to see it.

## Host Spec Repository privately

Cocoapods even has official document to set up private 