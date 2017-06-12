---
layout: post
title:  "Reference on Configuring VPN Server via IPSec + L2TP on Ubuntu 14.04"
date:   2016-12-05 13:26:00
thumbnail: /assets/images/post-thumbnail/best-vpn.jpg
categories: blog
tags: [vpn, ipsec, l2tp, ubuntu]
comments: true
---

# VPN Server Configuration

Gathering of links and reference along the configuration.
In short just follow this [tutorial](https://raymii.org/s/tutorials/IPSEC_L2TP_vpn_with_Ubuntu_14.04.html) step by step, with optional for you to write those cofigurable commands as seen in *Firewall and sysctl* section into shell script for convenience.

## Links

* Original [reddit post](https://www.reddit.com/r/linux/comments/2s34zw/need_help_with_setting_up_vpn_server/) about VPN set up discussion
* [Layer 2 Tunneling Protocol](https://en.wikipedia.org/wiki/Layer_2_Tunneling_Protocol)
* [Point to Point Tunneling Protocol](https://en.wikipedia.org/wiki/Point-to-Point_Tunneling_Protocol)
* [IPSec L2TP VPN on Ubuntu 14.04 with OpenSwan, xl2tpd and ppp](https://raymii.org/s/tutorials/IPSEC_L2TP_vpn_with_Ubuntu_14.04.html)  
   Also see original [post](https://help.ubuntu.com/community/L2TPServer) at the bottom as it contains steps on how to connect from mobile device (actually it's the original post that migrated to 14.04)
* possible solution for error 111 via [this](https://lists.openswan.org/pipermail/users/2013-July/022546.html)
* (very advanced tool, I don't understand how to use it too) how to use [IPSecuritas](https://oemden.com/ip-securitas-os-x-cisco-rv220w-vpn-how-to-part2/)
* Mac OS X user benefits from using native vpn client see [here](http://help.it.ox.ac.uk/network/vpn/macosx-native/index).

## Original States of `accept_redirects`

```shell
root@mail:~/Conf/vpn# for vpn in /proc/sys/net/ipv4/conf/*; do echo "$vpn -> " `cat $vpn/accept_redirects`; done
/proc/sys/net/ipv4/conf/all ->  0
/proc/sys/net/ipv4/conf/default ->  0
/proc/sys/net/ipv4/conf/eth0 ->  1
/proc/sys/net/ipv4/conf/eth1 ->  0
/proc/sys/net/ipv4/conf/lo ->  1
```

## Original States of `send_redirects`

```shell
root@mail:~/Conf/vpn# for vpn in /proc/sys/net/ipv4/conf/*; do echo "$vpn -> " `cat $vpn/send_redirects`; done
/proc/sys/net/ipv4/conf/all ->  1
/proc/sys/net/ipv4/conf/default ->  1
/proc/sys/net/ipv4/conf/eth0 ->  1
/proc/sys/net/ipv4/conf/eth1 ->  1
/proc/sys/net/ipv4/conf/lo ->  1
```
   
___