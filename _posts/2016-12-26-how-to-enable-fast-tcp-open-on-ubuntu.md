---
layout: post
title:  "How to Enable Fast TCP Open on Ubuntu"
date:   2016-12-26 03:35:00
categories: blog
tags: [ubuntu, tfo, tcp, server]
---

## What TFO Solve

I got suggestion to enable Fast TCP Open (TFO) from a guy named *Leonard Woo* from [Potatso Telegram User Group](https://telegram.me/joinchat/BT0c4z49OGNZXwl9VsO0uQ) to possibly gain more speed on using Shadowsocks as I experienced a slowdown these couple of days.

TFO is one of [congestion control algorithms](https://en.wikipedia.org/wiki/TCP_congestion_control) of TCP connection out there. What TFO solves is about reducing RTT (round-trip-time) from handshaking that TCP connection normally needs. Citing from [research paper](https://www1.icsi.berkeley.edu/~barath/papers/tfo-conext11.pdf) which states that it can gain about 10% or in some cases up to 40%.

![result of speed gain of TFO](/assets/images/TFO/result-tfo-research-paper.png)

## How to Enable on Ubuntu

You need to have linux kernel at least 3.7.  
You can check via `uname -r`, it will give the result similar to following.

```shell
3.13.0-24-generic
```

Then follow the following steps to enable Fast TCP Open

* Edit `/etc/sysctl.conf` and add the following line to its end of file  

   ```shell
   net.ipv4.tcp_fastopen = 3
   ```
* Save a file.
* Execute `sysctl -p` to make it taken into effect.
* Make it permanent even after rebooting system by adding the following line into `/etc/rc.local`  

   ```shell
   echo 3 > /proc/sys/net/ipv4/tcp_fastopen
   ```
   
## But What's About Browser?

At first I thought that too that you have to have browser that supports TFO. But I consulted *Leonard Woo* and he said that it's **Single side**. That means only one side of the connection needs to enable TFO.

My understanding went through that you don't need TFO-enabled browser, but you need server provider to enable it. But if service provider doesn't enable TFO, your browser needs to have and enable it to gain benefit from what can give by TFO.

I checked on server side via 2 methods as stated in Monitoring Section in this [article](https://bradleyf.id.au/nix/shaving-your-rtt-wth-tfo/). Result is TFOConnection is there, and no failure! Thus it confirms what he said.

* Execute `ip tcp_metrics`

   ![fo_cookie](/assets/images/TFO/fo_cookie.png)
   
* Execute `grep '^TcpExt:' /proc/net/netstat | cut -d ' ' -f 87-92  | column -t`

   ![tfo metrics](/assets/images/TFO/tfo-fastopen-active.png)
   
Both result above confirm that it's a legit TFO connection.

I will be testing this set up for a couple days to see if I can gain such speed improvement (actually it's pretty difficult to tell as Internet speed through proxy/vpn is not stable from within China). But anyway, above is the way to enable it.

## Reference

* [Shadowsocks - TCP Fast Open](https://www.bxl.pm/8602.html)