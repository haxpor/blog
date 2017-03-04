---
layout: post
title:  "When I Let My Girlfriend Interacts With My WeChat Bot"
date:   2017-01-28 20:18
categories: blog
tags: [wechat, bot, ngrok]
---

Since the time I've moved to Shenzhen, I experimented with WeChat bot and its platform quite enough to have some times to enjoy its moment.

During development of my WeChat Bot codenamed FKit, I chanaged its functionality to only shout out "i Love u" as I want my girlfriend to interact with it no matter the input message.

Here is what I captured the conversation she talked with my bot. I captured it via [ngrok](https://ngrok.com/)'s web interface.

> You might wonder how can I decrypt the message as it should be done via https and WeChat platform's encryption. I can as I disable encryption during the time of development. Surely for production, encryption would be back on.

![fkit convo 1](/assets/images/fkit-convo/1.png)  
She began with `test` first.

![fkit convo 2](/assets/images/fkit-convo/2.png)  
Then she followed up by calling me `stupid frog` !

![fkit convo 3](/assets/images/fkit-convo/3.png)  
She sent a sticker but my WeChat bot doesn't support receiving this kind of message yet, thus it showed out as (translated to English) `not support message`.

![fkit convo 4](/assets/images/fkit-convo/4.png)  
Same to previously message.

![fkit convo 5](/assets/images/fkit-convo/5.png)  
Then she ended the conversation with `okie`.

That's fun time 😂

## Wanna Try?

You can try out to receive "i Love u" if you need some love right now by scanning on the following QR Code.

Also if you open this article on WeChat app, you can just hold down on QR Code image below, then you will see option "Extract QR code". It will take you to my WeChat bot account. Easy!

![fkit qrcode](/assets/images/fkit/qrcode-fkit-wechat-bot.jpg)

## FKit Development

FKit is on-going development of one of my experimental project and I'll push more features into it to basically serve my needs as a foreigner living in China. More update will be updated on new blog post.

## Gotcha

* WeChat platform uses XML-based [message format](http://admin.wechat.com/wiki/index.php?title=Common_Messages).