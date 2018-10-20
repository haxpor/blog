---
layout: post
title:  "Cross Compile SDL2 (both library and app) on Windows from macOS"
date:   2018-10-21 3:09
thumbnail: /assets/images/post-thumbnail/textpost.png
tags: [sdl2, cross-compile]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

I've seen several of article written about cross compile SDL2 on Windows from Linux. Now in this article, for all of you macOS users, we can do the same.

We are going to build SDL2 from source without making use of any pre-built binaries. This is cleaner as we can focus on just acquiring source, then proceed on from that.

# My Setup

I use macOS 10.14 Mojave with development snapshop (Oct 1) v.2.0.9 of SDL2. I also use VirtualBox running Windows XP 32 bit with hardware accelerated support so I can test the sample code with OpoenGL in there.

# Install mingw64
Execute `brew install mingw-w64`.

This will usually install mingw64 into `/usr/local/Cellar/mingw-w64/`. It will automatically symlink all executable binaries both for Windows 32 & 64 bit for us.

For 32 bit, executable binaries are prefixed with `i686-w64-mingw32-`.  
For 64 bit, executable binaries are prefixed with `x86_64-w64-mingw32-`.

Just be careful when execute relevant command. You need to make sure you use a right version of binary.

# Download SDL2 Source

No matter what version you have no matter which way you got SDL2 source from ...

* [Stable release](https://www.libsdl.org/download-2.0.php)
* Direct clone from hg via `hg clone http://hg.libsdl.org/SDL`
* [Development snapshot](https://www.libsdl.org/hg.php) - as of this writing is Oct 1

Download and put it somewhere in your dirty workspace path. In future, we will usually go back to such path to update patches, build various different stuff, or event poke around the source code.

Let's say we keep  it at `~/scrap/SDL`

# Build SDL2 Windows Library

Building library for Windows is slightly special. We will need to create a new directory called `build` at the root level of SDL source via `mkdir build`.

Then go into such directory via `cd build`, then finally execute the following command depending on either 32 or 64 bit

## • 32 bit

```swift
../configure --prefix=/tmp/sdl2-win32 --host=i686-w64-mingw32
```

## • 64 bit

```swift
../configure --prefix=/tmp/sdl2-win64 --host=x86_64-w64-mingw32
```

, wheres `--prefix=...` tells which path we will install the built library to
         `--host=...` tells `configure` to prepare things for target architecture the binary will be running on, in this case Windows platform either 32 or 64 bit

If things went fine without any error, you then execute `make`, then `make install.

We will have `SDL2.dll` placed at `/tmp/sdl2-win<32|64>/bin`, and archive of object files `.a` placed at `/tmp/sdl2-win<32|64>/lib`.

# Build Application

Technically we have 2 options either to build our application linked **statically** or **dynamically** against SDL2. Anyway, as tested <u>I don't have any success with statically link yet</u> so here we go with only dynamically link approach.

So first locate your SDL2 test `.c` source file. As well, we will use compiling and linking flags from `sdl2-config` as it locates at `/tmp/sdl2-win<32|64>/bin`.

> Make sure you use the correct binary of `sdl2-config`. If you install SDL2 system-wide on your system, and directly execute `sdl2-config`, this will use your system-wide one.

Assume your `.c` source file locates at `/tmp/mysdl2-sample/test.c`, then `cd /tmp/mysdl2-sample` first then execute the following command

## • 32 bit

```swift
i686-w64-mingw32-gcc test.c -I/tmp/sdl2-win32/include/SDL2 `./tmp/sdl2-win32/bin/sdl2-config --libs` -o test.exe
```

or basically it is equivalent to

```swift
i686-w64-mingw32-gcc test.c -I/tmp/sdl2-win32/include/SDL2 -L/tmp/sdl2-win32/lib -lmingw32 -lSDL2main -lSDL2 -mwindows -o test.exe
```

## • 64 bit

```swift
x86_64-w64-mingw32-gcc test.c -I/tmp/sdl2-win64/include/SDL2 `./tmp/sdl2-win64/bin/sdl2-config --libs` -o test.exe
```

or basically it is equivalent to

```swift
x86_64-w64-mingw32-gcc test.c -I/tmp/sdl2-win64/include/SDL2 -L/tmp/sdl2-win64/lib -lmingw32 -lSDL2main -lSDL2 -mwindows -o test.exe
```

Notice that those commands are same same, the difference is at the name of commmand as it needs to be the correct one to build for either 32 or 64 bit version, and make sure you execute correct path of `sdl2-config` as bundled after we successfully built SDL2 library.

# Ship It! 

That's it! Now it's time to ship.

What files should we deliver to users? As we built in dynamically link approach, we need to ship `.dll` of SDL2 and also mingw64 along side our appliation executable binary.

You can get `.dll` files from `/usr/local/Cellar/mingw-w64/<version>/toolchain-<i686|x86_64>/<i686-w64-mingw32|x86_64-w64-mingw32>/`. In which there are 2 directories to look at both `bin` and `lib`. All **possible** `.dll` files to ship are as follows

## • 32 bit

* ./toolchain-i686/i686-w64-mingw32/bin/libwinpthread-1.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libquadmath-0.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libstdc++-6.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libgcc_s_sjlj-1.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libatomic-1.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libssp-0.dll
* ./toolchain-i686/i686-w64-mingw32/lib/libgfortran-5.dll

## • 64 bit

* ./toolchain-x86_64/x86_64-w64-mingw32/bin/libwinpthread-1.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libquadmath-0.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libstdc++-6.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libgcc_s_seh-1.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libatomic-1.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libssp-0.dll
* ./toolchain-x86_64/x86_64-w64-mingw32/lib/libgfortran-5.dll

In which it would depend on your application whether it use such functionality provided by certain `.dll` files above, if so, then you need to include it.

A simple test is to run your SDL2 application on target system, then see if it shouts out popup error of missing a particular `dll` file or not. Then you include it. For a simple SDL2 code without, generally we need `SDL2.dll`, `libgcc_s_sjlj-1.dll`, and `libwinpthread-1.dll`.

Now test running on target system. You should see it runs perfectly fine.
