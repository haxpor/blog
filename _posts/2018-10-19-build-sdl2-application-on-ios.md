---
layout: post
title:  "Build SDL2 Application on iOS"
date:   2018-10-19 3:32
thumbnail: /assets/images/post-thumbnail/textpost.png
categories: blog
tags: [sdl2, ios]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

To be able to build SDL2 application on iOS with Xcode, follows the following steps.

> For this tutorial, I use Mojave 10.14 (18A391) and XCode 10.0 (10A255).

## Create an Xcode project

Create a simple view based application. 
It can be either swift, or objective-c project. In this case, I choose swift. 
Name your project, in this case we go with `sdl-ios`, and bundle identifier properly.

## Setup Xcode project

* Remove `Main.storyboard`, `Viewcontroller.swift`, `AppDelegate.swift` files from the project. Choose `Move to Trash` is ask, SDL2 handles these for us already.
* Remove `Main storyboard file base name` item from `Info.plist` file. As we already removed storyboard file, we don't need it.
* Add `SDL` Xcode project as a sub-project by right click on folder `sdl-ios` directory then choose "Add Files to "sdl-ios"" then select `<your SDL source directory>/Xcode-iOS/SDL/SDL.xcodeproj`.
* Click on `sdl-ios` in project navigation panel, then click on `Build Phases`->`Link Binary With Libraries`->`+ symbol` then choose `libSDL2.a from 'libSDL-iOS' target in 'SDL' project`.
* Further add `GameController.framework`, `Foundation.framework`, `UIKit.framework`, `OpenGLES.frameworkd`, `QuartzCore.framework`, `CoreAudio.framework`, `AudioToolbox.framework`, `CoreGraphics.framework`, `CoreMotion.framework`, `Metal.framework`, `CoreBluetooth.framework`, and `AVFoundation.framework`.
* Create a new directory called `src` then put SDL2 source files inside e.g. you can use `rectangles.c`, `common.c`, and `common.h` file as seen in `<your SDL source directory>/Xcode-iOS/Demos/src`
* Right click on `sdl-ios` in project navigation panel in Xcode then choose "Add Files to "sdl-ios"" to select `src` directory as we added eariler.
* Click on `Build Settings` then search for "Header Search Paths", then add `<your SDL source directory>/include`.

## Build SDL2 Library (optional)

Just for checking.

* Click to change Xcode's project target to `libSDL-iOS`.
* Build the project with `Cmd+B`.
* You should see it successfully built.

## Build SDL2 Application

* Click to change Xcode's project target to `sdl-ios` (your target sample).
* Run the project with `Cmd+R`.
* You should see it successfully built and see the screenshot similar to below

![rectangles](/assets/images/sdl2/ios/rectangles-sdl2-ios.png)

## What's Next

Now you can add more sample source files into `src` directory then create a new Xcode target duplicating from what we currently have for `sdl-ios` in order to run another sample.
