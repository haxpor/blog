---
layout: monthlyreport
title:  "Monthly Report - June 2017"
date:   2017-06-11 23:13
thumbnail: /assets/images/post-thumbnail/tcp-bbr.png
categories: monthlyreport
tags: [monthlyreport]
permalink: /:categories/:year/:month/report.html
---

I've come back to stay in Shenzhen, China since exactly 2 weeks ago.

Coming this time, Internet quality is pretty much worse than previous time in which I thought it was quite stable after fighting with GFW alot. Now the speed is quite low (lowest point can be < `1 Mb/s`), and I cannot watch video online with good enough quality to enjoy the content. If it can be `144p` in smooth manner, that's what the best I could ask for.

It's like GFW really knows how to adapt. It learns from analyzing ton of packets flowing within China, and across the border. It learns to cut my SSR connection (prior to this it was still Ok). I need to find a reactive solution to fight back.

> I connected through my Shadowsocks server. Long before it was always SSR. Now I'm fully using SS. It's better strategy to have alternatives or back ups plan for your connection available.

# TCP-BBR

---

I came across to find this terminology by reading [discussion](https://github.com/shadowsocks/shadowsocks-org/issues/26) on shadowsocks-org repository on Github. Especially [this](https://github.com/shadowsocks/shadowsocks-org/issues/26#issuecomment-269444798), and [this](https://github.com/shadowsocks/shadowsocks-org/issues/26#issuecomment-269456260) comment that shows the result of speed testing using TCP-BBR which is a lot higher.

I'm so hooked up with that. Thus I further did research on the topic on how to enable such feature on my proxy server.

Question found in [comment](https://github.com/shadowsocks/shadowsocks-org/issues/26#issuecomment-269487933) that whether or not we need to enable it on both end of communication. Answer is no, so it's great as I'm quite aware that macOS won't likely to support and really need to catch up in pace. Take example of [Fast TCP Open](https://bugs.chromium.org/p/chromium/issues/detail?id=543653) feature for Chrome on macOS. It still doesn't support!

# What Is It?

---

Refer to [google/bbr](https://github.com/google/bbr/blob/master/Documentation/bbr-quick-start.md) and especially this [Linux Kernerl - TCP BBR commit](http://git.kernel.org/cgit/linux/kernel/git/davem/net-next.git/commit/?id=0f8782ea14974ce992618b55f0c041ef43ed0b78), if you want to dig deep right away for how it works, and algorithm in general.

In short and human word (in which by no mean I'm an expert on network matter, and I don't like to act like one), TCP-BBR is another algorithm in TCP congestion control. It improves what has already been there via loss-based congestion control which is predominantly used since 1980s.

This new scheme is contributed by Google which commited back to Linux kernel for general public to use.

Refer to these notable excerpts I captured from its commit link.

![excerpt tcp-bbr 1](/assets/images/tcp-bbr/excerpt1.png)

![excerpt tcp-bbr 2](/assets/images/tcp-bbr/excerpt2.png)

The factor of improvement is magnificent. Although numbers stated above would be as high as ~2kx. From what I got as tested it's roughly `~600x` when pull content from upstream via Github clone command, or `~30x` in downstream Internet speed in general. It's way better than before.

# How to Enable It On Your Ubuntu 14.01 Server?

---

I learned the steps much from this [guide](https://github.com/iMeiji/shadowsocks_install/wiki/%E5%BC%80%E5%90%AFTCP-BBR%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6%E7%AE%97%E6%B3%95) (in Chinese). So big shoutout to him. Allow me to replicate steps in English with slightly modified here.

I have Ubuntu `14.01` in which this kernel version doesn't support TCP-BBR just yet. You have to upgrade your kernel.  
Kernerl version `4.9+` is at least to support.

> For other Linux distros rather than Ubuntu, please follow this [guide](https://github.com/iMeiji/shadowsocks_install/wiki/%E5%BC%80%E5%90%AFTCP-BBR%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6%E7%AE%97%E6%B3%95).

Follows the following steps

* **Download the lastest kernel**

    You can also just head to [http://kernel.ubuntu.com/~kernel-ppa/mainline/](http://kernel.ubuntu.com/~kernel-ppa/mainline/) to select latest version by yourself in which case it might be newer after this article published. Download it to your system.  

    Or just execute the following command,  

    ```shell
    wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.9/linux-image-4.10.9-041009-generic_4.10.9-041009.201704080516_amd64.deb
    ``` 

* **Install the kernel**

    ```shell
    dpkg -i linux-image-4.*.deb
    ```

* **Update grub system, then reboot**

    ```shell
    update-grub
    reboot
    ```

After your system has rebooted...

* **Check your kernel version**

    ```shell
    uname -r
    ```

    You should get something like `4.10.X-XXXXXX-generic`. Make sure it starts with `4.9` or `4.10`, but if you follow all commands above it should be `4.10`.

* **Edit `/etc/sysctl.conf` to have following lines**

    ```shell
    net.core.default_qdisc=fq
    net.ipv4.tcp_congestion_control=bbr
    ```

    This will instruct system to use `bbr` as congestion control for TCP.

* **Save to make it effective**

    ```shell
    sysctl -p
    ```

* **Check to confirm that settings are taken into effect**

    ```shell
    sysctl net.ipv4.tcp_available_congestion_control
    sysctl net.ipv4.tcp_congestion_control
    ```

    You should see output like `net.ipv4.tcp_available_congestion_control = bbr hybla cubic reno`, and
    `net.ipv4.tcp_congestion_control = bbr`.

    and lastly

    ```shell
    lsmod | grep bbr
    ```

    you should see `tcp_bbr` there in output.

# Result

---

Speed gained as tested over [speedtest.net](speedtest.net), or via tool like [speedtest-cli](https://pypi.python.org/pypi/speedtest-cli/) might not be tremondous high. I gained speed like `10-30x` more, with lower ping (-`~20ms`).

But that increased speed plays a key role in consuming online content, in addition to performing Github commands i.e. cloning.

Result from my Github clone of big project in which normally I can clone it with average speed of around `~4KB/s` then sometimes it would stall then connection broken. It only can succeed for small to almost medium size project with good Internet time (not too much traffic). But now I do get the following

![github clone speed improved](/assets/images/tcp-bbr/tcp-bbr-more-speed.png)

Average speed is good which is `2MB/s` and reliable.

It is not only Github, but also NPM which if you depend and use NodeJS-based packages, you will pull down lots of packages from it from time to time. Loads of files, and some certain package is very large in size. Thus they are much more better and reliable.

Finally, consuming video content online is much more pleasant without waiting for it to finishes buffering first. 360p quality in video is a norm, but if I need to go high like HD, I can do so too but slightly waiting in initial time might be required depends on traffic at that time. I also can watch live streaming without problem. Anyway, 360p quality is good enough for experience in my case of consuming educational, tutorial, songs kind of video.

In short, TCP-BBR helps significantly with minimal effort in upgrading your kernel to support it.  
As it's an addition to TCP protocol, it is compatible for all proxy applications you're using.

Give TCP-BBR a try. I strongly believe you will experience much better quality of Internet speed.
