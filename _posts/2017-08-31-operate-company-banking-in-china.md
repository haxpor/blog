---
layout: post
title:  "Operate Company Banking in China - Base on CMB"
date:   2017-08-31 01:48
thumbnail: /assets/images/post-thumbnail/yuan-chinese-banking-finance.jpg
categories: blog
tags: [banking, china, company, finance]
comments: true
og_image: /assets/images/post-thumbnail/yuan-chinese-banking-finance.jpg
---

Running a small company by a few people, in case my 2, me and my girlfriend, you have to wear many hats in one person.

If you have large budget to hire specilist, or someone to take care of it, it's fine. But if it's in budget-plan, minimize cost, no plan to scale (it's [fine](https://dev.to/sehurlburt/were-stephanie-hurlburt-and-rich-geldreich-ask-us-anything/comments/kka)), with an optimistic learn-them-(almost)-all mindset, this article might be beneficial to you.

I base the example on CMB (China Merchants Bank). It should be familar approach in steps and things they hand to you. So if you're using other banks, I hope you can adapt what I present you here to your case. In this article, I will be focusing on these two topics.

1. Tools/Cards Chinese bank gave it to you after we got company bank account and what we can do with them
2. How to transfer money between company bank account & personal account

The slight problem is that I'm based on macOS, the tools handed to us is based on Windows. So I'm going to show how to tackle this problem as well.

# What Tools/Cards Chinese Bank Handed to You
---

So here let's see what are the things Chinese Bank gave it to you.

## 1. Payment Scrambler

<center>
<img alt="payment scrambler device" src="/assets/images/operate-bank-in-china/tools_cards/banking-company-device.jpg" width="50%"/>
</center>

I don't use it yet as it's more suitable for mid-to-big company to approve payment to employees. Alternative is we can use cheque as a payment, but that means you have to buy cheque papers at the bank. I consulted them once, it's pretty hard for small company to buy it. Anyway I keep list this device here too as a reference for all things the bank gave to you.

## 2. Bank cards

<center>
<img alt="company bank cards" src="/assets/images/operate-bank-in-china/tools_cards/banking-company-cards.jpg"/>
</center>

There are two cards.

1. **Deposit Card**

	Mainly you can deposit money to your company bank account directly via ATM machine, or inquire about current balance.

2. **C+ for bank statement**

	This is mainly used to print your company bank statement directly from available machine; mostly siutated near major bank branch. You can select period of statements to be print. The following is the example of it.  

	![company bank statement](/assets/images/operate-bank-in-china/tools_cards/banking-company-statement.jpg)

## 3. UKeys

<center>
<img alt="ukeys" src="/assets/images/operate-bank-in-china/tools_cards/banking-company-ukeys.jpg" width="50%"/>
</center>

UKeys are short for USB-Keys. It's like another layer of security that bank provided to you. When you authenticate yourself with UBank application, you will need to plug this device as the application itself will read and check information with it to allow you to authenticate you. There are two UKeys. One for initiating action i.e. transfering money, etc. Another for approval/rejection action for someone with higher authority to decide. We will talk more about it in latter part of this article.

# How to Transfer Money From Company Bank Account to Personal Account
---

Now we will get into real action.

What I will be showing you is the real transaction that happened. I red out those sensitive information but you will get the sense of what it is. Thing to note here is that as our company type is limited partnership type, so the company asset is actually ours. It's not separate entity like in corporate or LLC sense. So transfering money back and forth between your own company and your personal account can be done without additional steps. I wonder there would be a few more steps for limited company as you need to declare asset in/out because company is separate entity.

I consulted our company's accounting firm to double check my understanding.

<center>
<img alt="confirmed practice transfer money for partnership company" src="/assets/images/operate-bank-in-china/finan-practice-confirmed.jpg" width="60%"/>
</center>

> All in all, consult your accountant to be 100% sure about financial practice in your country.

## Get VirtualBox and Windows Copy (.iso)

If you're on macOS. Then it's much better option to run Windows on virtual machine like [VirtualBox](https://www.virtualbox.org/wiki/Downloads) which is free to use and open source (thus clearly, not affiliated).

Bare minimum, old version of Windows with minimum ram and diskspace is good to go. No need to be fancy.
I use Windows XP Professional 32-bit with a setup that has 512MB RAM, 3GB of disk space. My macOS is 13-inch mid 2013 with 8 GB RAM. After installation, and applications, you will have almost 1 GB left. So it's very bare minimum you need :)

> I tried with [winebottler](http://winebottler.kronenberg.org/) and it didn't work. I can start the application though with unrecognized Chinese character (if you need, but English is ok). But I realize later that it's due to UKey isn't recognized by my macOS. There's no USB listed from execution of command `diskutil list`. So no luck there. You have to run on Windows.

Then you should have a copy of Windows .iso ready as you need to hook it up with VirtualBox to install the OS.

I leave the part of setting up VirtualBox and running to you as it's not the main part that this article would pay attention to.

## Install UBank Software and UKey driver

On Windows. Follow the step below.

1. Go to [http://www.cmbchina.com](http://www.cmbchina.com) and click on the links as shown

	<center>
	[![cmbchina website - click 1](/assets/images/operate-bank-in-china/app-setup/finan-ubank-1.png)](/assets/images/operate-bank-in-china/app-setup/finan-ubank-1.png)
	</center>
	<sub>Image is resized. Click for full resolution.</sub>

	<center>
	[![cmbchina website - click 2](/assets/images/operate-bank-in-china/app-setup/finan-ubank-2.png)](/assets/images/operate-bank-in-china/app-setup/finan-ubank-2.png)
	</center>
	<sub>Image is resized. Click for full resolution.</sub>

2. Now scroll down to download driver, and UBank software as marked by circles as shown below

	![cmbchina website - click 3](/assets/images/operate-bank-in-china/app-setup/finan-ubank-3.png)

	I include the links here just for pure reference. 

	<ul>
		<li><a href="http://www.cmbchina.com/webpages/corporate/cardreaders.htm">Driver</a></li>
		<li><a href="http://szdl.cmbchina.com/download/FB/FirmBank-9.3.0.15192.exe">UBank 9.3.0.15192(2017.8.2)</a></li>
	</ul></br>

	But it's much better for you to follow along as there might be newer version of software available especially UBank. It's updated on average twice a month.

3. Install UKey driver

	Scroll down the page to the following section.

	![ukey driver](/assets/images/operate-bank-in-china/app-setup/ukey-driver-setup.png)

	Click on [2000 / XP / 2003](http://szdl.cmbchina.com/download/33-2000-XP-2003.zip) or [VISTA](http://szdl.cmbchina.com/download/33-VISTA.zip) (in case you already have Windows machine) to dowload.
	Don't be mad at me to not give you a link right away. Better to follow along the steps, scroll to target section and hit link on screen as link might be changed in the future, or newer version is available. Link I give to you is for pure reference.

4. Unzip and Copy all files to `C:/windows/system32/drivers/`

	<center>
	[![unzip and install ukey driver](/assets/images/operate-bank-in-china/app-setup/ukey-driver-setup-2.png)](/assets/images/operate-bank-in-china/app-setup/ukey-driver-setup-2.png)
	</center>
	<sub>Image is resized. Click for full resolution.</sub>

5. Install UBank software

	Follow along on screen. It's straight forward. Also don't worry about the error dialog shown at first, it makes no harm.

6. Testing Running UBank

	Plug in one of UKeys you have to your machine, it can be any of them for now as we just want to test.  
	If you run Windows on VirtualBox, this means you just plugged in UKey into your host machine. You need to let it know you have plug in such thing.

	![activate usb on windows via virtualbox](/assets/images/operate-bank-in-china/app-setup/activate-usb.png)

	Yes, just click on usb-like-icon then click on `ExcelSecu USB Key [0100]`. The name might be slightly different. But in any case, you can easily differentiate it from others.

	Now with UKey plugged in. Open UBank software.  
	If all this set up is successful, when UBank launches, its UI will freeze a short amount of time (this means it's reading from UKey) then it will **populate** username into the field automatically for you. This part is important. If you didn't see populated username on your username text field input, it has highly chance that it didn't work.

	Again, to double check whether it's all ok or not. Just try to log in.  
	You need to click on `Switch to: login with digital...`, then enter the same password you've set during the time of registration & setup at the bank for your company bank account. You should be able to successfully log in.

	![login ubank](/assets/images/operate-bank-in-china/app-setup/digital-certificate-login.png)

	If not, try to consult your bank representative who handles your case. Check the password.  
	But by all means, when you open UBank with prior UKey plugged in, it should populdate username text for you <-- this is the major indicator whether it's <font color="green">success</font> or <font color="red">fail</font>.


## Transfer Money

You've checked that things work fine up until now. So you're ready to login as initiator (per se; financial manager) to request money transfer as will be approved or rejected by (per se) general manager of the company later.

It's clear by now that why the bank gave you 2 UKeys. One for whoever needs to initiate the transaction, and another for who to review and decide the fate of that transaction.

At the back of UKey, you can see long number. You use this number to uniquely identify which one is for whom in your company.

Now we will act as initiator who will request money transfer. Assume that you alrady logged in.
You should see the following screen right after that.

<center>
[![home screen ubank](/assets/images/operate-bank-in-china/initiator/bank-interface-1.png)](/assets/images/operate-bank-in-china/initiator/ubank-interface-1.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

Then click on the following section as marked by circle

[![initiator transfer money ubank](/assets/images/operate-bank-in-china/initiator/ubank-operate-2.png)](/assets/images/operate-bank-in-china/initiator/ubank-operate-2.png)
<div><sub>Image is resized. Click for full resolution.</sub></div>

Actually you can do either single payment, or batch payment. In this case, we go with single payment. Then you will see

<center>
[![ubank single payment](/assets/images/operate-bank-in-china/initiator/ubank-operate-3.png)](/assets/images/operate-bank-in-china/initiator/ubank-operate-3.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

You will be asked to enter target bank account number, name of beneficiary, province, city, and which bank. Also with _Settling mode_ which can be either _normal_ or _fast_, and _Purpose_ in which you can write your own. I used _normal_ and because the target bank is in the same city, so it's fast within 5 minutes, we got SMS notification back.

Also your financial manager, usually the first person mapping with first UKey will get SMS notification about the current activity of the company bank account. If the money is outbound, then SMS will be sent to you indicating -xxx RMB is deducted from company bank account. Something like this.

When all required information is entered, the request is sent, and it's done for initiator person at the moment.

In addition, you can inquire about the current transaction that is waiting to be approved via Payment Settlement->Payment-Settlement->Inquire, you will see the screen similar to below.

<center>
[![ubank single payment - done](/assets/images/operate-bank-in-china/initiator/ubank-operate-3-waiting.png)](/assets/images/operate-bank-in-china/initiator/ubank-operate-3-waiting.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

## Approval

Let's shift to another personnel to decide waiting approval transaction made by initiator.

We do the same. Unplug any UKey if any first, then plug another one. Launch UBank again if not yet, then log in.

Go to _Approve_ section as marked by circle in the following image.

<center>
[![ubank transfer to be approved](/assets/images/operate-bank-in-china/approval/ubank-operate-4-toapprove.png)](/assets/images/operate-bank-in-china/approval/ubank-operate-4-toapprove.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

> You will notice that UI is different from the first person (initiator). There's no payment section to make any financial request. Only approve or enquiry in whole picture in general. But this person holds decision-making ability.

You will see the following screen.

<center>
[![ubank transfer to be approved](/assets/images/operate-bank-in-china/approval/ubank-operate-4-approve.png)](/assets/images/operate-bank-in-china/approval/ubank-operate-4-approve.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

You can review information before clicking on _Agree_ to approve it.  
Result dialog will be shown.

<center>
[![ubank transfer approved](/assets/images/operate-bank-in-china/approval/ubank-approve.png)](/assets/images/operate-bank-in-china/approval/ubank-approve.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

With a plus that you can print it if you need to, if you set up PDF via printer you would be able to save it as PDF file as well.

<center>
[![printing result](/assets/images/operate-bank-in-china/approval/printing-result.png)](/assets/images/operate-bank-in-china/approval/printing-result.png)
</center>
<sub>Image is resized. Click for full resolution.</sub>

Now the full cycle starting from initator to request to transfer money, til approval process is done.

# How to Transfer Money From Personal Bank Account to Company Bank Account
---

This is deadly simple step.

Unfortunately I only see the ability to directly enter target bank account number to transfer money to on Alipay only, not yet on WeChat.  
So on Alipay, go to _Home->Transfer_ then you will see the following screen.

<center>
<a href="/assets/images/operate-bank-in-china/personal-transfer/personal-transfer-alipay-1.png"><img alt="personal transfer" src="/assets/images/operate-bank-in-china/personal-transfer/personal-transfer-alipay-1.png" width="40%"/></a>
<div><sub>Image is resized. Click for full resolution.</sub></div>
</center>

Select _To Bank Card_ then you will have option to enter bank account number.

<center>
<a href="/assets/images/operate-bank-in-china/personal-transfer/personal-transfer-alipay-2.png"><img alt="personal transfer" src="/assets/images/operate-bank-in-china/personal-transfer/personal-transfer-alipay-2.png" width="40%"/></a>
<div><sub>Image is resized. Click for full resolution.</sub></div>
</center>

# Can't We Have the Same Flexibility in Receiving/Paying Money on Company Account as Personal Account?
---

The answer is yes.

But it comes to some qualification.

Apply for it
* WeChat - [WeChat Pay+ Official Account](https://pay.weixin.qq.com/index.php/public/wechatpay/home), [WeChat Pay Documents](https://pay.weixin.qq.com/wechatpay_guide/help_docs.shtml)
* Alipay - [Alipay for Business](https://global.alipay.com/)

I need to tell you beforehand that I didn't have such account for company yet. I tried once with Alipay, and their qualification is super high. You have to have very high capital and have the right type of business (mostly retail) to be able to apply. I didn't try for WeChat yet.

But it'd be ok for my case as I can freely transfer in/out of money through company/personal account. It's all me and my partner' asset. So I don't have immediate urgency to re-apply and get this. But if you have a storefront, selling physical stuff i.e. outlets, fanchises or 7-eleven-like, your urgency is high and a must need. Imagine having just QRCode on either on your side or client side then you scan to complete the purchase, that's flexible.

So consult WeChat, Alipay, or accountant to double check things on this.

# Conclusion
---

I'm slightly surprise to know that a leading major bank didn't decide to go all-in to online approach to do financial transaction on your company behalf. But I now well realize that with this, it increases much more security. It introduces a few more hops to go through, not just one but two as you can see from UKey-steps to initiate and approve.

I hope you enjoy content I present to you in this article as much as I enjoy writing it.

If you have any thought you want to discuss, or any suggestion, feel free to comment down below.  
Until next time.