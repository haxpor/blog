---
layout: post
title:  "Hands-On Fastlane"
date:   2017-01-15 10:41:00
thumbnail: /assets/images/post-thumbnail/fastlane-logo.png
categories: blog
tags: [ios, fastlane, automation, integration, script]
comments: true
---

I see the pain from colleagues I've worked with at the company I've contracted. The pain comes from on-demand build as requested from clients or even internal team.

Each building process requires significant time that can damage and waste the productivity of the team. Instead of investing time to do repeatitive task which could be used elsewhere.

I heard about *Fastlane* for quite some time. Unfortunately, for myself I didn't have a reasonable chance to use it to fasten my workflow as most of the time I work with the codebase alone. Thus I did some research and tested the tool to see how can we benefit from it.

## Fastlane

[Fastlane](http://fastlane.tools/) is an automated tools comprising of multiple sub-tools to help in each area of Apple App Development Workflow.

![Fastlane logo](/assets/images/fastlane/fastlane-logo.png)

What we're going to do is to create a simple 2 pages iOS application. Each page can switch back and forth to each other. There are simple text fields and buttons on those pages. We're going to test the following areas as provided by the tool

* Register application and manage certificate on Apple Developer Website
* Run Tests and UI Tests
* Take screenshots
* Submit application to beta testers on Testflight

This means we will need to set up our Xcode project properly to have working storyboard, have Tests & UI Tests code, and localize the application for 3 languages (English, French, and Simplified Chinese). By all means to test Fastlane workflow.

Our interested areas to test seems to cover most of what normal use cases in development workflow could be. Let's get into it.

## Install Fastlane

I'm using macOS `10.12.3 Beta` as a testing system, along with Xcode `8.2`.

Now install Fastlane by executing `sudo gem install fastlane`.
As of this writing, version is `2.5.0`.

Check the installation result by executing `fastlane --version`, you should be able to see something similar to this.

```shell
fastlane installation at path:
/usr/local/lib/ruby/gems/2.2.0/gems/fastlane-2.5.0/bin/fastlane
-----------------------------
fastlane 2.5.0
```

## Create a Testing iOS Project

We need to create a testing iOS project first.

Now create a new iOS project with project type "Single View Application"

![create a new project with single view application type](/assets/images/fastlane/fastlane-create-project-1.png)

Next, enter *Product Name*, and tick to enable *Include Unit Tests* and *Include UI Tests*.

![set new project options](/assets/images/fastlane/fastlane-create-project-2.png)

Set up your storyboard to be similar to the following. Only for 2nd `UIViewController` in which you need to assign its class to `ViewController.swift` as we will link a button click later.

![storyboard setup](/assets/images/fastlane/ios-storyboard.png)

We need to link button of first `UIViewController` to show second `UIViewController` modally. This can be easily done by holding `Ctrl` then clicking on the button, dragging it to second `UIViewController` then finally releasing the mouse button. It will show a pop-up asking which way you're going to present it. Select "Present Modally".

![storyboard-present-modally](/assets/images/fastlane/ios-storyboard-present-modally.png)

Linking a button on second `UIViewController` needs a little bit of effort. You need to display Assistant Editor by hitting `Cmd` + `Option` + `Delete`. 

Linking a button for its clicking action by holding down `Ctrl` button then clicking on the button and draggraing it onto the empty space of `ViewController.swift` file. The source code of `ViewController.swift` should have the following

```swift
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func onClickBackButton(_ sender: Any) {
        self .dismiss(animated: true) { 
            NSLog("completed dismiss")
        }
    }
}
```

With all these, we have basic UI elements that we need and each page can present another page; back and forth.

## Localize iOS Application

Click on project name and add *Simplified Chinese*, and *French* for our additional localized language while *English* is the main development language.

![project set up for localization](/assets/images/fastlane/project-setup-localization.png)

Now when you look at the *Project navigator* panel on the left, and click to expand main storyboard file. You will see something like this.

![expanded main storyboard file](/assets/images/fastlane/expanded-main-storyboard-file.png)

Click on each language one by one to edit its translated text for UI elements which are labels, and buttons that we have on our storyboard. Feel free to just use Google translator service or any service you have. But don't just lazily put English text in it for all languages, we will see real result of this later after we run Fastlane.

## Add Tests & UI Tests

Before we proceed to using Fastlane tool. We will create Tests and UI Tests first. This will be used as part of Fastlane Workflow.

### Tests

For simplicity as we don't really have meaningful things to test, we just assert for true. You should have code as follows in `FastlaneTestTests.swift` file.

```swift
import XCTest
@testable import FastlaneTest

class FastlaneTestTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        XCTAssert(true)
    }
    
}
```

### UI Tests

Not only for testing purpose but UI Tests is also the building block to automate taking screenshots as part of Fastlane workflow. Thus we will add real testing code here.

Inside `FastlaneTestUITests.swift`, add the following functions for each UI test case.

```swift
  func testUsernameIsWasin() {
        let firstnametextfieldTextField = XCUIApplication().textFields["firstNameTextField"]
        firstnametextfieldTextField.tap()
        firstnametextfieldTextField.typeText("wasin")

        XCTAssert(firstnametextfieldTextField.value as! String == "wasin")
        
        // take a snapshot
        snapshot("usernameWasin")
    }
    
    func testLastnameIsThonkaew() {
        let lastnametextfieldTextField = XCUIApplication().textFields["lastNameTextField"]
        lastnametextfieldTextField.tap()
        lastnametextfieldTextField.typeText("thonkaew")
        
        XCTAssert(lastnametextfieldTextField.value as! String == "thonkaew")
        
        // take a snapshot
        snapshot("lastnameWasin")
    }
    
    func testShowNewPage() {
        let app = XCUIApplication()
        var backButton = app.buttons["backButton"]
        // backbutton should not exist
        XCTAssert(backButton.exists == false)
        
        let openButton = app.buttons["openButton"]
        openButton.tap()
        
        // query back button again
        backButton = app.buttons["backButton"]
        // check exists
        XCTAssert(backButton.exists)
        
        // take a snapshot
        snapshot("newpage")
    }
```

You can notice above that why we know which name should be used in referring to text field, and buttons. This is the benefit from setting the names of UI element in *Accessibility* section of *Identify Inspector* panel.

You set following names

* `firstNameTextField` - to first text field of first `UIViewController`
* `lastNameTextField` - to second text field of first `UIViewController`
* `openButton` - to open button of first `UIViewController`
* `backButton` - to back button of second `UIViewController`

Also make sure that *Accessibility* is ticked as Enabled.

![setting names in accessibility](/assets/images/fastlane/setting-names-in-accessibility.png)

This is important as it will allow us to access UI element in UI test code by name.

In additional, testing code is self-explained to what we're trying to achieve too. If you're not sure what it does, take some times, and read the code above.

## Integrate Fastlane with XCode Project

Now it's a core part.

We are going to initialize Fastlane tool, edit the configuration file, and run it to automate our workflow.

* Go to XCode project folder in command line via `cd ~/FastlaneTest`. This assumes that I've created XCode project at `~/` which is my user directory. Inside `FastlaneTest` directory, you will see your `FastlaneTest.xcodeproj` file.

* Execute `fastlane init` to initialize Fastlane.
   This will create a directory `fastlane` at `~/FastlaneTest` with necessary files Fastlane needs inside.
   
### FastFile

Time to configure `FastFile`.
As of version `2.5.0`, the initial configuration file covers most of the things we need already. We just need to modify and add something.

Add the following code inside `platform :ios do` after 
`before_all do ... end`

```python
  desc "Upload app to iTunes connect"
  lane :itunes do
    produce(
        app_name: 'MyFastlaneTestApp',
        language: 'English',
        app_version: '0.1',
        sku: 'c26e587b3fb756491e3c15aa'
    )
  end
  
  desc "Take screenshots of the App"
  lane :screenshots do
    snapshot
  end
```

> You can execute `openssl rand -hex 12` to get randomized hexadecimal string to use as `sku`.

and modify `lane :beta` to be as follows

```python
  desc "Submit a new Beta Build to Apple TestFlight"
  desc "This will also make sure the profile is up to date"
  lane :beta do
    # match(type: "appstore") # more information: https://codesigning.guide
    cert
    sigh
    gym # Build your app - more options available
    pilot

    # sh "your_script.sh"
    # You can also use other beta testing services here (run `fastlane actions`)
  end
```

Fastlane consists of multiple lanes to be configured and used. Notice `lane :<name>`.

* `itunes` - create a new application on iTunes connect for us before we will release a new build for beta users, or submit to App Store.
* `screenshots` - take screenshots of application while running. This will be carried out at the same time of UI Tests.
* `beta` will submit a new beta build to TestFlight but it will also check certification and provision profile first that they are up-to-date.

> If need, you can grab my `FastFile` [here](https://gist.github.com/haxpor/a3c1da624c2256a138e5e6d0e48742c9).

### Snapfile

In order to take snapshot (or taking screenshots) of application while running automatically, you need to configure `Snapfile` but that file is not there inside `fastlane` directory initially.

We need to initialize it first by executing `fastlane snapshot init` at our XCode project directory (which is `~/FastlaneTest`.

It will create `Snapfile` for us, along with other setting up files. Result of executing such command, you will see

```shell
Successfully created SnapshotHelper.swift './fastlane/SnapshotHelper.swift'
Successfully created new Snapfile at './fastlane/Snapfile'
-------------------------------------------------------
Open your Xcode project and make sure to do the following:
1) Add a new UI Test target to your project
2) Add the ./fastlane/SnapshotHelper.swift to your UI Test target
   You can move the file anywhere you want
3) Call `setupSnapshot(app)` when launching your app

  let app = XCUIApplication()
  setupSnapshot(app)
  app.launch()

4) Add `snapshot("0Launch")` to wherever you want to create the screenshots

More information on GitHub: https://github.com/fastlane/fastlane/tree/master/snapshot
```

You need to follow step 2, and 3 as shown on console above to properly hook things UI Tests with taking screenshots. Notice that we've already done step 1. We are going to do step 4 next.

Now modify the file to have the following code.

```python
# Uncomment the lines below you want to change by removing the # in the beginning

# A list of devices you want to take the screenshots from
devices([
   "iPhone 6",
   "iPhone 6 Plus",
   "iPhone 5",
   "iPad Pro (12.9 inch)"
#   "iPad Pro (9.7 inch)",
#   "Apple TV 1080p"
])

languages([
  "en-US",
  "fr-FR",
  "zh-Hans"
  #["pt", "pt_BR"] # Portuguese with Brazilian locale
])

# The name of the scheme which contains the UI Tests
scheme "FastlaneTestUITests"

# Where should the resulting screenshots be stored?
output_directory "./screenshots"

clear_previous_screenshots true # remove the '#' to clear all previously generated screenshots before creating new ones

# Choose which project/workspace to use
project "./FastlaneTest.xcodeproj"
# workspace "./Project.xcworkspace"

# Arguments to pass to the app on launch. See https://github.com/fastlane/snapshot#launch-arguments
# launch_arguments(["-favColor red"])

# For more information about all available options run
# snapshot --help

```

That means we will do UI Tests (thus taking screenshots) on 4 devices for 3 languages for scheme name `FastlaneTestUITests`, and output result screenshots at `./screenshots`. It operates on our `./FastlaneTest.xcodeproj` file.

> If need, you can grab my `Snapfile` [here](https://gist.github.com/haxpor/54e82fdb1c8d6f574ee69f129867496e).

## Run Fastlane

We're all ready now. Phew! It's quite an effort.
Now we're going to run Fastlane.

We have following commands (lanes) for Fastlane to run.

* `fastlane itunes` - create application on iTunes Connect Website according to basic information we provide.
* `fastlane test` - test application. It will prompt you with options to choose from whether you want to just test running application, run tests, or run ui tests.
* `fastlane screenshot` - take screenshots as well as running UI Tests at the same time. Screenshots will be writen into `screenshots` directory inside XCode project directory.
* `fastlane beta` - submit an application to beta TestFlight. It will take care certificate and provisioning profile for us too.

## Results

* `fastlane itunes` is good enough that it will wait until application data is created on iTunes Connect website  

   ![fastlane itunes waiting](/assets/images/fastlane/fastlane-itunes-result.png)
   
* `fastlane screenshots` will run UI Tests and take screenshots. Look inside `screenshots` directory inside XCode project directory, you will see 3 directories for each language we've set. Result screenshots are there.  
   
   ![fastlane screenshots](/assets/images/fastlane/fastlane-screenshots.png)
   
   ![fastlane ui tests result](/assets/images/fastlane/fastlane-screenshots-result.png)
   
   See its overall reporting of screenshots taken specifically at 3 particular times during flow of UI on iPhone5 (4-inch), iPhone6(4.7-inch), iPhone6Plus(5.5-inch), and iPad Pro(12.9-inch) each with 3 languages on latest iOS 10.2; total in 3x3x4=36 screenshots [here](/assets/htmls/fastlane-screenshots/screenshots.html).
   
* `fastlane beta` while uploading a build to TestFlight  

   ![fastlane TestFlight uploading](/assets/images/fastlane/fastlane-beta-testing-upload.png)
   
   and successfully uploaded application during beta testing stage
   
   ![fastlane application on TestFlight app](/assets/images/fastlane/fastlane-beta-testing-upload.png)
   
* `fastlane test` result  

   ![fastlane test result](/assets/images/fastlane/ui-tests-result.png)
   
* `fastlane test` in action  

   ![fastlane test in action](/assets/images/fastlane/ui-tests.gif)
   
## What's Next?

We can put all those commands into a shell script file thus to be executed on build server as part of CI process. I believe this will let developers sit back and be more productive on making application, not to waste time on tasks that can be automated.

Thus next step is to review and see which existing tech stack the team currently has, then integrate & modify Fastlane to suit the need and use case.
