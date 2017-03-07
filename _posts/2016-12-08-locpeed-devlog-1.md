---
layout: post
title:  "Locpeed, Devlog #1"
date:   2016-12-08 02:57:00
thumbnail: /assets/images/post-thumbnail/speedtest-logo.jpg
categories: blog
tags: [locpeed, devlog]
---

## First Thing First

I was reading Making Ideas Happen by Scott Belsky. What I learned so far is mindset about **action**.

I do set a side chunck of 3 hours at least per day to make progress on my side projects. If it's not because of lesson learned from that book, I would instead generate more ideas and switch to newer one leaving the old abandoned. Nothing get produced. **Locpeed** is first project to to apply that mindset into.

**Locpeed** came up with an idea of crowd-sourcing Wifi speed as tested via [http://www.speedtest.net/](http://www.speedtest.net/) on Map platform such as Google Map, or Baidu Map.

Users will usually test Wifi speed in different locations, thus **Locpeed** will list them out on map for good visual.

Scenario is as follows

1. User tests Wifi speed via [http://www.speedtest.net/](http://www.speedtest.net/)
2. User copy a result URL then input to **Locpeed** website
3. **Locpeed** gets data and updates its database to show latest tests of Wifi-speed on map

## Getting Started

At first, I thought I would play around with Google map API which I didn't really have experience with before. But due to I'm in China. Accessing Google website is nightmare. Although you can use VPN to solve problem to bypass China Great Firewall, but it'd make your Internet speed slows like turtle.

With that reason, I changed my mind to try Baidu's Map API. If you take a peek at its [API document](http://developer.baidu.com/map/reference/index.php), you will see that its API is not complicated and just use plain old friend javascript.

> I use [Bing translator](http://www.bing.com/translator/) to help me out translating the whole website. Seriously, Microsoft website is not blocked in China (at least in Shenzhen). Personally opinion is that, Bing translator does a better job than Google translator for whole website. It's very fast!.
> ![bing translator](/assets/images/locpeed/bing-translator.png)

The good thing is they provide a great example resource of demos [here](http://lbsyun.baidu.com/index.php?title=jspopular).

But before you try, register account on Baidu's developer website and get an API key first ...

## Register And Get API Key

Head to [Login page](https://passport.baidu.com/v2/?login).

If you don't know Chinese, that's fine. Me too, I don't understand Chinese at all. But how can we get through its Chinese-only website?

What I did is

* for simple text that I am able to just copy via mouse drag, then I just drag and select all text to paste it to Bing translator. Gotcha! I know the meaning now.
* for more complicated text that is not possible to just use mouse to select text, then I hit `Cmd+Option+I`<sub>On macOS</sub> or open Developer Tools on Chrome browswer. Then you click on `Inspect` button to see its HTML code for target element. This way, you can now copy its Chinese text for you to find its meaning.

Then create a new application, and get an API key from this [link](http://lbsyun.baidu.com/apiconsole/key).

Note also that you might want to verify your account. The text will show at the same page indicating the status of your account. The process of application might requires you to submit personal identification information i.e. passport number.

## Up and Running Quickly

Baidu already provided with good demo with ground-work of code to work upon.
I choosed to base the project on one of demos, then modified some of its javascript code to

* provide with my ak (application key)
* remove things I don't need in popup UI

Thus I now get what I want basically.

![locpeed initial](/assets/images/locpeed/locpeed-initial.png)

## What I Learned From This

Two main things I've learned from this...

1. Recently I sense more and more about web development especially hybrid that would take over native development. Especially to solve problem of cost in development, and slow iteration in debugging & testing in native world.

   Even WeChat platform also really promotes normal HTML5 applications or services running within its WeChat application, and everything works just fine. No need for much fancy user experience, or benefit of speed that would be gained from native application. Right now, I believe that it's a good decisive choice to invest on hybrid application development.

2. Constraints are good to have! If demographic of users to serve is just China? That would be a very dedicated aspect. If tools and best practice are not following from people in the west? and If just go along with basic/normal tools that works (pure Javascript, and normal approach as seen in Baidu's API document), and not always adopt shiny new things? I would create stuff more and productivity is high.

___