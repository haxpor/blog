---
layout: post
title:  "Sharing WiFi Internet from Macbook to Ethernet with Wireless Router as Access Point"
date:   2019-03-20 22:13
thumbnail: /assets/images/post-thumbnail/router-thumbnail.png
tags: [router, internet sharing, macos, wireless router]
comments: true
og_image: /assets/images/post-thumbnail/router-thumbnail.png
---

In short, [Potatso](https://github.com/haxpor/Potatso) app for some reasons stops working for me on my iOS device. It keeps crashing right at the launch time, and I have switched my attention away from the project as not extend my iOS developer account, so I won't be able to build the app then install on my phone. It requires Network extension in which only developer account can access.

So now that's the problem. It's fairly inflexible to communicate with my family as mostly we use Line app, and it requires VPN access if use from within China, as well as many other apps i.e. Instagram, Twitter, Google-related app etc. How can I solve this problem?

![router](/assets/images/router/router-box.jpg)

Fortunately, during initial year of settling working environment here in China, I bought several stuff to aid my working style and environment. I got wireless router for free as part of purchasing those stuff. Up until today, I can make use of it.

---

Normal scenario when I want to surf or use apps on iOS device that needs VPN access is to use Potatso. To solve my problem, what if we could have such wireless router to help accept connections from devices (or multiple devices), let it passes through the gateway (in this case Macbook Pro) in which it all goes under [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) app traffic as installed on the system, then this could solve the problem and iOS device doesn't need to have any dependencies installed in it.

Let's jump right in.

# Connecting Wireless Router to MBP
---

First step is to connect a router to MBP with LAN cable in which I use Cat5E type aligned with bandwidth the router supports.

![router](/assets/images/router/router.png)

We connect just to let it know Ethernet is up, then we can set router's ip address and configure router's configurations.

# Examine Network Map and Set IP Address
---

At this point, we will need to know ip address and general idea of our network environment as we will use such information to configure router properly.

So on MBP, open _System Preferences->Network_ and check Ethernet on the left, it should be connected. Now try to configure its ip address to be at the same network of our router (which is by default is 192.168.1.1, consult your router's manual.). Select _Configure IPv4_ to be _Using DHCP with manual address_ and enter ip address like 192.168.1.2. Another way is to set via command line `sudo ipconfig set en0 INFORM 192.168.1.2`; provided that en0 is your Ethernet network interface.
i

So let's summarize our networking map

```
Internet <---> MBP (ShadowsocksX-NG installed) <---> Router (AP mode) <---> Clients / Devices
```

Now about ip addresses:

* __Internet__ - it's WiFi network interface as part of MBP, it's in network like 192.168.0.0.
* __MBP__ - gateway for our setup, it has two network interfaces and connected to both of them. Wifi: 192.168.0.x (normally x != 1 which is usually a gateway router providing basis WiFi), and Ethernet: 192.168.1.2.
* __Router__ - 192.168.1.1

# Setup Wireless Router
---

Read through your router's manual. For my case of [RT-N12](https://www.asus.com/Networking/RTN12_D1/), the home page to access and configure router is at 192.168.1.1 and the default username and password is _admin_, and _admin_ respectively. Then it usually prompts you asking which kind of router you want it to be. There are 3 types.

1. Router mode
2. Repeater mode
3. Access point mode

The mode we want here is 3; Access point mode. Mode 1 won't suit us as we won't connect to another router, neither do we have direct access to modem or Internet via LAN. Still if we have direct access to Internet in either via another router or LAN, we can't use it as the whole point is we need it to go through Shadowsocks via our gateway (MBP). Router used in this setup has no built-in Shadowsocks support (other types of VPN don't work well here in China).

Mode 2 is not what we want as the signal is already good, we don't want just to make signal stronger to reach us.

Mode 3 is what we want as it allows us to provides WiFi connection to more users and we could configure it to have our MBP as a gateway, so we can take benefit of its installed ShadowsocksX-NG app without a need for clients to install any additional app; just a few steps of easy setup via Setting app on iOS device.

![wirelsss mode](/assets/images/router/router-mode.png)
<sub class="tagline margin">Make sure you selected Access Point (AP) mode</sub>

For LAN setting of router, as I've tried several times by manually set static ip address, it won't work stably but until I changed it to _Yes_ for _Get LAN IP Automatically?_ it now works like magic.

![set router ip](/assets/images/router/router-ip.png)
<sub class="tagline margin">
Select _Yes_ for _Get LAN IP Automatically_ to let system configure ip address for us automatically. This screenshot taken after I've finished the whole process. You will know ip address of your router acting as access point later.</sub>

After we set such value, and click on apply. It will randomly assign ip address for our access point. I'm not quite sure on theory part behind this. But whenever you setup router as access point, it will have a different ip address.

So at this point if you try to access router's admin page like before, you will have hard time without success. ASUS recommends us to download Device Discover Utility tool by searching from target model [here](https://www.asus.com/us/support/Download-Center/). At last, it will give us instruction on how to download such software. In short, it will lead us to mac appstore, the actual link is [here](https://itunes.apple.com/us/app/asus-device-discovery/id995124504?mt=12).

> I have macOS 10.14, and Device Discover Utility gives me no result. Configure button cannot be clicked. Didn't work. I guess it might be due to our setting as we have 2 different networks and our router exists on another one Ethernet, and the app might only try to find it on just certain network interface i.e. WiFi thus no result. I guess with best effort here :)

So how can we find the ip address? Use old friend `nmap`. On macOS, install it via `brew install nmap`. Then execute `nmap -T4 -F 192.168.1.1-255` whose those two flags are about how fast it will attempt in scanning. You can learn more about such flags via `nmap --help`. Likely you will find one ip address with only port 80 open while other two ip addreses are your MBP and default router ip addres.

Result shown like this (excuse my redaction of MBP, such `<redacted>` lines are similar in format of others as shown)

```
haxpors-mbp:local-web haxpor$ nmap -T4 -F 192.168.1.1-255
Starting Nmap 7.70 ( https://nmap.org ) at 2019-03-20 21:44 CST
Nmap scan report for 192.168.1.1
Host is up (0.00077s latency).
Not shown: 96 closed ports
PORT    STATE SERVICE
53/tcp  open  domain
88/tcp  open  kerberos-sec
445/tcp open  microsoft-ds
548/tcp open  afp

Nmap scan report for 192.168.1.2
Host is up (0.00089s latency).
Not shown: 96 closed ports
PORT    STATE SERVICE
<redacted>
<redacted>
<redacted>
<redacted>

Nmap scan report for 192.168.1.120
Host is up (1.0s latency).
Not shown: 99 closed ports
PORT   STATE SERVICE
80/tcp open  http

Nmap done: 255 IP addresses (3 hosts up) scanned in 10.47 seconds
```

Your access point's ip address is `192.168.1.120`. From now on, you need to use this ip address to access router's admin page.

# Set up MBP
---

Let's go back to our gateway, MBP.
3 Important things needed to be done to make it works.

1. Turn on _Internet Sharing_ from WiFi to Ethernet in _System Preferences->Sharing_
2. Enable ip forwarding
3. Configure NAT

For 1., open _System Prefrences->Sharing_ then click on _Internet Sharing_ on the left, then select _WiFi_ for _Share your connection from:_ then select _Ethernet_ for _To computers using:_.

For 2, and 3, (thanks to Robert Eisele for [the tips](https://www.xarg.org/2017/07/set-up-internet-sharing-on-mac-osx-using-command-line-tools/))

For 2,

```
sudo sysctl -w net.inet-ip.forwarding=1
```

For 3, open `/etc/pf.conf` (you might have to be administrator to modify the file), then add the following line after the line `nat-anchor "com.apple/*"`.

```
nat on e1 from en0:network to any -> (en1)
```

then use `pfctl` to disable and load configs from such file again via following

```
sudo pfctl -d
sudo pfctl -e -f /etc/pf.conf
```  

# Set up Client (iOS Device)
---

Now final part, we connect client to WiFi as provided by our access point, enter the correct password.

Then tap on such WiFi item.

![wifi](/assets/images/router/wifi-tochoose.jpg)

and scroll down at the bottom, you will see two options to configure

![wifi options](/assets/images/router/client-configure.jpg)

Make sure DNS is automatic, but for proxy, change it to _Manual_ and enter your proxy info correctly. You can check such information by clicking on _Preferences_ of ShadowsocksX-NG's context menu then tap on HTTP tab, make sure _HTTP Proxy Listen Address_ is set to _0.0.0.0_, and _HTTP Proxy Enable_ is checked. You will also see or configure your port there. Use these information to setup.

![wifi proxy](/assets/images/router/client-configure-proxy.jpg)

With this, all requests coming from this iOS device will go through proxy (ShadowsocksX-NG) which is our gateway; MBP.

# Conclusion
---

That's it! Now we can surf Internet on iOS device from China bypassing Internet censorship without a need to install additional app on your iOS device. It works for my case as I'm mostly at home but anyway whenever you go outside, now it's time to think about it again :P

Til next time.
