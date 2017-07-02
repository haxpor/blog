---
layout: monthly-report
title:  "Monthly Report - June 2017"
date:   2017-07-02 05:36
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/06/report.html
comments: true
---

# Total hours spent

![big picture hours spent](/assets/images/monthly-report/june-2017/big-picture-hours-spent.png)
![projects hours spent](/assets/images/monthly-report/june-2017/projects-hours-spent.png)

# Summary
---

This month packs with quite activities and releasing of a couple of projects. There are lots of tasks I can categorize. This makes me shift the way creating hours-spent chart in this report. You will see _Big picture_, and _Projects_ charts.

_Big picture_ mainly contains the following things

* programming - all about technical implementation in code
* visual - all about drawing, coloring, making logos, and anything that involve artistic stuff
* music
* research
* writing - mainly about when I write a new blog post
* misc - other stuff that cannot be categorized above

Above list is mandatory, and somewhat fixed that I tend not to change in the future. I got inspiration to base off categorizing like that from [Devine](https://twitter.com/neauoire). Classify each task like what I did previously is easier when there're not too many tasks, but when there's many, I really have a hard time and it requires me too much time to think about it.

_Projects_ will now better categorized into one bigger project/task, and not spread for too many, it should be easier to grasp. It will be better over time.

## Block Bunny

Previous [May report](http://blog.wasin.io/monthly-report/2017/05/report.html) did mention about [blockbunny](https://github.com/haxpor/blockbunny) project. I released it in early of June.

<center>![Blockbunny in action 1](http://i.imgur.com/05P8lh8.gif)</center>

<center>![Blockbunny in action 2](http://i.imgur.com/k98jwnl.gif)</center>

<center>![Blockbunny with controller](http://i.imgur.com/tJYqnam.gif)</center>


If you didn't check it out yet, I open sourced it on [Github](https://github.com/haxpor/blockbunny).

## CIGA Game Jam 2017 - Race Plant

I participated in CIGA Game Jam 2017 with other fellows Chinese game developers here in Shenzhen as well. It's the first time of game dev activity here in China I participated.

![Race Plant](http://i.imgur.com/BM4e4UB.png)

I made Race Plant solo in 48 hours. The process involves me to quickly fasten the process in learning how to make pixel art. It helped a lot! To be honest, this is the first major time I really make art myself. I'm quite satisfied with the result I got.

The strategy I approached is to find reference both in color pallete, and end result you want to achieve from Twitter, or Internet. Then at first try to make your own as good as that reference. But if it's not it's ok because you got a good reference point to quickly start off.

This process makes me diss GIMP and completely do pixel art in Aseprite from now on. It's great software, and you should check it out.

Also I published Race Plant on [itch.io](https://haxpor.itch.io/race-plant) with pay as you want model. I open sourced the project with respective license with limit in some ways on [Github](https://github.com/haxpor/raceplant) too with donation model in compensate that you might learn something from the project.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/3W4gL9X_Zks" frameborder="0" allowfullscreen></iframe></center>

At last, check its [postmortem](http://blog.wasin.io/blog/2017/06/19/postmortem-raceplant-ciga-game-jam-2017.html) post out if you didn't.

## OMO

OMO is a puzzle game originally by ForeignGuyMike in which it's a great learning resource thus I went through on top to make changes and add improvements. You can check the project out on [Github](https://github.com/haxpor/omo).

Ohh but not just changes and improvement, I noted key notes regarding to libgdx and kotlin that the project makes use too. Check it out on the link above.

Yup, you can see what changed and improved on link above. Feel free to do anything with the project, but be aware that ForeignGuyMike already published this original idea on Google Play thus you just cannot copy the code and reskin or slightly modify then publish. Do the real work, adapt, change to not make it completely rip-off, then you will have a chance to publish.

Main notable change is smooth and flexible drag-touch to select and deselect tiles.

<center>![OMO gif 1](http://i.imgur.com/SFOCSd8.gif)</center>
<cetner>_Saved high scores has been added to the project_</cetner>

<center>![OMO gif 2](http://i.imgur.com/tNGjvtV.gif)</center>
<center>_Smooth and flexible drag-touch to select and deselect tiles_</center>

It's technically done, just left with music and sfx in which I decided to learn how to make chiptune music first before call it complete.

## Server

I did take some times to create a notifier which is based on NodeJS to send alert message to slack group whenever certain process died on server. I'm tired to know it long after HTTP process died, and I cannot access my website. Thus this notifier will bombard the message until you see and fix the problem :P

<center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Bot game on point. Prepare to set up alerter when certain critical process crashed silently, then alert me. What if  alerter crashes 2?👨🏽‍💻 <a href="https://t.co/6eymFeBLLl">pic.twitter.com/6eymFeBLLl</a></p>&mdash; Wasin Thonkaew (@haxpor) <a href="https://twitter.com/haxpor/status/873454744718659584">June 10, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

Here is the series of screen captures of what it looks like

<center><img src="/assets/images/monthly-report/june-2017/notifier-slack-1.jpg" width="60%" alt="server notifier slack 1"></center>
<center>_Notifications sent to your mobile phone_</center>

<center><img src="/assets/images/monthly-report/june-2017/notifier-slack-2.jpg" width="60%" alt="server notifier slack 2"></center>
<center>_Alert messages received on slack channel_</center>

<center>![server notifier slack 3](/assets/images/monthly-report/june-2017/notifier-slack-3.jpg)</center>
<center>_Same to above but with modified message format_</center>

<center>![server notifier slack 4](/assets/images/monthly-report/june-2017/notifier-slack-4.jpg)</center>
<center>_Logs as shown while running no server_</center>

All in all, just check it out on [Github](https://github.com/haxpor/sg-server-notifier).

## Techcrunch Shenzhen 2017

I attended [Techcrunch Shenzhen 2017 event](http://tc.technode.com/2017/en/main-stage/?from=timeline&isappinstalled=0#1495077026084-21a4b319-af3b) and captured what [Edith Yeung](https://twitter.com/edithyeung) said during panel along the line of difference of doing business between Eastern and Western that the former tends to quickly form partnership, and collaborate but latter tend to check the legitimate & background for another party before forming a thing. That's exactly what I've felt personally too even though not only in highly business sense.

<center>![Techcrunch badge](http://i.imgur.com/fxIHVaFl.jpg)</center>

This leads me to think about game dev ecosystem here in China especially Shenzhen (I think it applies to all area in China). Chinese game development ecosystem is very friendly and supportive. Everyone would like to help each other out. I think this trait is very natural in Chinese way of doing business as well. People here tend to collaborate, eager to seek to find partnership and my sense tells me that it'd be easy to close the deal if both side agrees.

I suggest you to sign up or attend events hosted by [HAX](https://hax.co/) too in you're into hardware stuff and especially if you base in Shenzhen. They will get freebies like free tickets to event i.e. Techcrunch, funding your hardware-based startup, meetups, etc.

## VISA, Work Permit, and Residential Permit

Pheww! Early of June, I've done all of these and acquired all of them. Quite a long haul process spanning into 5-6 months included the time from registering a business license, going back to my own country (Thailand) to get all legal required documents, prepare all documents, commute to government places to handle stuff with help from agency etc. I don't think I will have time to pay attention to all the detail, so it's better to have agency takes care of stuff and you just do your best to help them from your side. If you want help regarding these, I can refer you to my trust agency to take care these stuff for you, just message me on [Twitter](https://twitter.com/haxpor).

But that's not all yet.....???

As of now, I'm in the process of waiting for bank confirmation to complete the process of acquiring company bank account. It's almost there I think after waiting for a month, that's a usual time for waiting anyway. So all process to get company license, VISA, work permit, residential permit, and bank account might take ~6 months to complete. If you plan the time carefully, it might be shorter too.

## Chiptune Music

Ohh, I love this part. As stated from OMO, I decided to firstly learn how to make chiptune music first before calling a day for that project.
I'm in the process of doing that right now, and so far so good.

Right now I'm mainly using [MiklyTracker](http://milkytracker.titandemo.org/). I will update on this skill development later in next month.

---

That's it for this month report.

If you have a chance to check out any project above, feel free to let me know what you think. Or if you have any suggestion, I love discussion and receive feedback, hit them up via comment section down below.

Happy creating fellows!