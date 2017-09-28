---
layout: post
title:  "SwitchResX to Help Set up Ultra-Wide LG Monitor on macOS"
date:   2017-09-28 06:29
thumbnail: /assets/images/post-thumbnail/switchresx-logo.png
categories: blog
tags: [switchresx, ultrawide, monitor, lg, macos]
comments: true
og_image: /assets/images/post-thumbnail/switchresx-logo.png
---

I have an Ultra-Wide LG monitor (specifically [LG-29UM68-P](http://www.lg.com/us/monitors/lg-29UM68-P-ultrawide-monitor)) as my day-to-day working setup. It helps in boosting productivity as more windows can be laid and I can see them all advance.

Anyway still there is an issue of macOS won't be able to recognize such ultra-wide resolution that is suitable for the monitor. Native resolutions as provided are either lesser in resolution, or scaled in non-proper ratio that makes it non-working and bad for eyes.

The first time I have such ultra-wide screen in my possession, I need to do research to solve such problem. Only viable and practical solution with no requirement to buy new accessories I've found is [SwitchResX](http://www.madrau.com/srx_download/download.html) that works for macOS even before Sierra and up.

The reason I decided to write this article is that I've come back to repeat the steps every single time I update/upgrade macOS version. Whenever we update, it seems to erase data that SwitchResX rely on for resolution settings thus we need to start it over. I've done this for several times so I decide to note it down to this piece of writing once and for all.

# Who is This Guide for?

If you have ultra-wide monitor such as with resolution 2560x1080, it's high chance that macOS won't be able to recognize such resolution setting. So use this article to solve the problem.

# How to Set Up?

Firstly, you need to install [SwitchResX](http://www.madrau.com/srx_download/download.html).

> If you're on El Capitan and up, macOS has introduced so called SIP (System Integrity Protection) thus to make SwitchResX works for you, you have to temporarily disable it, run SwitchResX to save resolution settings, then you're free enable it back again.

We need to disable SIP first by rebooting the system, then hold _Cmd+R_ long enough to see apple logo to enter recovery mode.

Click on _Utilities->Terminal_ then enter `csrutil disable` to disable SIP.

Now you reboot the system either by clicking through the UI, or enter `reboot` at terminal prompt.

This time when you log in to macOS system. Open SwitchResX.

If it's not open already, you can find and open it via _System Preferences->SwitchResX_. You will see the following screen.

<center>
<a href="/assets/images/switchresx/switchresx-setting.png"><img alt="switchresx main setting" src="/assets/images/switchresx/switchresx-setting.png"/></a>
</center>

Then try to add new resolution settings by clicking on _+_ symbol at the bottom. Enter the information at below for both 53Hz, and 60Hz. I cannot get it to work for 60Hz, but in case it works for you.

<center>
<a href="/assets/images/switchresx/53hz.png"><img alt="switchresx resolution setting for 53hz" src="/assets/images/switchresx/53hz.png"/></a>

<sub>53Hz of 2560x1080 setting</sub>

<a href="/assets/images/switchresx/60hz.png"><img alt="switchresx resolution setting for 60hz" src="/assets/images/switchresx/60hz.png"/></a>

<sub>60Hz of 2560x1080 setting</sub>
</center>

Save the settings. Close SwitchResX program. If it asks whether or not you want to save, make sure to click yes. You should see at least one of your settings you entered is active. Then try to change the current setting by clicking on _Current Resolution_ tab then finally select a proper one.

It should be working. Verify this that UI as shown on screen is not scaled in non-proper ratio, and it's good for your eyes.

Now you should reboot the system, then go back to _Recovery mode_ again to enable SIP. Just repeat the steps I mentioned above, but change command to `csrutil enable`.

Done.

# Whenever Update/Upgrade macOS, It Breaks SwitchResX from Working?

The situation is different. From my experience, when I update/upgrade macOS, it suddenly invalidates the state of SwitchResX thus makes it not working.

I did research and found this [solution](https://gist.github.com/erichrobinson/9755ba1f3ec45b289c40#gistcomment-2116695) with a slightly adapted [solution of mine](https://gist.github.com/erichrobinson/9755ba1f3ec45b289c40#gistcomment-2119816) to make it work.

So what you need to do is firstly uninstall SwitchResX.  
Then disable SIP by going to Recovery Mode and disable SIP via command line. 

Now whenever you go back to macOS. Create a new normal (not necessary to be admin) user. Log out from current user, then log in with that new user you created.

> This might sound weird as why we need to creae a new user. But doing it as before doesn't work. We need to create a new user.

Next install SwitchResX and make sure to install it for all users when it promptly asks.

Enter above resolution settings as I mentioned above. Save it. You should see it working fine now.

As we don't want to let a new user to be cluttered, we are going to completely remove such user out from the system. Just log out and log in as your normal main user you've used before. Remove such user via _System Preferences->Users and Groups_ and select to remove its user directory as well. It's safe as we install such app globally.

# Conclusion

If you update/upgrade macOS again in the future, so just follow the steps as laid out in _What to do if I update/upgrade macOS_ then it should be working. Also I'm surprise to see how generous it is of SwitchResX itself that even when trial period is over, you still can use it without a problem.