---
layout: monthly-report
title:  "Monthly Report - May 2017"
date:   2017-06-11 23:13
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/05/report.html
comments: true
---

# First Thing First

This is a first montly report after I stopped receiving freelance/contract works to focus on my own projects.

During the time I was doing contract works for tech startup in Bangkok remotely, I used to write a monthly report declaring hours spent for each different type of task I've involved. As I charge per hour, information conveyed in report will allow them where their money went, included interesting tidbit of information in both terms of technical and user's perspective to allow upper level management paving a way for direction and strategy.

So yes, it'd be great idea to do the similar (not exactly the same) with my own stuff from now on; monthly.

# Monthly Report Post Notice

Before I dwell down to the niffy grifty of report, let's first see the difference of 'monthly report type of post' to normal posts.

For a new post that is monthly report, you will see the following tag in [http://blog.wasin.io](http://blog.wasin.io)

![monthly report tag](/assets/images/monthly-report/may-2017/monthly-report-tag.png)

Whenever you click it, there's also another tag at the title as follows.

![monthly report tag](/assets/images/monthly-report/may-2017/monthly-report-tag2.png)

It should make it easily to spot which post is what. Now let's move on.

---

# Total hours spent

> I write May report very late, but in future I aim to write it down immediately at the beginning of new month.

![piechart](/assets/images/monthly-report/may-2017/piechart-may-2017.png)


| Task        | Hours           | Percentage  |
| ------------- |:-------------:| -----:|
| blockbunny	| 48.49	| 47.83%
| devops	| 7.38	| 7.28%
| networking-china	| 1.85	| 1.82%
| libgdx-misc	| 4.14	| 4.08%
| twitterbot	| 9.93	| 9.79%
| gamedev-research	| 16.18	| 15.96%
| gamearch-research	| 2.25	| 2.22%
| tools-research	| 4.77	| 4.71%
| pixelart-study	| 6.27	| 6.18%
| art-research	| 0.12	| 0.12%
| **Total** | 101.38 | 100%

# Summary

This month, I spent pretty much of the time learning [libgdx](https://github.com/libgdx/libgdx) which I chose it to be the main technology for game development in upcoming projects. I learn best at following tutorial, making changes and improvements. To make myself being familar with the tools at hands.

Multiple times, I try to base the project around Unity as I used it from time to time in supporting during contract work, and it's stable with future-proof. But man... I tried. At least, 2 major times to sit down, use it, and convincing myself to **happily** use it. Result is NO. I'm not quite happy developing game with this tool. So I go on with what I'm happy with although it might not increase productivity, or have super convenient tool-chain.

So here the summary for interesting tasks I've done in this month.

## blockbunny

I open source this project [here](https://github.com/haxpor/blockbunny). By early June, the project has been completed, and received a few traction of talking about it in libgdx, and kotlin community. I will fully post about the screenshots, gifs, and other things about the project at the end of next month. At which it's the point in time that I should write about it, not now as I wrote this report very late.

blockbunny is a studying material for me to being familar with libgdx. It's great, and I can code it with kotlin which is another programming language that I like a lot extremely similar and comparable to how flexible and consise language it can be to swift. Sadly, there's no stable and production ready game engine/framework to use with swift.

Note that BlockBunny is originally from ForeignGuyMike, I followed along with idea, coded it in kotlin with changes + improvements.

## devops

Also as I live in China. Freedom in Internet has been comproised. This time I decided it's time to have an equal in quality of proxy server in case the main one doesn't work as expect. So I spent time upgrading shadowsocks server, [upgrading linux kernel](http://blog.wasin.io/blog/2017/05/08/how-tcp-bbr-could-help-speed-up-internet.html) to make it support TCP-BBR for secondary proxy server, and misc.

I'm happy that now I have 2 options to choose from which has equal in Internet speed and quality. The main difference between the twos are distance. One in Singapore, and another in Hong Kong. You definitely know which one is closer to my location. Thus secondary is slightly slower.

## networking-china

I first try to up the Internet speed is via [TCP-BBR](http://blog.wasin.io/blog/2017/05/08/how-tcp-bbr-could-help-speed-up-internet.html). It works great.

Next try is [kcptun](https://github.com/xtaci/kcptun). Works great again. It works well with shadowsocks. You can watch youtube video very fast (in highest quality, 1080p) without waiting for buffering. If you want to configure your shadowsocks server with kcptun, the highest chance is mistakes in setting port, password, and ip. Follow along with this [article](https://nathaniel.blog/tutorials/shadowsocks/). It's the only one that is working for me out there.

## twitterbot

During the ideation phase to think about game idea for my game, I created a twitter bot to retweet my tweet as a purpose to archive it as future reference in one place. I understand that these days you have Pinterest, Pocket, or other service to help you out. But because I'm almost always on Twitter, I don't want to waste time switching apps.

My [bot](https://github.com/haxpor/twitterbot_refrt) is based on NodeJS, it's minimal right now. Only it does is to check the beginning string of each new tweet of my personal twitter account ([@haxpor](https://twitter.com/haxpor)). If it matches "RT |", then it will retweet it.

Yup, when I have time I go there to my bot ([@haxpor_refrtbot](https://twitter.com/haxpor_refrtbot)) to revisit the idea I found interesting.

**Example**:

When I tweet with "RT |"

![tweet original](/assets/images/monthly-report/may-2017/original-tweet.png)

The bot will do this

![tweet original](/assets/images/monthly-report/may-2017/bot-retweet.png)

It turns out for me you can have a bot up and running pretty fast. There're bunch of options you can do reactively i.e. target account favorited a tweet / updating their bio, etc. This is why there're so many of spam bots out there. In fact, most high profile people with verified tag often utilize bot in some way to interact with their fans.

## pixelart-study

Artist is another path I need to acquire its skill set to be able to feed my game projects with graphical assets. I planned to do it solo.
The following is what I came up with in tileset study.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Tileset Study<a href="https://twitter.com/hashtag/gimp?src=hash">#gimp</a> <a href="https://twitter.com/hashtag/gamedev?src=hash">#gamedev</a> <a href="https://twitter.com/hashtag/indiedev?src=hash">#indiedev</a> <a href="https://twitter.com/hashtag/pixelart?src=hash">#pixelart</a> <a href="https://t.co/i940QzXksF">pic.twitter.com/i940QzXksF</a></p>&mdash; Wasin Thonkaew (@haxpor) <a href="https://twitter.com/haxpor/status/868597281016041472">May 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Gimp is my tool of choice.
More time will be spent for artistic studying.

## art-research

Dang, I came across the old topic of rotoscoping animation. This is quite old school that it answers why the game like Prince of Persia has natural movement like human. Rotoscoping in-short is a technique for animator to have benefit of line-reference from live video shot of action they want to animate.

By all means, watch this [video](https://www.youtube.com/watch?v=-jvXJs97bPo).

# Before We Go

That's it for this month report.  
Keep an eye for this kind of post again when next month ends.