---
layout: post
title:  "As Developers You Don't Need Normal Social Account Verified, But You Might Need This Instead"
date:   2017-02-11 19:06
thumbnail: /assets/images/post-thumbnail/weui-icon.png
categories: blog
tags: [github, social, developers, verify, verified, account, git, gpg]
---

No doubt getting verified on account is such a privilege status you can have on social network ecosystem.

![Levels's verified account on twitter](/assets/images/verified/social-account-verified.png)

It can give you a sense of self-worth, and attention. But yes, real world is not going to give you away freely such verified status without you doing nothing.  
I know it's a real hard work, you need to give something to the world, make impact, there're lots of factors getting in the way for **verified** status.

No matter what it is. It's ok.

As developers, something you can do about it right now beside obsessing with such status is to get verified in every commit of code you wrote especially on Github!

You get that right. I mean something like this...

![verified on commit as shown on Github](/assets/images/verified/commit-verified.png)  

![verified on commit as shown on Github - 2](/assets/images/verified/commit-verified2.png)

Having that means every commit you've pushed is actually from you. It gives a sense of self-worth in every commit right?

So let's see how can we achieve that

## How To Get Verified On Every Commit on Github

What I tested is on macOS. But it should work similar to other platform, or you might need to adapt a little bit.

### Generate a GPG key

* Download gpg tool via `brew install gpg`.
* Generate key via `gpg --gen-key`
* Then specify the key you want, in this case it's default to `RSA and RSA`, just press `Enter`.
* Enter key size. Go for maximum of `4096`.
* Enter the length of time until the key would be expired. Press `Enter` to go for default selection indicating that there's no expiration.
* Enter a valid e-mail address that you signed up on Github.
* Type a passphrase.
* Execute `gpg --list-secret-keys --keyid-format LONG` to list GPG keys.  
   Result you got is similar to below  
   
   ```shell
   haxpors-mbp:verified haxpor$ gpg --list-secret-keys --keyid-format LONG
   /Users/haxpor/.gnupg/secring.gpg
   --------------------------------
   sec   4096R/BD496CEDB4686EF8 2017-02-10
   uid                          Wasin Thonkaew (Github GPG Key) <haxpor@gmail.com>
   ssb   4096R/C818714CCD3AB514 2017-02-10
   ```
* Copy GPG key ID. From result above, it's `BD496CEDB4686EF8`.
* Execute `gpg --armor --export BD496CEDB4686EF8`. But substitute your key id instead of using `BD496CEDB4686EF8`.
* Copy the result text from such command. We will use it in next section.

### Add GPG key to Github Account

* Browse to Github website.
* On upper-right corner, click on your profile photo, then click `Settings`.
* On the left side-bar, click on `SSH and GPG keys`.
* Paste the text you copied from earlier section.
* Click on `Add GPG key`.
* Confirm the action by entering your Github password.

### Set up Git to Sign All Commits

Use key ID i.e. `BD496CEDB4686EF8` as you got from earlier section and specify in these commands.

* Execute `git config --global user.signingkey BD496CEDB4686EF8`
* Execute `git config --global commit.gpgsign true`

Above will let git know that the default key id to use in every signing commit is `BD496CEDB4686EF8`, and you will be signing every commit by default.

### (for safety) Configure to Make it Work

These commands might not be needed but for safety, I recommend to do it anyway to make it works.

* Edit `~/.gnupg/gpg.conf`, and add following to the file.  
   
   ```shell
   default-key BD496CEDB4686EF8
   no-tty
   ```
   
   This will set the default key id to use, and another is to make auto-signed commit work with GUI software. In short, just add them.
* Execute `git config --global gpg.program $(which gpg)`. This will set which gpg program to use with git.

### Set to Make It Not Ask Passphraase All The Time

* Install `gpg-agent` and `pinentry-mac` via `brew install gpg-agent pinentry-mac`.
* Uncomment `use-agent` line in `~/.gnupg/gpg.conf`.
* Add the following lines into `~/.gnupg/gpg-agent.conf`  
   
   ```shell
   use-standard-socket
   pinentry-program /usr/local/bin/pinentry-mac
   ```
* Link pinentry and agent together by adding the following to `~/.bash_profile` (or your case might be `~/.profile`)
   
   ```shell
   if test -f ~/.gnupg/.gpg-agent-info -a -n "$(pgrep gpg-agent)"; then
     source ~/.gnupg/.gpg-agent-info
     export GPG_AGENT_INFO
     GPG_TTY=$(tty)
     export GPG_TTY
   else
     eval $(gpg-agent --daemon --write-env-file ~/.gnupg/.gpg-agent-info)
   fi
   ```

## Conclusion

Now whenever you do `git commit`, it will ask for passphrase for the **first** time only, save it to keychain, then next time it will automatically enter that for you in every commit.

You will have `verified` status tagged along with each commit on Github.  
Now go and get verified developers!
