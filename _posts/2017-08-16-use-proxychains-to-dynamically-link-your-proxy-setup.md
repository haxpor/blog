---
layout: post
title:  "Use Proxychains to Dynamically Link Your Proxy Setup"
date:   2017-08-16 10:11
thumbnail: /assets/images/post-thumbnail/proxy.png
categories: blog
tags: [network, proxy, proxychain]
comments: true
---

Recently I migrated my server to be within mainland. Immediately since then I faced with another complicated situation of making an Internet request to outside world.

Normally if your server is outside of China mainland, you don't have to worry about making an Internet request on behalf of the server to certain sites that are blocked by Chinese government. No. It's not even the case to worry because you're outside of mainland. But now if you moved inside, the need to get information from within and outside will lead to more complicated situation.

Imagine a project needs to pull down node packages via `npm install` and you make a request from mainland. Your request would be blocked. In order to successfully do it, you have to configure `/.npmrc` to include proxy server, or use `npm config set proxy http://yourproxy.com:1234` and `npm config set https-proxy http://yourproxy.com:1234`.

That's still fine as almost all of the time, you will make npm request through a proxy. So globally set that things up is ok.

But now imagine the case of making a `curl` request. You can configure proxy setup via `~/.curlrc` then you will be fine.

> I also wrote about how to configure `~./npmrc` and `~./curlrc` [here](http://blog.wasin.io/blog/2017/03/14/setup-and-verify-applications-and-terminal-commands-to-work-reliably-with-proxy-on-macos-and-linux.html).

But do you need to go through proxy all the time? I don't think so. You don't want to waste more time in waiting for such response in un-optimized request path as you know you will be fine although making a **direct** request. So setting proxy setup through those configuration file is a no go.

# What's The Better Option?

I discover [proxychains](https://github.com/rofl0r/proxychains-ng).

What it can do is to dynamically forward through your request to target proxy server as you configured in its config file; usually at `/etc/proxychains.conf`.

> You just need to add `socks5		127.0.0.1 1234` at the end of the file; but substitute for your proxy ip address and port there.

proxychains will forward TCP connection through SOCKS4, SOCKS5, or HTTP proxy. This perfectly works with Shadowsocks proxy as well.

I found an interesting case that for a few applications, it is required to use with only HTTP protocol only; not SOCKS. Thus using proxychains to forward that request to your local SOCKS5 proxy (i.e. Shadowsocks) works and solves this issue immediately.

Also proxychains solves the problem of a need to have a global configuration that affect entire system either via ...

* `~/.bash_profile` or `~/.bashrc` for `HTTP_PROXY=...` and `HTTPS_PROXY=...`
* Applications' configuration file i.e. `~/.npmrc`, `~/.curlrc`, etc

because whenever you need to go through proxy, you don't have to set up any proxy configuration. You just execute it like this (assume you make a request from within mainland)

```shell
proxychains4 curl -L https://google.com
```

The following is a result you get

```shell
[proxychains] config file found: /etc/proxychains.conf
[proxychains] preloading /usr/lib/libproxychains4.so
[proxychains] DLL init: proxychains-ng 4.12-git-1-gbb3df1e
[proxychains] Strict chain  ...  127.0.0.1:1234  ...  google.com:443  ...  OK
[proxychains] Strict chain  ...  127.0.0.1:1234  ...  www.google.com.sg:443  ...  OK
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="zh-HK"><hea
...
<omitted html content for brevity here>
...
```

Above result, I modified the port and google URL as to not reveal proxy information I use. But it works.

# Conclusion

So in conclusion proxychains makes it cleanly to make a request without a need to configure system's proxy setup that will affect the entire system or entire operation of such application. It allows you to go through the proxy as configured in `/etc/proxychains.conf` on-demand only when need via a simple command `proxychains4 <command> [parameter]`.