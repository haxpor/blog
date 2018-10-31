---
layout: post
title:  "Integrate cimgui with SDL2 In C Code"
date:   2018-10-31 4:00
thumbnail: /assets/images/post-thumbnail/textpost.png
tags: [sdl2, cimgui, imgui, c]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

This time, I'd like to note on how to integrate imgui through cimgui in SDL2 in C code.

If you work with C++ code then it will be no problem and you won't see this and that issue to solve. But in this case, I mainly use C thus we have something to solve. This post will reflect that.

imgui is written in C++. It provides platform [implementation sample files](https://github.com/ocornut/imgui/tree/master/examples) to hook up with various platforms/API of choice not just SDL2 i.e. allegro, native Windows API, metal on macOS etc.

What we need is hooking up with SDL2 + OpenGL3 on either gl3w or glew. Thus the following files are what we will be looking at

1. [imgui_impl_opengl3.cpp](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_opengl3.cpp)
2. [imgui_impl_opengl3.h](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_opengl3.h)
3. [imgui_impl_sdl.cpp](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_sdl.cpp)
4. [imgui_impl_sdl.h](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_sdl.h)

The approach I use is to compile both sdl, and opengl3 implementation against correct SDL2 and OpenGL version as installed on our development system. This will produce object files to link with the main program which will be linking with the same version of SDL2 and OpenGL. You may want to compile them into shared library and use it to link against your main source file instead, it's OK too.

Let's drill down what's to look for.

# imgui_impl_sdl.*
---

## • IMGUI_IMPL_API

In `imgui_impl_sdl.h`, we see `IMGUI_IMPL_API`. This is clever move from author and contributors of imgui.

Having such `IMGUI_IMPL_API` in front of each declaration of function in header file like this allows us to inject via compile flags in compile time to make this C++ based implementation supports C linkage. So in our `Makefile` script, we must add `-DIMGUI_IMPL_API="extern \"C\""`.

## • struct SDL_Window

In C, whenever we want to refer to struct we need to have keyword `struct` in front. But in C++, it's optional, and isn't required.

We need to put `struct` in front of `SDL_Window` occurrences both in its heaader and implementation files. 
I don't want to use `typedef struct SDL_Window SDL_Window` as in SDL2, its source code doesn't even use `typedef` on `SDL_Window`. So this will go along with that (yup another clever move caring for detail from author and contributor of imgui).

# imgui_impl_opengl3.*
---

## • IMGUI_IMPL_API

The same as we did for `imgui_impl_sdl.h`. In our `Makefile` to compile its relevant source files, add `-DIMGUI_IMPL_API="extern \"C\""`.

## • OpenGL Function Loader

There are 4 options presented in the code to handle loading OpenGL functions.

1. gl3w
2. glew
3. glad
4. Custom

It depends which one you want to use, just make sure you have its header and source file on your system. In this case, I have `glew` installed as system-side, and provided `gl3w` alongside the sample project. So at compile time, add `-DIMGUI_IMPL_OPENGL_LOADER_...` accordingly.

# Link against _cimgui.dylib_
---

Building cimgui will produce `cimgui.dylib` without `lib...` in front. Thus if we use `-l...` linking flag, it won't find such file.

We have 2 options here.

1. Create relative path symlink as `libcimgui.dylib` -> `cimgui.dylib` (use `ln -s cimgui.dylib libcimgui.dylib`)
2. Directly use `cimgui.dylib` in linking phase

# Build Main Source
---

The fact that those platform implementation files are based on C++, thus we need to link against C++ library via `-lc++` in linking phase although we use `gcc` to compile our main source file in C.

Final result after clicking Menu->... to show additional windows will be along the line of following

[![sdl2-cimgui-demo](/assets/images/sdl2-cimgui/result-sdl2-cimgui-demo.png)](/assets/images/sdl2-cimgui/result-sdl2-cimgui-demo.png)

---

Check above setup over my repsitory on Github at [haxpor/sdl2-cimgui-demo](https://github.com/haxpor/sdl2-cimgui-demo).  
I tested with SDL2 2.0.9 (latest development as of 29 October), cimgui (4397288), glew v.2.1.0.

---

## Reference

* [https://github.com/cimgui/cimgui/issues/79](https://github.com/cimgui/cimgui/issues/79) ↩︎
* [https://github.com/cimgui/cimgui/issues/78](https://github.com/cimgui/cimgui/issues/78) ↩︎

