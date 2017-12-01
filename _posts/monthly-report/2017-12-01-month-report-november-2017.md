---
layout: monthly-report
title:  "Monthly Report - November 2017"
date:   2017-12-01 01:17
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/11/report.html
comments: true
og_image: /assets/images/monthly-report/november-2017/project-hours-spent-Nov-2017.png
---

Hey, monthly report for November is here.

# Total hours spent

[![big picture hours spent](/assets/images/monthly-report/november-2017/big-picture-hours-Nov-2017.png)](/assets/images/monthly-report/november-2017/big-picture-hours-Nov-2017.png)
<sub class="tagline margin">Click for full resolution.</sub>

[![projects hours spent](/assets/images/monthly-report/november-2017/projects-hours-spent-Nov-2017.png)](/assets/images/monthly-report/november-2017/projects-hours-spent-Nov-2017.png)
<sub class="tagline margin">Click for full resolution</sub>


# Summary
---

Speaking from looking at the data alone, I've been quite low on hours spent despite releasing several tools internally or publicly.

[![past 5 months total hours spent and programming hours](/assets/images/monthly-report/november-2017/5-months-chart.png)](/assets/images/monthly-report/november-2017/5-months-chart.png)
<sub class="tagline margin">Click for full resolution.</sub>

I relialized I spent too much time contemplating the future plan, and direction back and forth rather than making things. Those lost hours speak for itself from the data. Yes, data can't lie. This is according to the up-coming time around Jan 2018 which is the scheduled for myself to review my own performance thus far. This means there'd be possible for plan slightly changed or adapted as necessary.

Speaking in terms of projects.  

I've switched from HeaTap since the end of October to work on a 2nd mini-program project codename _crac_ which has been in development since mid of November, and in parallel a game project codename _DwellDown_ which at this stage is in idea phase. Not to mention another mini-program project codename _ivly_ is also in the backlog which passed ideation phase already with still unsure in its fate.

The less went to tools and modules/systems I did and released. Read more below.

# crac
---

_crac_ is the idea of of bringing bot to end users, or simply bot as a service.

Due to Tencent doesn't expose any API for normal WeChat user to consume information, only a possible way is to scrape things on website; yes extract from DOM.

A popular and well-adopted by community [wechaty](https://github.com/Chatie/wechaty) can help you do low-level tedious stuff unless you want to mess around with DOM manipulation and website interaction in [wx.qq.com](https://wx.qq.com) yourself. For _crac_, I decided to **implement** my own as part of learning experience, be more familar with DOM manipulation, and just (I knew it silly) that I want to implement all core systems myself.

The idea is to act like user; interacting with website UI to read/send message to friends. To be able to operate on server which there is no browser UI whatsoever, you need headless browser like [PhantomJS](https://github.com/ariya/phantomjs/), or [Puppeteer](https://github.com/GoogleChrome/puppeteer). Commonly both are based on WebKit.

I firstly found out about these headless browsers via PhantomJS, so basically I started with it and based on it to create [wxbotserv](https://github.com/abzico/wxbotserv). This is going to be the backend powering _crac_.

[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-loggin-in-steps.png)](/assets/images/monthly-report/november-2017/wxbotserv-loggin-in-steps.png)
<sub class="tagline margin">Click for full resolution.</sub>

Tencent well thought out the security for the platform. Logging in process requires a real QR Scan from your WeChat app. You cannot just save an image, then extract from it from within the app. You have to scan. This requirement alone leads to cumbersome process in onboarding / logging in users. As you might guess, you have to send QR image to user in creative way that allows them to flexibly scan. It requires high effort to log in.

[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/crac-arch.jpg)](/assets/images/monthly-report/november-2017/crac-arch.jpg)
<sub class="tagline margin">_crac_ overview plan and architecture.</sub>

See more on-going information about this project below in each section.

## Devlog Images

I shared with you on-going development images for interesting part.

* Detect a new message, parse it before returning result

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-1.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-1.png)
<sub class="tagline margin">Click for full resolution.</sub>

* File Transfer, a buffer place before proceeding operation

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-2.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-2.png)
<sub class="tagline margin">Click for full resolution.</sub>

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-3.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-3.png)
<sub class="tagline margin">Click for full resolution.</sub>

	A little tricky. File Transfer as part of your contact, you can send and receive message from it (mostly you send to yourself). As if you are in the current active conversation with one another, you won't have a clear performance-wise chance to receive a new message as you need to keep polling message from DOM. Better is to click on File transfer then detect a red dot indicator (in DOM) over any contact that has new message(s) for you. That's tricky.

* Get multiple messages at once for unmuted chat

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-4.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-4.png)
<sub class="tagline margin">Click for full resolution.</sub>

	Unmuted chat has number of new messages showing inside the red dot. So you know how many new messages you need to parse and process. Unlike muted chat as there's no such number, thus a system in-place to keep track of latest message and process the less as such whenever new messages came is need. Currently I didn't implement the latter just yet.

* Sending message

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-5.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-5.png)
<sub class="tagline margin">Automated reply</sub>

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-6.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-6.png)
<sub class="tagline margin">Attempt that I found out I need to click on File Transfer first before being able to send message</sub>

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-7.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-7.png)
<sub class="tagline margin">Test initiate sending messages to File Transfer</sub>

	Sending message is painful. You just can't set text in DOM then click send. WeChat web won't recognize you've entered anything unless you click on File Transfer and go back in the chat first before clicking on a send button.

## PhantomJS Performance

I've run a test case over my server, you can see how much CPU uage and memory it uses. This is only for one single user. It should be clear that this kind of service cannot be freely scaled, only certain number of users you can serve until you hit the ceiling. Niche, and only users that really need to automate their stuff without any setup would use it.

[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wxbotserv-dev-8.png)](/assets/images/monthly-report/november-2017/wxbotserv-dev-8.png)
<sub class="tagline margin">Click for full resolution.</sub>

As well, someone [benchmarked performance between Headless Chrome vs PhantomJS](https://hackernoon.com/benchmark-headless-chrome-vs-phantomjs-e7f44c6956c). I could expand this further to include Headless Chrome as backend in future.

## WeChaty Developer's Story

I came across this (slightly shocking at first but by now I'm calm down) story from developer of WeChaty.

[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/wechaty-story.png)](/assets/images/monthly-report/november-2017/wechaty-story.png)
<sub class="tagline margin">WeChaty main developer's story</sub>

I can see that this is possible. Normal working person user can have several (and several) of group chats. If you're out-going person, or technical person that has way to accept friends (like via on Github if you develop something great) you can reach high number.

# FuckUp Night Vol.2 Shenzhen
---

Great [event](https://mp.weixin.qq.com/s/NEJQBYTOv_QBDpMUDKFtyg), and great night. My plesure to connect with like-minded people there.

[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/fuckup-night-vol2-1.jpg)](/assets/images/monthly-report/november-2017/fuckup-night-vol2-1.jpg)
<sub class="tagline margin">While sharing story</sub>


# Opensource Projects
---

List of opensource projects released within this month

* [mpauthx](https://github.com/abzico/mpauthx)

	Token giver for Users logged in to WeChat Mini-program. Based on top of redis for fast token checking/access, and sqlite3 for flexible user db storage.

* [wxbotserv](https://github.com/abzico/wxbotserv)

	WeChat bot for normal user based on PhantomJS (via Phantom-node). This module powers _crac_ project.

List of updates pushed to opensource projects this month

* [digitaloceanbackup](https://github.com/haxpor/digitaloceanbackup) & [qcloudbackup](https://github.com/abzico/qcloudbackup)

	Added ability to notify you with the result of operation through WeChat official/subscription account that has ability to send templated message to user.

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/backingup-server-log.png)](/assets/images/monthly-report/november-2017/backingup-server-log.png)
<sub class="tagline margin">Backing up's server log</sub>

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/backingup-templated-message.jpg)](/assets/images/monthly-report/november-2017/backingup-templated-message.jpg)
<sub class="tagline margin">Templated message sent to notify WeChat user</sub>

* [aseprite-macos-buildsh](https://github.com/haxpor/aseprite-macos-buildsh)
	
	Updated against latest update from [aseprite](https://www.aseprite.org/) which its skia is now built against `aseprite-m62` branch.

	[![wxbotser's logging-in steps](/assets/images/monthly-report/november-2017/aseprite-automated-build-macos.png)](/assets/images/monthly-report/november-2017/aseprite-automated-build-macos.png)
<sub class="tagline margin">Automated build of aseprite on macOS</sub>

* [wechat-notifier](https://github.com/abzico/wechat-notifier)

	A module to help notify user via templated message for WeChat official / subscription account that has ability to send templated message.
	Both of digitaloceanbackup, and qcloudbackup makes use of this module in their code base.

---

That's it for this month report. I hope you enjoy my sharing for everything possible I've touched and worked on so far.

As usual, if you have a chance to check out any project above or have any question to clarify, feel free to let me know what you think. I love feedback, and discussion, hit me up via comment section down below. Or if you don't see it, ping me on twitter [@haxpor](https://twitter.com/haxpor) or email haxpor {at} gmail {dot} com.

Happy coding!