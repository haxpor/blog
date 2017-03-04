---
layout: post
title:  "How to Verify GPG Signature via Command-line"
date:   2016-12-27 11:19:00
categories: blog
tags: [ubuntu, gpg, signature, command]
---

A time came when before clicking to download a software to install on machine, the hint message might tell you [*"After download you must check the GPG signature."*](https://github.com/shadowsocksr/ShadowsocksX-NG/releases/tag/1.3.8-R8-build5)

That might be a little bit of scary. But that's a must if that certain kind of software you're going to install is network-based and you will be using it almost all the time.

So let's see how can we verify such GPG signature.

In this case, we're going to use `gpg` application to do the work for us for an example to install ShadowsockX macOS client. Let's go down to step by step.

* Install GPG via `brew install gpg` on macOS.
* If you want to verify such GPG signature from unknown source but you trust them, usually you need to import their public GPG key. Go to grab their [public key](https://github.com/qinyuhang/Pubkey).
* Save their public key into file and name it `key.sig`.
* Execute `gpg --import key.sig`. Assume that you are at the location of the file.
* Now you're ready to verify GPG signature. Download its GPG signature of the target file you want to download. It's [here](https://github.com/shadowsocksr/ShadowsocksX-NG/releases/download/1.3.8-R8-build5/ShadowsocksX-NG-R8.dmg.sig). Download it as `verify.sig`.
* Execute `gpg --verify verify.sig ShadowsockX-NG-R8.dmg`  
   Remember to start with signature file first, before the name of target file to verify.
* That's it. If verification goes well, you should see output similar to this
   
   ```shell
   gpg: Signature made Sat Dec 24 10:27:07 2016 CST using RSA key ID 73EB5E11
   gpg: Good signature from "YuhangQin (Sign SSR-NG-R) <qinyuhangxiaoxiang@gmail.com>"
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: AAAA BBBB CCCC DDDD 00C6  3326 2A45 A972 73EB 5E11
   ```
* Done.