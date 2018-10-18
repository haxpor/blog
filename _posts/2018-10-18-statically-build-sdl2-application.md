---
layout: post
title:  "Statically Build SDL2 Application"
date:   2018-10-18 11:00
thumbnail: /assets/images/post-thumbnail/textpost.png
categories: blog
tags: [sdl2]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

I've been studying SDL2 in my allocated time apart from main project for slightly more than 3 months now. So I will from time to time blog about it for what I found interesting, and to document ads reference for myself in the future.

SDL2 encourages us to go with dynamically link with your final executable. It's for [technical and moral reason](https://wiki.libsdl.org/Installation). But if consider it deeply, deliver final game with dynamically linked libraries would as well produce a problem. What happen if user has different version than what we use aginst to build bug-free executable. Even with slight minor version could make a difference as well. So statically build is there as an considerated option.

---

So enough for story. Let's see how to do this.

First, install SDL2 normally to your system. This practically means executing `./configure`, `make`, then `make install`. Built SDL2 libraries both dynamic (.dylib), and static one (.a) will usually sit tight at `/usr/local/lib/` path. Note that I built on macOS.

Then you create your SDL2 application. Normally we would compile the application like this...

`gcc -Wall appcode.c -lSDL2`

But above is linking against SDL2's dynamic library.  
If we need to link against **static** one, we do the following steps.

1. Get static link flags from `sdl2-config --static-libs` which I got as follows

	```swift
	-L/usr/local/lib -lSDL2 -lm -liconv -Wl,-framework,CoreAudio -Wl,-framework,AudioToolbox -Wl,-framework,ForceFeedback -lobjc -Wl,-framework,CoreVideo -Wl,-framework,Cocoa -Wl,-framework,Carbon -Wl,-framework,IOKit -Wl,-weak_framework,QuartzCore -Wl,-weak_framework,Metal
	```
2. Take what we got from 1. but cut out the starting part `-L/usr/local/lib -lSDL2` out then supply it to `gcc` like this 

	```swift
	gcc -Wall appcode.c /usr/local/lib/libSDL2.a -lm -liconv -Wl,-framework,CoreAudio -Wl,-framework,AudioToolbox -Wl,-framework,ForceFeedback -lobjc -Wl,-framework,CoreVideo -Wl,-framework,Cocoa -Wl,-framework,Carbon -Wl,-framework,IOKit -Wl,-weak_framework,QuartzCore -Wl,-weak_framework,Metal
	```

   You can see that we also supply `/usr/local/lib/libSDL2.a` to link against its object files inside `libSDL2.a`.

3. Inspect result executable file via `otool -L a.out`. You should not see anything about SDL2 related libraries. This means it works!

# Conclusion

Create SDL2 application normally, then use flags from `sdl2-config --static-libs` to supply in `gcc` command. Lastly, check the result with `otool -L ...`.
