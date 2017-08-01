---
layout: monthly-report
title:  "Monthly Report - July 2017"
date:   2017-08-01 02:16
thumbnail: /assets/images/post-thumbnail/ic_content_paste_black_24dp_2x.png
categories: monthly-report
tags: [monthly-report]
permalink: /:categories/2017/07/report.html
comments: true
og_image: /assets/images/monthly-report/june-2017/projects-hours-spent.png
---

Here comes July report.

I changed to present projects hour spent in bar chart instead of pie chart as before for this report (and might continue for next one). It's clearer to present in this way if there are lots of projects to show.

# Total hours spent

<center>![big picture hours spent](/assets/images/monthly-report/july-2017/big-picture-hours-spent.png)</center>
<center>![projects hours spent](/assets/images/monthly-report/july-2017/projects-hours-spent.png)</center>

# Summary
---

Most of the time in this month has been spent on _asteroids_ project both in terms of research and programming. I've done releasing open source version of it, but continued to adding features I want for commercial one in which hopefully soon that I can release to the wild.

Also spent a few hours to contribute for [libgdx](https://github.com/libgdx/libgdx), and [Potatso](https://github.com/haxpor/potatso). More story to tell for the latter one. Also open source [aseprite-macos-buildsh](https://github.com/haxpor/aseprite-macos-buildsh) which is an automated tool to help building [aseprite](https://www.aseprite.org/) on macOS.

Also few hours spent on fixing and configuring my servers to be ready for deploying company website ([https://abzi.co](https://abzi.co)), but you will see only "Underconstruction" for now.

## asteroids
___

It is initially a port project from ForeignGuyMike, then I added bunch of new improvements, and support over control support seamlessly for PC and mobile platform, better error and resource management handling, and fully Kotlin language ported.

You can take a look at the project [here](https://github.com/haxpor/asteroids).

### Mobile control support via Touchpad
<center>
![iOS gameplay gif](https://media.giphy.com/media/54r3o7nmXqhXi/giphy.gif)
</center>

### Controller support for Desktop
<center>
![controller support](http://i.imgur.com/O2sSXq1.gif)
![high score controller interaction](http://i.imgur.com/of6n3Cx.gif)
</center>

After porting effort is complete, I want to monetize it.

> Thus I diverge from it and in the progress of adding multiplayer mode (could I call it PvP mode?). This is a turning point for streaks I've done on github. Since then, I switched to use [gitlab](https://gitlab.com/) for private repository. As much as I want to keep being on Github ecosystem, but private repository needs you to pay premium for $7/month. So it's no go for me.

Back to the game. Major feature I'm building right now is multiplayer mode.  
Allowing player to play with each other in the death match is definitely cool. So I try. Below is the result I got so far.

<center>
![asteroids multiplayer](https://media.giphy.com/media/z1eKUFwVf7IC4/giphy.gif)
![asteroids server log](https://media.giphy.com/media/9zgvQCHfBzc76/giphy.gif)
</center>

Behind that hours accumulated done in research for networking model and approach I should be doing with the following aims

* Resource consumption needed on server should be as minimum as much as possible (thus peer-to-peer via relay server on UDP protocol is an answer)
* Up for the game in real-time pace (TCP is no no, only option is UDP)

Server is implemented in NodeJS with no extra libraries in used, the same goes for client in pure Java code as of now. The result you see in the gifs above is smooth and good due to the fact that client sends only commands to server, server will relay them to another player. This goes for 2 ways for both players. Sending commands update to server is at 30 times per second (or 30 packets per second). Client simulates the game smoothly at 60 fps.

It uses minimal bandwidth in which the game like Starcraft, and Supreme Commander also use this technique<sub>[Ref](https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/)</sub>. Anyway, i'm not done yet as what I need more is 

* Reliable + Ordered UDP messaging

	TCP offers this capability, but using TCP is no option due to lagging in time wait when packet dropped, it needs to wait double of the RTT (Round-trip-time) or 2*RTT. Input packets sent are critical that it needs to make sure it makes its way to another client. Sometimes UDP packets also arrive out of order. Implement such feature to ensure reliability and orderness on top of UDP protocol is a way to go and I found it very hard to implement, although there's a great [resource outlining what to do in concept](https://gafferongames.com/post/reliable_ordered_messages/), or [code to look at](https://github.com/networkprotocol/reliable.io).

* Ensure deterministic

	As client simulates the game on their own, each input sent from another side needs to produce the same result on both end even the game would be played on PC, Android or iOS. As research, this problem related to Floating-point calculation error, thus to solve that we need [Floating-point Determinism](https://gafferongames.com/post/floating_point_determinism/).

As a side note, [Raknet](https://github.com/facebookarchive/RakNet) has such features of reliability and ordered of UDP message and it's open source (although 3 years with no updates). And for Java implementation, I discovered [jRakNet](https://github.com/JRakNet/JRakNet) which might be worth to take a look.

If you're interested in networking in games, I recommend to read all articles written by Glenn Fiedler listed [here](https://gafferongames.com), but better to start with this [article](https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/). For this time being, I will be continued working to finish this mode, and release soon after that.

## OMO
___

Early this month, I also released OMO as you can see its gifs in action from previous [report](http://blog.wasin.io/monthly-report/2017/06/report.html). I added background music from knowledge gained from learning milkytracker.

<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3650161744/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://haxpor.bandcamp.com/track/8-bit-concerto">8-bit Concerto by haxpor</a></iframe>

It's short but sweet.

If you didn't check out OMO yet, I open source it [here](https://github.com/haxpor/omo).

## aseprite-macos-buildsh
___

I use aseprite, and really feel in love with it. When there's a new features introduced in new build version, it would take some times for you to manually build it yourself. Thus I create an automated build just in case you need to build it to get those new features ready; on-demand.

It will help you with everything from fetching source code til packaging into an app bundle ready to be double click and use.

It's tested and aimed to be used on macOS, but I guess you can modify it to cover your platform as need by have to look at its official [build manual](https://github.com/aseprite/aseprite/blob/master/INSTALL.md).

You can check this project out on [Github](https://github.com/haxpor/aseprite-macos-buildsh).

## Opensource Contribution
___

I contributed to libgdx to make it fully 100% Kotlin + fixed a bug of building on iOS-MOE. This [PR](https://github.com/libgdx/libgdx/pull/4812) unfortunately didn't get merged yet as of this writing.

Also for [Potatso](https://github.com/haxpor/potatso) in which I started porting to Swift3 around 8 months ago, now passed 200 stars and 200 forks, and still counting. Also during this time, due to Chinese government intensely engages in regulating of un-approved VPN services or software. I saw this [tweet](https://github.com/haxpor/potatso) from original developer of the project. Apple asked him to take the app down. Not only that, but major VPN service providers like Express also affected. I understand that Apple has to obey law in each country the app would be sold. But it seems like it only happens against China. It's getting serious and [by February 2018](https://techcrunch.com/2017/07/10/china-vpn-ban/), government plans to completely block and take down all of VPN service.

Anyway, late in this month, I got this from someone who uses Potatso.

<center>
![donation potatso](/assets/images/monthly-report/july-2017/donation-potatso.jpg)
</center>

That's right. It's 2 RMB donation from someone benefits from using Potatso. Thank you to you again!  
Safe to say it's the first Chinese Yuan money I made here after switched to fully focus on my own projects. Hooraayyy!

## WeChat Mini-Program
___

I played around with it with objective to test its API. I didn't spent much time yet as I decided to focus on asteroids project first.

![debugging wechat miniprogram](/assets/images/monthly-report/july-2017/wechat-miniprogram.png)

As far as I can tell from testing, you cannot use jQuery. For other stuff to convert, transpile your code, you have to route and set it up yourself. Also, API is in Chinese, be prepare to always use Google Translator Chrome Plugin for full page translation.

QR Scanning ecosystem also applies here from setting up process through development process. Account owner permits linked developer account either for logging in, configuring something regarding to the app, etc via QR Scanning. I recommend to check this [article](https://medium.com/@yelin.qiu/a-complete-manual-on-wechat-mini-program-development-8fd28a85ee0d) out too.

Its IDE is powerful enough that it makes me feel the old day of using Visual Studio. Its intellisense is fast in popping up to show you code hint. Result shows and can be refresh right away after code changed. Pretty much as it relies on Chrome Debugging Tool for developer.

![code hint](/assets/images/monthly-report/july-2017/ide-code-intellisense.png)

The preview feature is powerful as you click the button on IDE, scan QR code to preview it on your mobile phone right away. That version will stay there in Mini Program section on WeChat application in case you need to take a look again. So time needed in testing in real device is minimal, and still in WeChat ecosystem.

## company-serv, and personal-serv
___

I switched to use nginx for my company server now. It feels much more cleaner, and shorter to edit config file. I try to avoid relying on any western service out there as much as possible. This is with objective to be able to serve users within mainland without a worry that the site will be partial, or even worse blocked and they cannot access. I went far to configure DNS server served within the same instance. Configured namecheap.com to point directly to such server. But it's pretty hard to quickly force update your domain towards root server (from what I did), it takes too long. So I ended up using it as a backup and use one of another of my server to have those DNS records (via service provider's convenient web interface) then point it to that server instead.

Again surely I have an option to just use Alibaba cloud or VPS solution, but its pricing scheme seems to be expensive after a year later. And the way to work with such solution, I'm totally not familar and it's un-tapped way for me for now. I might be wrong but yeah I want to try pushing out a first service out there which served on company server which is in Hong Kong first, then see further from there.

A tip I found about configuring [certbot](https://certbot.eff.org/) to automatically renew certificates on Ubuntu sever is via using webroot, properly use parameters of `certbot`, and correctly setup crontab.

First execute this command to obtain and let system (let's encrypt) knows what domain/sub-domain you have so that it will operate on that later in consecutive times

```
certbot certonly --webroot --webroot-path=/var/www/your-path/html -d yourdomain.com -d sub.yourdomain.com -d sub2.yourdomain.com --webroot-path=/var/www/your-path2/html -d sub3.yourdomain.com
```

Use `--webroot-path` to update certificate for webserver without restart the instance of it. The first three domains/sub-domain will be served at `/var/www/your-path/html`. The last one will be served at `/var/www/your-path2/html`.

Then you should have this line in your crontab (freely modify how frequently it should update).

```
15 3 * * * /usr/bin/certbot renew --quiet --renew-hook "/usr/sbin/service nginx reload"
```

Consult [man page](http://man7.org/linux/man-pages/man5/crontab.5.html) for parameters.

---

That's it for this month report. I hope you enjoy my sharing for everything possible things I touched in the past month!

If you have a chance to check out any project above, feel free to let me know what you think. I love feedback, and discussion, hit them up via comment section down below.

Now, let me go right back to continue _asteroids_ project.

Happy creating folks!