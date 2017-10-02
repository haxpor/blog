---
layout: monthly-report
title:  "Monthly Report - September 2017"
date:   2017-10-02 17:33
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/09/report.html
comments: true
og_image: /assets/images/monthly-report/september-2017/project-hours-spent-Sep-2017.png
---

Here comes September report.

# Total hours spent

[![big picture hours spent](/assets/images/monthly-report/september-2017/big-picture-hours-Sep-2017.png)](/assets/images/monthly-report/september-2017/big-picture-hours-Sep-2017.png)
<sub class="tagline margin">Click for full resolution.</sub>

[![projects hours spent](/assets/images/monthly-report/september-2017/project-hours-spent-Sep-2017.png)](/assets/images/monthly-report/september-2017/project-hours-spent-Sep-2017.png)
<sub class="tagline margin">Click for full resolution</sub>


# Summary
---

## Pivot Again?!?!

After I've stated the direction since last month to base thing on WeChat's mini-program (thus webdev and web apps), and games targeting on Android platform. For latter, since then I have invested and committed to use Android phone (Huawei G9 Lite specifically) heavily for a month long.

Android ecosystem is interesting and pretty much open. Development tools and environment can be based off just command line alone (and works out-of-box) in which I like it alot. App developers have control and able to override even a tiny thing such as whether or not to allow the app to be installed on SDCard etc. Sadly in terms of performance, day-to-day usage, quality of available apps, and my familarity with it in terms of user and developer (slightly biased as I've long been iOS user and developer), it slows me down and I just feel I'm not 100% efficient when use Android phone. This affects my decision in last month.

I decided it's not for me if I'll need to **mainly** and **heavily** base business on Android. I can't keep my enthusiastic, and motivation level to continue using it although in terms of market share in China and potential is way better.

Combine with the reason that I've lost faith in libgdx. It's an open source game library that I heavily base on since May 2017. libgdx regards Android as first-class citizen, and from there you develop to include iOS and PC. It uses Kotlin, and tools Android developers use. This means Android is not viable and healthy direction for me to proceed.

So again I pivot. See more detail in [Pivot](#pivot) section.

## Progress

Talk about progress. I dropped commercial version of [Asteroids](/monthly-report/2017/07/report.html#asteroids) as I lost interest in it. Open source version is still on [Github](https://github.com/haxpor/asteroids).

Reasonable progress made on [Heatap](/monthly-report/2017/08/report.html#heatap). It has blocking issue regarding to micro payment approval. It has been rejected for 5-6 times in this month alone. 1 week I spent on making [company's website](https://abzi.co). 2 weeks on top of that has been used to modify the site to satisfy auditors. Although there's no more issue relating to website, but still auditors didn't seem to believe or sure about what kind of things our company trying to sell (which is completely online stuff & service!!!). It's not approved yet up until now. See more info in [Heatap](#heatap) section.

Apart from that, this month I spent time in blogging almost the same for the past 4 months combined. Tracked at 32.4 hours (past 4 months combined at ~33.x hours) included hours in writing [previous report](/monthly-report/2017/08/report.html) as well. I think mainly I take more time in thinking process especially monthly report to sum up every possible of things into writing.

> I wrote every month report at the first day of every month thus hours spent on current month report is tracked in next month.

As well, I wrote [SwitchResX to Help Set up Ultra-Wide LG Monitor on macOS](/blog/2017/09/28/switchresx-to-help-set-up-ultrawide-lg-monitor-on-macos.html), and [Transfer Money Across Border to China Mainland via Paypal & LianLianPay](/blog/2017/09/30/transfer-money-across-border-to-china-mainland-via-paypal-and-lianlianpay.html) post.

At last, I finally found a solution to transfer money across border to China mainland. Specifically to transfer money from my homeland (Thailand) to China by using Paypal + LianLianPay in which I wrote about it as you can see at the link above. As well, there's another service I happen to know after I tried and finished that article. See more info at [Money Transfer Across Border to China Mainland](#money-transfer-across-border-to-china-mainland) section.

# Pivot
---

For web-tech direction, it's still the same. Going forward for long term on WeChat mini-program platform, and web app in general. This is the same, left intact.

For game direction, clearly it's not mainly based on Android anymore. Back of my mind tells me to go back to iOS, pick up what I left off to continue what I've invested in this platform for quite long time accumulating mainly from my experience in contracting in the past before. To maintain knowledge and familarity without too much context time switching for both app & game development, then focusing on a single platform is a good idea.

Combine with there's more and more people fork [Potatso](https://github.com/haxpor/Potatso) the project, filed issues, and use it. I feel that by going into this direction. I will have more chance to go back there and contribute. More people can access to Internet freely in China. I can't promise, but as I said there's more chance if I turn my focus on iOS.

# ICP License
---

I'm happy to say that we successfully acquired ICP license for [abzi.co](https://abzi.co).

ICP record result from within QCloud (cloud service that also provides ICP record application by Tencent).

[![ICP record result from within QCloud](/assets/images/monthly-report/september-2017/icp-approved-qcloud.png)](/assets/images/monthly-report/september-2017/icp-approved-qcloud.png)
<sub class="tagline margin">ICP record result from within QCloud's Beian dashboard</sub>

[![ICP license detail for abzi.co](/assets/images/monthly-report/september-2017/abzico-icp-license.png)](/assets/images/monthly-report/september-2017/abzico-icp-license.png)
<sub class="tagline margin">ICP license detail for abzi.co</sub>

It's safe to show above information because it's public that anyone can search through government system at [miitbeian.gov.cn](http://www.miitbeian.gov.cn/publish/query/indexFirst.action).

Also it's the first ever time for me in making website that I need to include a license number, then linked it to government website at the bottom of the page.

[![ICP license at bottom of abzico website](/assets/images/monthly-report/september-2017/abzico-icp-license-at-bottom.png)](/assets/images/monthly-report/september-2017/abzico-icp-license-at-bottom.png)
<sub class="tagline margin">ICP license number linked to government website at abzi.co. You have to do this.</sub>

So it's all good. Recall that ICP license is basically in need to develop application or having website up and running in China mainland. Especially in case of WeChat's mini-program, in order to call external API at your own server, you need those API urls to be ICP-approved. Non-ICP-approved works only during development, but not at launching time.


# Heatap
---

I added the following things

* Toggleable icons between outline-based and normal for markers showing on the map
* Filtering system against UI options at the top
* Culling for circles and markers for much better performance in rendering
* Better UI/UX to show loading spinner at first when load map
* Dynamic permission asking for the app from users at startup
* Strip out un-needed css file

Here is the result so far.

[![heatap screenshot in September](/assets/images/monthly-report/september-2017/heatap-september-1.jpg)](/assets/images/monthly-report/september-2017/heatap-september-1.jpg)
<sub class="tagline margin">Marker Icons introduced into the app. Filtering system works now as well.</sub>

[![heatap screenshot 2 in September](/assets/images/monthly-report/september-2017/heatap-september-2.jpg)](/assets/images/monthly-report/september-2017/heatap-september-2.jpg)
<sub class="tagline margin">Adding a pin message</sub>

and here video in action

<iframe width="100%" height="315" src="https://www.youtube.com/embed/GoiwePbvqp8" frameborder="0" allowfullscreen align="center" style="display:block; text-align: center; margin: 0 auto"></iframe>

<sub class="tagline margin">HeaTap in action video (on youtube)</sub>

## Pursue of Micro Payment

Apart from development itself, the blocking issue is with **micro payment** approval on WeChat platform. My partner helps me in calling the support team to ask of what is the root problem they keep rejecting our proposal. Almost all of reasons are that our website doesn't provide enough information about what kind of business we're doing. This is fair enough that Chinese government is strict in ability for certain type of business can do this or that or not, in turn 3rd party platforms have to adhere to rules and regulations as set by government.

Anyway, let's see how this thing went from start.

Within 1st week, I've come up with website design, and have working version ready up and running.

[![abzico 1st version website design](/assets/images/monthly-report/september-2017/abzico-website-design.png)](/assets/images/monthly-report/september-2017/abzico-website-design.png)
<sub class="tagline margin">Abzi.co 1st version website design. Click for full resolution.</sub>

From my understanding, WeChat OA (Official Account) is the parent account (think Facebook Page) that holds several mini-program (or call applet). You can bind mini-program to WeChat OA. In order to have an ability to recieve payment from customers through your mini-program, you need to apply for micro payment. Apply once for WeChat OA, then enable and bind such ability for each mini-program itself.

[![bind micro payment to wechat mini program](/assets/images/monthly-report/september-2017/2-options-to-bind-mp.png)](/assets/images/monthly-report/september-2017/2-options-to-bind-mp.png)
<sub class="tagline margin">Two options to enable micro payment for individual mini-program is to newly apply (if not yet), or bind with approved one from WeChat OA.</sub>

The path I've taken is "once and for all" (there is also a chance that this might be wrong, I'll update you in next report). That is apply once for WeChat OA then propagate that payment ability to all children of mini-program. It requires more effort than what I expect, much more.

[![steps in being approved for micro payment for WeChat OA](/assets/images/monthly-report/september-2017/micro-payment-step-in-approval.png)](/assets/images/monthly-report/september-2017/micro-payment-step-in-approval.png)
<sub class="tagline margin">Steps in being approved for WeChat OA's micro payment</sub>

In general, it takes around 1-5 working days to be reviewed and initially approved. Steps after that should be very smooth as Tencent will test sending money via wire transfer to your business's bank account, you received and log on to the merchant platform to verify such amount of other verifying information Tencent sent to you, then finally we sign a contract (I guess digitally) then it's all done.

We didn't pass the first step yet! Support call told my partner to launch the product first, even we told them we need to integrate micro payment or at least make it ready even we don't charge customers at launch. To have micro payment API integrated, tested, and ready even we didn't use it yet is much better.

See more info (in Chinese) [here](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_10&index=1), and [here](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_11&index=2). It looks to be aligned with what I'm understanding.

So the plan right now is to launch to satisfy the auditors before we can update new version integrated with micro payment to charge users in the future.

Fortunately, the characteristic of HeaTap falls into is crowd-source based thus it's good to launch first to gather content inputting from users. No immediate need to charge right away. Then whenever it has enough traction, charging can be done later. Anyway all in all, I don't like this as I said earlier having well-test payment API even we don't use it before launch, and knew we could charge anytime we want is a much better position to be in. 

## Website + WebDev

Finally I got to experience of how it feel like to support older browser especially IE8 and up from working on [abzi.co](https://abzi.co) website.

Browser support, Browser support, ... everywhere :)

Why do I need to care much about IE8 by the way? It's because I want company's front page to be able to consumed by anyone especially users in China (government and auditors are prime example). To minimize any risk that they could not browse to look for information on website.

I happen to know that `border-radius` supported since IE9+. So I switched to use circle image instead to make it support included important part like team avatar. Also no .svg images, no `flexbox` or any modern & fancy stuff. As I have Windows XP with IE8 running on VirtualBox, I test it at the end of each iteration of website work to see how it looks. If all is well in general, and nothing blocks core information from accessible or breaks UI (except `box-shadow` :) then it's all OK!

![ie broken because of `border-radius` and `flexbox`](/assets/images/monthly-report/september-2017/ie-broken.gif)
<sub class="tagline margin">IE8 broken because of _border-radius_ and _flexbox_</sub>

As well, majority of China users use WeChat. They scan and scan. Users are friendly to just add people to connect, either in business or they are interested in your view. They want to always learn from you. It happens to me quite several times that from within WeChat group, after I exchange thought, ask questions, or give some valueable/helps/feedback, a few Chinese people will send me WeChat's friend request. I'm happy to accept no matter what.

Thus it's better idea to integrate QRCode at front page for easy adding. Yes, in terms of indie and small company like I'm doing. There's no need to act like corporate or level that I'm not at. Friendly and flexible.

![QRcode to add as contact at front page](/assets/images/monthly-report/september-2017/qrcode.gif)
<sub class="tagline margin">Showing QRCode at front page.</sub>

I feel to myself that I've learned a lot in webdev this month. Also feel that I've _internally_ leveled up my webdev skill (the same way whenever you feel you've come to next English fluential level). It's gradually going to be more natural. Really happy about this.

Path ahead will involve more of webdev skill as I focus on WeChat mini-program, and web tech going forward. Always learn.

## Website Deploy Tool

I also created deploy tool to minimize my time that could be wasted in manual zip, upload to server, etc. Now it's all in one shot automatically.

One notable and neat thing I found is to use

```shell
ssh user@targethost.com "ls && your_command_here && blah && blah"
```

to remotely execute commands on server. Pretty handy.  
Just set up your server to only allow SSH-Key authentication to log on and disable normal way of accepting password. See my old [post](/blog/2016/12/21/ssh-key-based-authentication-on-ubuntu.html) for more information.

Another notable command is extracting zip file into current directory without parent directory path. You can strip it out like the following

```shell
tar xzvf build.tar.gz -C ./ --strip-components=1
```

Assume that directory tree inside `build.tar.gz` has `build/` directory leading, and you just want to extract only files out in target directory. You need `--strip-components=1` to help out in this case.

Above will extract `build.tar.gz` into current directory by strip out leading directory by 1 level.

# Money Transfer Across Border to China Mainland
---

I need to find a way to fund my endeavor here. Moving money across border into China mainland. Finally tried the option of using [Paypal + LianLianPay](/blog/2017/09/30/transfer-money-across-border-to-china-mainland-via-paypal-and-lianlianpay.html). It works well, I got my money in 2 working days although there's fees there. But at least it's method that works for me right now.

Suddenly after published my article about Paypal + LianLianPay, [@tianyuf](https://twitter.com/tianyuf) [suggested me](https://twitter.com/tianyuf/status/914135740619075584) to take a look at [@sendwyre](https://twitter.com/sendwyre).

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">have you tried <a href="https://twitter.com/sendwyre?ref_src=twsrc%5Etfw">@sendwyre</a>? <a href="https://t.co/Uul8gqc6F7">https://t.co/Uul8gqc6F7</a></p>&mdash; Tianyu M. Fang (@tianyuf) <a href="https://twitter.com/tianyuf/status/914135740619075584?ref_src=twsrc%5Etfw">September 30, 2017</a></blockquote>
</center>
<sub class="tagline margin">Thanks for fast suggestion!</sub>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Compare to Paypal + LianLianPay, I can save ~100 RMB per ~2,000 RMB transfer. It's going to be huge when send large amount of money.

Combine with [suggestion](https://twitter.com/dopetard/status/914148669636567041) from [@dopetard](https://twitter.com/dopetard)

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One cheaper option is to buy bitcoins and get  it in your mainland account by selling it on localbitcoin.</p>&mdash; Ankur Kumar (@dopetard) <a href="https://twitter.com/dopetard/status/914148669636567041?ref_src=twsrc%5Etfw">September 30, 2017</a></blockquote>
</center>
<sub class="tagline margin">This leads me to do more research about blockchain, and bitcoin.</sub>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

> Following 👇 is based on my observation. You're warned...

Altogether, I checked out wyre and digged further information then find out that its platform is based on blockchain! That is the reason why it can offer lower fee. **My thought** about this is that the service requires you to deposit money into its own system. This is like you transfer money to someone else to manage. That amount of money will be transfered between its own system via blockchain. I believe it should be in the same way as bitcoin, thus there would be no fee for them to operate such thing. Due to there's no central market or global exchange rate like banking system to mitigate the movement of the market. It's just a matter of both end in dealing for such transaction. So they can sell and buy at the same price point, no loss or gain over customer's money.

So service could be consisting of two ends of bitcoin-like accounts to automate transfering at he same price-point (_bid_ and _ask_ amount). In turn that will move customer's money from one end to another in which each of the account locates to different part of territory the service supports and be able to cash out at local bank.

It might be the case that the company is well funded so it can operate moving large amount of customer's money at a time, or it might gradually upper the limit of amount of money when there's more customers using the service; thus more fee commissioned.

Above is my pure observation and a single day research to know more about blockchain and bitcoin. Feel free to correct me if I'm wrong in the comment section.

# Automated Server Backing up Script
---

Early this month I do realize that I need to tighten up server diaster recovery directly in terms of backing up.

So I made two automated scripts to back up system, and open source them as well

* [DigitalOceanBackup](https://github.com/haxpor/digitaloceanbackup)
* [QCloudBackup](https://github.com/haxpor/qcloudbackup)

VPS services might have different favor of backing up approach. It might limit in number of snapshots, price point (per hour? per month?, is there penalty if remove file before month ends like in case of AWS Glacier or S3?), etc.

Especially in case of DigitalOcean as its pricing calculation is flexible and will be based on per hour-basis if you delete a snapshot before month ends. Thus the concept is that if you can keep number of snapshots low, and continue deleting un-needed ones but keep latest N snapshots. You're fine in terms of cost per month. Cheap.

QCloud limits 7 number of snapshots per disk. Creation operation is smooth and fast, thus simple than DigitalOcean.

More information is at those Github project, in case you use either one or both of them.

---

That's it for this month report. I hope you enjoy my sharing for everything possible I've touched and worked on so far.

As usual, if you have a chance to check out any project above or have any question to clarify, feel free to let me know what you think. I love feedback, and discussion, hit me up via comment section down below. Or if you don't see it, ping me on twitter [@haxpor](https://twitter.com/haxpor) or email haxpor {at} gmail {dot} com.

Happy coding!