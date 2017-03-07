---
layout: post
title:  "SSH Key-based Authentication on Ubuntu"
date:   2016-12-21 01:07:00
thumbnail: /assets/images/post-thumbnail/weui-icon.png
categories: blog
tags: [ubuntu, ssh, authentication, key]
---

## What Catches Me On

I still remember the very first time I log in to DigitalOcean server. I don't have to enter password.
At first, it feels something fishy going on behind the scene. I thought why they do something like this, the security is not on par.

That was because I don't have much experience on key-based authentication just yet. But later I found out that actually that kind of set up is highly secured.

The concept is you map the client to target server via public-private key pair of RSA. This means only a particular client can connect to server.
By doing this, we disable normal SSH login with password. This increases security at the same time.

## Steps

1. On client system, execute `ssh-keygen -t rsa` to generate key. The key will be located at `~/.ssh/`.
2. Copy public key from clien system to target server by `ssh-copy-id root@target-host.com`; assume that `target-host.com` is your server's domain name. This command will copy public key to target server under specified username's directory.
3. Now on client system, you can try log in via `ssh root@target-host.com`. It will prompt for passphase (if you enter it during step 1.).
4. (optional) If you don't want to enter passphase every time, you can use `keychain` to solve the problem by following the steps as below.
   * Execute `sudo apt-get install keychain` to install `keychain`
   * Execute `keychain id_rsa`
   * Execute
      ```shell
      . ~/.keychain/`uname -n`-sh
      ```  
   You shoul add the last two commands into `~/.bashrc`. So that it will take effect every time you log in and even rebooting.

## Resource

I reference the steps above from the following links

* [SSH/OpenSSH/Keys on Ubuntu](https://help.ubuntu.com/community/SSH/OpenSSH/Keys) : contains the steps on how to set up key-based authentication on Ubuntu
* [QuickTips - Tip#3 Keychain - Manage ssh keys](https://help.ubuntu.com/community/QuickTips) : contains tip to manage ssh keys via keychain without having to enter passphase every time.
