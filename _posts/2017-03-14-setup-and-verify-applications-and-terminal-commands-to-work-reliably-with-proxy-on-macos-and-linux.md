---
layout: post
title:  "Set up and Verify Applications and Terminal Commands to Work Reliably with Proxy on macOS and Linux"
date:   2017-03-14 00:03
thumbnail: /assets/images/post-thumbnail/proxy-icon.png
categories: blog
tags: [command, commands, terminal, proxy, network, linux, macos]
comments: true
---

If you live behind firewall i.e. [GFW](https://en.wikipedia.org/wiki/Great_Firewall) and interact with terminal commands a lot in day-to-day basis and of course surfing Internet, I believe you usually utilize proxy to carry on your request in Internet world.

Without a doubt, verifying that those applications espcially browser and commands behave as you set and expect it to be is crucial. Wasting hours in waiting for return from `npm install` command, or even `git clone <project-url>` for project with huge amount of files but not necessary in bigger size without knowing whether it's going to succeed or not is not a good way to ruin your productive day. Leave alone seeing result from non-working proxy setup on browser, athough it's immediate and a lot faster to troubleshoot but it is also applied.

Thus this time, I think it's a good idea to sit down and make sure those applications and commands works reliably with proxy setup (by any mean).

## Proxy Setup

Your proxy setup can be anything. It just needs to be a middle man between you and destination, and acts as a gatekeeper to forward your request to destination in which destination will not know that such request is coming from you but proxy itself.

We're interested in **HTTP/HTTPs**, and **SOCKS5** proxy.

There're bunch of options to setup proxy. It can be Shadowsocks (which operates on HTTP, and SOCKS5 proxy), or just normal HTTP proxy (several out there such as [Charles Proxy](https://www.charlesproxy.com/), [TinyProxy](https://tinyproxy.github.io/), etc).

Solution presented in this writing aims for macOS, and Linux.

For my case, I'm on macOS `10.12.4`, with Shadowsock proxy set up. This mean my local machine provides HTTP, and SOCKS5 proxy. So I have options to either set proxy to use HTTP, or SOCKS5.

## Set up to Use Proxy for UI-based applications

Although not limited to browser, it is a prime example of this kind of application.  
Let's proceed with Chrome as it's widely used, and is a top choice to debug and work with by developers. It should be very similar steps for other variant of browsers as well.

Press `Cmd` + `,` or enter `chrome://settings` to open Settings.  
Find `Network` section, and click on `Change proxy settings...`

![Chrome Network Settings](/assets/images/14/chrome-network-settings.png)

Then you will see a dialog window similar to below.

![Set Chrome HTTP Proxy](/assets/images/14/set-chrome-http-proxy.png)

as my proxy on local machine provides HTTP, and SOCKS5, then I set it via

* **Web Proxy (HTTP)** - `127.0.0.1` with port `1087`  
   Check your port according to your proxy setup. In this case, it's `1087`.

* **Secure Web Proxy (HTTPS)** - `127.0.0.1` with port `1087`  
   My proxy doesn't provide HTTPS thus I set it to just normally use what it provides in HTTP. So this means it will forward HTTPS request to HTTP one.

      > Personally, I don't think we really need HTTPS for local proxy stuff as it waste time and resource on doing handshake, encryption and decryption in which we don't really need it if we know we are on the secure side. Of course proxy will handle secure request after that (if we browse or request to secure site).

* **SOCKS Proxy** - `127.0.0.1` with port `1086`  
   Check your port according to your proxy setup. In this case, it's `1086`.

We're done.

We will see how we can verify whether it can operate as expect in <a href="#verifying">Verifying</a> section later. Now if you can browse without 404 error, that means most likely it works as expect.

In additional, from my use case I didn't have other UI-based applications that needs to be configured its network to be through proxy. So in case you have some other applications that need to work with proxy. Occasionally, that application should provide such configuration similar to what we've done above. Just look inside its preferences, or setting somewhere.

## Set up to Use Proxy for Terminal Commands

This part might need slightly more effort. Some commands have their own way of configuring proxy setting. They might need to be set via either environment variables, or specific configuration file. Some commands might not work with SOCKS proxy but only HTTP proxy.

I will cover specifically for the following terminal commands

* `git`
* `npm`
* `curl`
* `other misc commands` - utilize system-wide setup of proxy setting via environment variables

### git

Set it globally via `git-config` as follows

* **HTTP Proxy**  
   `git config --global http.proxy http://127.0.0.1:1087`
* **HTTPS Proxy**  
   `git config --global https.proxy http://127.0.0.1:1087`
* **SOCKS5 Proxy**

   ```shell
   git config --global http.proxy socks5://127.0.0.1:1086
   git config --global https.proxy socks5://127.0.0.1:1086
   ```

or you can also configure it manually by editing `~/.gitconfig` to add the following lines appendingly into a file

* **HTTP/HTTPS proxy**

   ```shell
   [http]
   [https]
     proxy = http://127.0.0.1:1087
   ```
* **SOCKS proxy**

   ```shell
   [http]
   [https]
     proxy = socks5://127.0.0.1:1086
   ```

### npm

Set it via `npm config`

* **HTTP/HTTPS proxy** - `npm config set proxy http://127.0.0.1:1087`

or you can manually configure `~/.npmrc` file by adding the following line

* **HTTP/HTTPS proxy** - `proxy=http://127.0.0.1:1087`

It [doesn't](https://github.com/npm/npm/issues/6204#issuecomment-55836088) support SOCKS5.

### curl

Set its proxy setting by creating (if not yet exist) `~/.curlrc` file with the following content

* **HTTP/HTTPS proxy**

   ```shell
   proxy = "http://127.0.0.1:1087"
   ```

* **SOCKS5 proxy**

   ```shell
   socks5 = "http://127.0.0.1:1086"
   ```

### Other misc commands

For other commands, usually we can just set proxy globally for system-wide via environment variables by adding following lines into your `~/.bash_profile` (but use `~/.bashrc` on Linux).

* **HTTP/HTTPS proxy**

   ```shell
   export http_proxy=http://127.0.0.1:1087
   export https_proxy=http://127.0.0.1:1087
   ```

* **SOCKS5 proxy**

   ```shell
   export http_proxy=socks5://127.0.0.1:1086
   export https_proxy=socks5://127.0.0.1:1086
   ```

After that execute `source ~/.bash_profile` to source the setting and make sure those environment variables are taken into effect. I recommend to configure it with your `~/.bash_profile` script as it will take effect even after reboot.

Beware that if you set it to SOCKS5 proxy, commands that doesn't support SOCKS5 will shout out error. A great example is `ngrok` which doesn't support SOCKS5 but it will let you know.

So in general case, HTTP/HTTPS proxy might serve you better unless you're willing to re-configure it back and forth.

## <a id="verifying"></a>Verifying

Now it's time to verify our proxy configuration no matter which way you had done to configure it.

> You have an option to use UI-based application i.e. [WireShark](https://www.wireshark.org/). But I prefer commandline-based solution. Anyway, the same concept can be applied to use with WireShark too.

### Preparation

We're going to use `ngrep` to capture packets for our **local network interface** filtering for port we're interested in knowing either `1087` for HTTP/HTTPS, or `1086` for SOCKS5.

* Install `ngrep` by executing `brew install ngrep` (or `apt-get install apt-get` on Linux).
* Then check out the name of your local network interface as we will use its name as parameter to `ngrep` to capture packets live.  
   Execute `ifconfig`.  
   Result would be similar to as follows.

   ```shell
   haxpors-mbp:~ haxpor$ ifconfig
   lo0: flags=8149<UP,LOOPBACK,RUNNING,PROMISC,MULTICAST> mtu 16384
	   options=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
	   inet 127.0.0.1 netmask 0xff000000
	   inet6 ::1 prefixlen 128
	   inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1
	   nd6 options=201<PERFORMNUD,DAD>
   gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
   stf0: flags=0<> mtu 1280
   en1: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	   ether 20:c9:d0:d7:17:c5
	   inet6 fe80::888:7a63:946e:c358%en1 prefixlen 64 secured scopeid 0x4
	   inet 192.168.0.100 netmask 0xffffff00 broadcast 192.168.0.255
	   nd6 options=201<PERFORMNUD,DAD>
	   media: autoselect
	   status: active
   en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
 	   options=10b<RXCSUM,TXCSUM,VLAN_HWTAGGING,AV>
	   ether a8:20:66:2a:77:2f
	   nd6 options=201<PERFORMNUD,DAD>
	   media: autoselect (none)
	   status: inactive
   fw0: flags=8822<BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 4078
	   lladdr a8:20:66:ff:fe:7d:48:0a
	   media: autoselect <full-duplex>
	   status: inactive
   ...
   ```  

   From result, we know that our local network interface's name is `lo0` which you can see it has IP address of `127.0.0.1`.


### Verify npm

We had `ngrep` and local network interface name already. Next we're going to verify `npm install bfet` command whether it actually went through our proxy as set to be on HTTP/HTTPS (port `1087`) setting or not.

* Execute `sudo ngrep -q -d lo0 -W byline port 1087`  
   There're bunch of options used in this command. You can see this [man](https://linux.die.net/man/8/ngrep) page for explanation of each parameter used in above command. Basically, it will start to capture packets on `lo0` network interface filtering for packets involving port `1087` with other options affecting how much of information should printed out on console.  

   > You can also remove `port 1087` out thus more packets although might not be the one you're interested will show on console but for the ease in digesting information here let's go with port filtering.

   ```shell
   haxpors-mbp:~ haxpor$ sudo ngrep -q -d en1 -W byline port 1087
   Password:
   interface: en1 (192.168.0.0/255.255.255.0)
   filter: (ip or ip6) and ( port 1087 )
   
   ```

   Leave it running, and don't worry if you see some logs coming out already.  
   We will go back to see its result according to our execution of target command later.

* Open a new terminal window, then execute `npm install bfet`.
* Go back to see result from `ngrep` as it's running at the moment.  
   You should see something similar to following. Also you can hit `Cmd` + `F` to search for text in interest to see.

   ```shell
   T 127.0.0.1:63066 -> 127.0.0.1:1087 [AP]
   CONNECT registry.npmjs.org:443 HTTP/1.1.
   accept-encoding: gzip.
   accept: application/json.
   referer: install bfet.
   user-agent: npm/4.1.2 node/v7.5.0 darwin x64.
   host: registry.npmjs.org:443.
   Connection: close.
   .


   T 127.0.0.1:1087 -> 127.0.0.1:63066 [AP]
   HTTP/1.1 200 Connection established.
   .


   T 127.0.0.1:63066 -> 127.0.0.1:1087 [AP]
   ....
   ........?`..:s.....b....&.n.T..n.
   ].xi..n./.+.0.,...'.g.(.k.$...
   .........j.i.h.9.8.7.6.2...*.&.......=.5.#...........@.?.>.3.2.1.0.1.-.).%.......<./.....o.........registry.npmjs.org.........
   .............................
   .#..... ................................3t..
   ```

   Let's inspect packets we got above.

   1. `T 127.0.0.1:63066 -> 127.0.0.1:1087 [AP]`

      It uses HTTP [CONNECT method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.9) to initiate [HTTP tunneling](https://en.wikipedia.org/wiki/HTTP_tunnel) by which the command (running on port `63066`) asks local proxy server (port `1087`) to forward such HTTPS request. The tunnel (thus CONNECT method) is especially created for requesting HTTPS website which is `registry.npmjs.org:443` as seen in this case.

   2. `T 127.0.0.1:1087 -> 127.0.0.1:63066 [AP]`

      Proxy sent acknowledge packet back indicating that it's successfully created a HTTP tunnel. It's ready to exchange data through proxy from now on.

   3. `T 127.0.0.1:63066 -> 127.0.0.1:1087 [AP]`

      One of many packets sending back and forth during HTTP tunneling session. In this case, `npm` command usually sends some request for a package at `registry.npmjs.org`. It is encrypted due to SSL as it's end-to-end communication. The dot (`.`) we see is default character to show when such character is non-printable.

   So you can see that the connection is well made with proxy. Basically verified that it works as expect.

### Verify curl

We had `ngrep` and local network interface name as previously tested. Next we're going to verify `curl -i http://blog.wasin.io` command whether it actually went through our proxy as set to be on SOCKS5 (port `1086`) or not.

> Reason to use `http://blog.wasin.io` is that it's not HTTPS thus we're going to see actual text result from request to such target website.

* Execute `sudo ngrep -q -d lo0 -W byline port 1086`  
   You will see

   ```shell
   haxpors-mbp:~ haxpor$ sudo ngrep -q -d en1 -W byline port 1086
   Password:
   interface: en1 (192.168.0.0/255.255.255.0)
   filter: (ip or ip6) and ( port 1086 )
   
   ```

* Open a new terminal window, then execute `curl -i http://blog.wasin.io`.
* Go back to see result from `ngrep` as it's running at the moment.  
   You should see something similar to following.

   ```shell
   T 127.0.0.1:52924 -> 127.0.0.1:1086 [AP]
   GET / HTTP/1.1.
   Host: blog.wasin.io.
   User-Agent: curl/7.50.3.
   Accept: */*.
   .


   T 127.0.0.1:1086 -> 127.0.0.1:52924 [AP]
   HTTP/1.1 200 OK.
   Server: GitHub.com.
   Content-Type: text/html; charset=utf-8.
   Last-Modified: Fri, 10 Mar 2017 19:23:24 GMT.
   Access-Control-Allow-Origin: *.
   Expires: Mon, 13 Mar 2017 19:33:23 GMT.
   Cache-Control: max-age=600.
   X-GitHub-Request-Id: 3E76:06EE:41E22E9:53B6101:58C6F1AB.
   Content-Length: 19899.
   Accept-Ranges: bytes.
   Date: Mon, 13 Mar 2017 20:42:39 GMT.
   Via: 1.1 varnish.
   Age: 380.
   Connection: keep-alive.
   X-Served-By: cache-hkg6825-HKG.
   X-Cache: HIT.
   X-Cache-Hits: 1.
   X-Timer: S1489437759.092925,VS0,VE0.
   Vary: Accept-Encoding.
   X-Fastly-Request-ID: 60215ccfdc736e50178b0268f4fc9b3053c1e14d.
   .
   <!DOCTYPE html>
   <html>
   ... the less or HTML code ...
   ```

   You see that such command on port `52924` created a request message in SOCKS5 message and sent it to local proxy server listening on port `1086`. In return, proxy gets the actual response back including website's source code in HTML.

   So it works as expect.

## Conclusion

We have learned how to properly configure proxy setting for UI-based applications and terminal commands. Also we knew a basic way to verify that our tools are working as expect via `ngrep`. Combine these together to carry out Internet operation through proxy in network environment that needs it, and be able to troubleshoot the problem when we faced with a long waiting time in getting a result back from using application or commandlines.