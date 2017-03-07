---
layout: post
title:  "Locpeed, Devlog #2"
date:   2016-12-11 20:10:00
thumbnail: /assets/images/post-thumbnail/weui-icon.png
categories: blog
tags: [locpeed, devlog]
---

## HTTP is the Way

After trying to solve the problem of HTTPs or mixed content, I found out a root cause.  
Baidu's Map API itself doesn't serve on HTTPs. If try to access [https://maps.baidu.com](https://maps.baidu.com), you will have non-working site and cannot use its features at all. Thus I suspect it's the API itself. Only HTTP is to go now.

With this, I reconfigured my server to allow HTTP (I know it's not safe) for **certain** sub-domain to host this project.

## Adding Map Marker Data

I also found a way to add map-marker data to load them into Map API too.  
At first, it seems like mysteriuos usage of `geotableId` as seen in following code.

```javascript
...
customLayer = new BMap.CustomLayer({
	geotableId: 201567,
	q: '', //检索关键字
	tags: '', //空格分隔的多字符串
	filter: '' //过滤条件,参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.nearby
});
...
```

That `geotableId` refers to data table created via [http://lbsyun.baidu.com/data/mydata#/](http://lbsyun.baidu.com/data/mydata#/).  
You can get into such section by clicking on highlighting blue color on the left side of main api console page as seen below.

![Section to access data creation](/assets/images/locpeed/data-creation-section-access.png)

I created a couple of data item via UI interface. Thus I get a working click-to-show popup, and everything is fine after that. So it's a matter of having a proper data first for no errors on running site.

![Result from data creation](/assets/images/locpeed/result-from-data-creation.png)

## Dynamic Adding Map Marker Data

The intention is not for administrator to manually add data after users submitted information through our service.  
We have to do it dynamically via programming.

I researched around and found out a great technical community (although in Chinese). [Here](http://blog.csdn.net/sd0902/article/details/8478427) is a way to dynamically add data to Map API.

I don't add it to the project just yet. But knowing it's possible slightly calms me down at this stage.

## Upated Project Direction

At first, users have to test WiFi speed separately via [http://www.speedtest.net/](http://www.speedtest.net/), then copy its URL to submit to our service, finally our service will store that data into database and render the location on map.

It's not good experience for first step. After some research, I found [speedtest-net](https://www.npmjs.com/package/speedtest-net) on NPM registry. As tested, it gave out a similar result as tested via SpeedTest app and via its website too! So now I believe we can utilize it to do all within our service.

With that, it's highly towards making an app via hybrid solution. To make it available on website also is another thing.  
At this stage, I will focus on making website version works (without relying on framework), then will work on mobile app (not decide which framework I will use)

## Finding Connected WiFi SSID

I went through the project more and thought that I cannot basically show the location with Downloading/Uploading speed without connected _Wifi SSID_ or the name of connected WiFi. Users want to know which one they want to connect to get that reported speed.

As research, I might need [PhoneGap-WifiInfoPlugin](https://github.com/HondaDai/PhoneGap-WifiInfoPlugin), or another one with iOS support [https://github.com/makeroo/WifiWizard](https://github.com/makeroo/WifiWizard). I didn't test it yet. But it's good to have these information for further development.

With those twos, it might be possible that Cordova is the way to go if nothing else I can find for a choice of hybrid development.
___