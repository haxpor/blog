---
layout: monthly-report
title:  "Monthly Report - August 2017"
date:   2017-09-01 02:16
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/08/report.html
comments: true
og_image: /assets/images/monthly-report/august-2017/project-hours-spent-Aug-2017.png
---

Here comes August report.

# Total hours spent

<center>
[![big picture hours spent](/assets/images/monthly-report/august-2017/big-picture-hours-Aug-2017.png)](/assets/images/monthly-report/august-2017/big-picture-hours-Aug-2017.png)
<div><sub>Image is resized. Click for full resolution.</sub></div>
</center>

<center>
[![projects hours spent](/assets/images/monthly-report/august-2017/project-hours-spent-Aug-2017.png)](/assets/images/monthly-report/august-2017/project-hours-spent-Aug-2017.png)
<div><sub>Image is resized. Click for full resolution.</sub></div>
</center>


# Summary
---

This month I ceased further development of multiplayer mode of asteroids (but released its single player mode for free with no ads on [Google Play](https://play.google.com/store/apps/details?id=io.wasin.asteroids&hl=en), it's also [open source](https://github.com/haxpor/asteroids)), in order to pay full focus to WeChat's mini-program app I'm developing under code name *heatap*. You can see more detail for both things at its corresponding section.

When I dig the rabbit hole into mini-program development. There are more administrative tasks like applying for operating license i.e. ICP, and WeChat's micro payment. It requires on-going attention for application to be complete. I have to coordinate and tell my partner to prepare for governemnt/auditor phone call along the step of vertification, and documents preparation and submission. It's new unwalked-before path for me thus time spent on these non-productive tasks accumulated to almost 25% for this month alone.

Look at it in a good way. I finally nailed down [company's basic banking operation](http://blog.wasin.io/blog/2017/08/31/operate-company-banking-in-china-base-on-china-merchants-bank.html). For example, one of verification process as part of WeChat micro payment feature to be activated (ability to receive payment via QRCode from customers) requires you to do wire transfer of small random amount of money to Tencent. It seems to be simple, but there always be processes, steps, tools and procedures to get it right especially in China.

Administrative tasks occupy large chunk of time in this month, and they are not just _misc_ stuff as I categorized it like in previous months anymore. So I take this chance to improve how I categorize type of tasks I've done, and how I track my time on Google Sheet. More detail in its corresponding section below. Administrative tasks now includes both server confiration and maintenance, and also tasks related to project in non-productive way i.e. managing product in non-coding way, legal/license, documents, etc.

In short, I also pivoted my business strategy and plan to cover lesser fields allowing me to be able to manage and retain my technical skill towards technology/programming language I use to develop them without spread too many focus on different directions. This means I will pay less attention to certain things. Read on for detail.

# Adapted and Improved Hour Tracking
___

Now I have in total of 7 categories to categorize each individual tasks.

<center>
![tracking hour category](/assets/images/monthly-report/august-2017/tracking-hours-impoved.jpg)
</center>

I can expand it via dropdown list on Google Sheet.

<center>
![tracking hour expanned cateogry dropdown](/assets/images/monthly-report/august-2017/tracking-hours-improved-2.png)
</center>

I do this to limit my tendency to add more category unncessary (freewill). So having a limited options to choose from, and being locked down on that is better.

Each category has its own fixed color in my Google sheet now as well too.  

You can do this by right click on particular cell, then click *Data validation...* then enter information similar to what I have below.

<center>
![setting drop-down list items](/assets/images/monthly-report/august-2017/setting-dropdown-list-items.png)
</center>

One major caveat for now is that I cannot figure a way to do this for entire column by effecting only odd row. Thus I have to copy paste the result that we did above to every other rows as well. This is reasonably ok as I do it once per month to categorize and mark each task with specific project. But in my mind, it could be better.

Also, I improved two main charts of *Total hours spent* at the top of this report. Changes are as follows

* Project hours spent bar-chart is sorted in descendent order for most hours-spent project down to least one, along with hours-spent percentage for that month
* Big picture hours spent is no more in 3D style as it might block some texts to show up on section of pie chart itself

# heatap
---

As I decided to cease development of multiplayer mode of asteroid to pay full focus on mini-program app which is *heatap*, I've found interesting things and I'd like to share.

During 48 hours prototyping, I keep thinking about map and location. Having seen [Hoodmaps](https://hoodmaps.com) by Pieter Levels as well, I can say it play the huge influencial part of it. I want to make it available and operatable under WeChat's mini-program which has limited features/integration (under JSCore, cannot use `window`, `document`, etc object for example) by focusing on Chinese territory without dependent on external Western services; usually blocked by Chinese Great Firewall (GFW). The project is **not** done yet, and I continue complete the existing features, and might add something else along the way.

> Concept is Paint & Pin or PP (I might use *PP* as the project name when launch). That said you Paint to mark certain area, and Pin to mark specific location with interesting comment.

> Chinese people often call *P* when they refer to Photoshop<sub><span style="font-size:10px">TM</span></sub> i.e. You *P* him in this photo? That's why I want to play around with this word-playing to align with the culture a bit :P

Let's see below.

<center>
![heatap general interaction](https://i.imgur.com/FnfOrl3.gif)
![heatap pin mode](https://i.imgur.com/AdxzZKB.gif)
</center>

<center>
![heatap zoom in/out](https://i.imgur.com/JpRzmzx.gif)
![heatap paint mode](https://i.imgur.com/kGC1ViY.gif)
</center>

From left to right, top to bottom.

* General interaction
* Pin mode
* Zoom in/out + Panning
* Paint mode

Here a clear screenshot

<center>
<a href="/assets/images/monthly-report/august-2017/heatap-screenshot.jpg"><img alt="heatap screenshot" src="/assets/images/monthly-report/august-2017/heatap-screenshot.jpg" width="50%"/></a>
<div><sub>Image is resized. Click for full resolution.</sub></div>
</center>

Don't mind English UI for now as I've planned to localize it to Chinese with the help from my partner.  

> Tencent deviates away from native ecosystem. One good example is WeChat has to remove its [tipping feature](http://www.scmp.com/tech/china-tech/article/2089216/tencent-disables-tipping-function-iphone-version-wechat) from its iOS app. Android is not affected.

Tencent tries to push web apps into its ecosystem; WeChat platform. I see this as opportunity to quickly tap into Chinese market. Its mini-program is the prime flagship at the moment. It's getting improvement, more API support, better IDE, and lucrasive of traffic as seen from growth of [WeChat platform](https://mp.weixin.qq.com/s?__biz=MzAxNzYxMzc0OA==&mid=2650664972&idx=1&sn=24809772be2e566b3103b77e84bc60e3&chksm=83eb86d7b49c0fc179bba0e8fd19924d50fc24ab79e4d7c143d4ceca448995aec75f5992e7fa&mpshare=1&scene=1&srcid=0424M1QT1gWxcpEPep1bJRfr&pass_ticket=KEmzbgqBxC8w8r%2Fps%2FWm4jYMNr3EA%2Fd16BVKiT1cbvDN27Ah4fUrO8k%2FiaVDzo%2BJ#rd) and report of 40% of traffic for Mobike coming from its mini-program alone (I got this from attending [Techcrunch Shenzhen 2017](http://tc.technode.com/2017/en/)).

WeChat mini-program is now 9 months old. I ever remember that I was following this platform closely. I still think that I didn't act fast enough. The platform is quite old, still with future potential. The best time to tap into platform is in the past, the second best time is now.

Not to mention that I see web technology or web development is the fatest way to actually push product onto market and get feedback to iterate. With the resource I have in my hands right now, this is more manageable direction and quicker way to pursue. More detail about pivoted strategy and plan in *strategy* section.

# heatap-admins
---

Not just the development for the project itself. Administrative tasks are quite time-consuming to handle, and required on-going attention.

Administrative tasks for heatap span into both server configuration, and mainly license aquiring. Along the way of development, I know more requirement I need to overcome. If you want to receive payment from customers, you need Wechat micro payment. If your app communicates with your server, your domain name needs to get approved by Chinese government; [the Provincial government branch of the Ministry of Industry and Information Technology](http://www.miibeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=gAhGTSICeUvLuqoMhYAkxWZlU3jPLDcnHLaGQ3a8Co_WNdsYXdID!1509578804); which means you have to get ICP license.

Getting WeChat micro payment feature enabled for your mini-program app, you need

* ICP license (wait for no more than 20 working days)
* Approval from audit team (firm outsourced by Tencent) with 300 RMB fee / time (fast, within 1 working day and can be in same day)

<center>
![icp license example 1](/assets/images/monthly-report/august-2017/icp-example-1.png)
![icp license example 2](/assets/images/monthly-report/august-2017/icp-example-2.png)

<sub>Every ICP-approved website need to accompany such ICP number at the bottom of the page.</sub>
</center>

After you got those twos done, then you're able to begin another process to actually apply. In short, micro payment requires ICP license number (after approval) to be filled in application form and firstly verified by audit team even before you actually apply for it.

The step to get ICP license requires effort and on-going attention. You can choose to do it manually, or just hop in and just use [Qcloud](https://www.qcloud.com/) (not affiliated) which is Tencent's Cloud service that provided tight integration support for your mini-program app.

You have to do the following to acquire ICP license

1. Fill information online and submit
	This includes normal filling online information, and also printing out legal document then stamp seal with your company stamp in number of copies to be sent to Tencent's Audit team in Beijing.
2. Take a photo with Tencent's backdrop
	You can choose to let Tencent send you a backdrop (China only), or go to near photo-copy shop that will carry out the task and submit information for you.
3. Tencent submit your information to Government
4. Wait for approval (government might call you)

<center>
![icp steps](/assets/images/monthly-report/august-2017/beian-1.png)

<sub>4 steps in general to acquire ICP license</sub>

![icp steps waiting less than 20 days](/assets/images/monthly-report/august-2017/beian-2.png)

<sub>One of latter step is to wait for Chinese government to review and approve your ICP license application</sub>
</center>

I'm still waiting for this, it's getting close to 20 days I have to wait. I hope things are ok.

Also we definitely need to host our server in China mainland (not even Hong Kong) to have much lower ping, and dodge the possibility of effect from GFW that might have towards server's Internet request.

<center>
<a href="https://twitter.com/haxpor/status/896533134698659840">![server ping china mainland vs hongkong](/assets/images/monthly-report/august-2017/migrate-server-ping.png)</a>
<div><sub>Click on image to go to the tweet</sub></div>
</center>

I tested it. You have just that ~8ms ping. You will get >100ms if hosted in Hong Kong although Shenzhen is pretty much close to it. I suggest to migrate your host to be within China mainland. No matter you use domestic cloud or VPS service (in which you will need to do research and find your solution if not [Aliyun](https://www.alibabacloud.com/) or [QCloud](https://www.qcloud.com/)). This will shift your mindset for good to not rely on Western API services which are likely to be blocked (and not stable for DNS request) although however you can get away for Internet requests that really need to go outside mainland by using VPN (recommend [Shadowsock](http://shadowsocks.org/)) on your server.

Serving Chinese users. Don't expect most of them to use VPN to connect to websites especially in this case we serve users under WeChat app. Users want to access content on WeChat fast. VPN slows it down; especially photo contents.

All in all, finger crossed for my ICP license approval.

# strategy
---

I pivoted and changed my prioritized focus after realizing that I should in the latter of the month. Maintaining knowledge of too many technology and programming languages spread myself too thin, and I really felt it affects my ability to go deep in certain area. I felt that I cannot do the task with **extremely** high confidence, I stuck in mid-to-not-end range in additional to going back and forth between un-focused technology to build too various diffent products (which are games, Internet service and apps) on too many platforms (in un-focused way). Too much, and I have enough.

So the following is technology and programming language I will be paying focus to and will be basing off almost entire time starting in September.

* **Web tech focusing on WeChat's mini-program**

	Use Javascript, NodeJS, CSS. Cover both backend, and front-end. Not to mention tools/applications that operated or run on server side such as piwik, MySQL, redis, sqlite, and much more or any related tools to get the job done. I plan to improve my skill on front-end which is skill i'm not good at.

	Although the product built with normal web tech can be expanded to reach users on website. Just not now. Focus will be on mini-program.

* **Games on Android market**

	This is all based on Kotlin + libgdx. You can check out my previous projects built with it at [blockbunny](https://github.com/haxpor/blockbunny), [omo](https://github.com/haxpor/omo), [asteroids](https://github.com/haxpor/asteroids), and [raceplant](https://github.com/haxpor/raceplant). With combination of them, it's all possible for Desktop, iOS, and Android platform with one code-based via Kotlin. However Chinese ecosystem in smartphone market share ([1](https://www.chinainternetwatch.com/20511/smartphone-q1-2017/), [2](http://www.businessinsider.com/apple-and-samsung-are-losing-market-share-in-china-2017-8), [3](https://9to5mac.com/2017/05/23/iphone-market-share-gartner-q1-2017/)), close-knit of Kotlin to Android platform, and my interest to also explore world of open development on Android more (apart from previous experience with iOS) thus this is the way I strongly believe is the proper move to go for long term for China market.

	What's about Apps? Apps have least priority for now. It will be for learning purpose, or experiment with the market.

Apart from that, here is my commitment to it.

<center>
<a href="https://twitter.com/haxpor/status/902204751411953665">![android commitment](/assets/images/monthly-report/august-2017/android-focus.png)</a>

<sub>Click on image to go to the tweet</sub>
</center>

When something has more attention, something else will has less. So I pay much less attention, or not pay attention to the following

* iOS
* 3D type of game

	If pursue, you need to do 3D art. Doing so will spread me too thin. So I limit scope to only 2D type of game at the moment.
* Music

	No time left to develop this skill during this long period of time as I ever reported back in [June](http://blog.wasin.io/monthly-report/2017/06/report.html) that I started to learn how to make Chiptune Music via milkytracker, and released [a very short track](https://haxpor.bandcamp.com/track/8-bit-concerto) for [OMO](https://github.com/haxpor/omo) back in [July report](http://blog.wasin.io/monthly-report/2017/07/report.html). If I need one for my games, I will collaborate as I have someone in mind already.

So the question is how can I balance and retain the knowledge of both web tech, and Games. Read more about it at *libgdx-SO* section. 

# libgdx-SO
---

During these times, I really focus on developing mini-program thus heavily utilize web tech. I retain knowledge of libgdx, and kotlin via answering questions popping up on Stackoverflow. My primary goal is not to gain reputation point on that website, but just for myself. Reputation point is like an energy or satisfying moment for reward.

<center>
![so reputation development](/assets/images/monthly-report/august-2017/so-development-reputation.png)
![so reputation current score](/assets/images/monthly-report/august-2017/current-so-reputation.png)
</center>

Clearly, my current reputation is not that high. I'm not in for reps :)

Every early morning, I go there on SO then only check [libgdx](https://stackoverflow.com/questions/tagged/libgdx) tagged question. Actually, I subscribed to its newsletter to send me daily digest every day. It will send only new questions to you at around 6.00 AM (local time) via e-mail. So at least in 1-2 hours (I try to be better to answer within 1 hour) but depend on how hard of troubleshooting of that question is.

Answering someone else's question will open you to a new set of problem domain, or stuff you never want to do before. With willingness to help, you've to explore those APIs and come with solutions to solve such problem. Gradually know more about your toolchain; expand ability to solve your own problems in the future.

---

That's it for this month report. I hope you enjoy my sharing for everything possible things I've touched and worked on so far.

If you have a chance to check out any project above, feel free to let me know what you think. I love feedback, and discussion, hit them up via comment section down below. Or if you don't see comment section, hit me up on twitter [@haxpor](https://twitter.com/haxpor) or email haxpor {at} gmail {dot} com

> You can let me know via e-mail if you want to test *heatap* out before I finally launch it.

Happy coding!