---
layout: post
title:  "Integrate imgui via cimgui with SDL2 + OpenGL3 In C Code"
date:   2018-10-31 4:00
updated: 2019-03-16 14:26
thumbnail: /assets/images/post-thumbnail/textpost.png
tags: [sdl2, cimgui, imgui, c]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

This time, I'd like to note on how to integrate [imgui](https://github.com/ocornut/imgui) through [cimgui](https://github.com/cimgui/cimgui) in SDL2 in C code. At the end of the article, you will find a Github link to such sample project. Keep reading.

If you work with C++ code then it will be no problem and you won't probably see any issue to solve. But in this case, I mainly use C thus we have something to solve. This post will reflect that.

imgui is written in C++. It provides platform [implementation sample files](https://github.com/ocornut/imgui/tree/master/examples) to hook up with various platforms/API of choice not just SDL2 i.e. allegro, native Windows API, metal on macOS etc.

What we need is hooking up with SDL2 + OpenGL3 on either gl3w or glew. Thus the following files are what we will be looking at

1. [imgui_impl_opengl3.cpp](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_opengl3.cpp)
2. [imgui_impl_opengl3.h](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_opengl3.h)
3. [imgui_impl_sdl.cpp](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_sdl.cpp)
4. [imgui_impl_sdl.h](https://github.com/ocornut/imgui/blob/master/examples/imgui_impl_sdl.h)

The approach I use is to compile both sdl, and opengl3 implementation source files against correct SDL2 and OpenGL version as installed on the system. This will produce object files to be linking with our main program. We need to make sure our main program also uses the same version of SDL2 and OpenGL as used by those implementation files; to minimize the conflicts and issues. You may want to compile them into shared library and use it to link against your main source file instead, it's OK too.

Let's drill down what's to look for.

# imgui_impl_sdl.(h/cpp)
---

## • IMGUI_IMPL_API

In `imgui_impl_sdl.h`, we see `IMGUI_IMPL_API`. This is clever move from author and contributors of imgui.

Having such `IMGUI_IMPL_API` in front of each declaration of function in header file like this allows us to inject a compilation flag to make this C++ based implementation be able to supports C linkage so we can use it in our main program which is implemented in C. So in our `Makefile` script, we must add `-DIMGUI_IMPL_API="extern \"C\""`.

## • struct SDL_Window

In C, whenever we want to refer to struct we need to have keyword `struct` in front. But in C++, it's optional, and isn't required.

We need to put `struct` in front of `SDL_Window` occurrences both in its header and implementation files. 
I don't want to use `typedef struct SDL_Window SDL_Window` as it's not exposed for public usage in SDL2 although internally it makes use of it.

Thus from the original source code of `imgui_impl_sdl.h`

```c
struct SDL_Window;
typedef union SDL_Event SDL_Event;

IMGUI_IMPL_API bool     ImGui_ImplSDL2_InitForOpenGL(SDL_Window* window, void* sdl_gl_context);
IMGUI_IMPL_API bool     ImGui_ImplSDL2_InitForVulkan(SDL_Window* window);
IMGUI_IMPL_API void     ImGui_ImplSDL2_Shutdown();
IMGUI_IMPL_API void     ImGui_ImplSDL2_NewFrame(SDL_Window* window);
```

we change it to

```c
struct SDL_Window;
typedef union SDL_Event SDL_Event;

IMGUI_IMPL_API bool     ImGui_ImplSDL2_InitForOpenGL(struct SDL_Window* window, void* sdl_gl_context);
IMGUI_IMPL_API bool     ImGui_ImplSDL2_InitForVulkan(struct SDL_Window* window);
IMGUI_IMPL_API void     ImGui_ImplSDL2_Shutdown();
IMGUI_IMPL_API void     ImGui_ImplSDL2_NewFrame(struct SDL_Window* window);
IMGUI_IMPL_API bool     ImGui_ImplSDL2_ProcessEvent(SDL_Event* event);
```
PS. Notice additional of `struct` at function's parameter.

Another notice is that the platform implementation defined `typedef` over `SDL_Event`. This redefines what is already done by SDL2, thus there's a warning.

```c
In file included from src/main.c:6:
In file included from /usr/local/include/SDL2/SDL.h:41:
/usr/local/include/SDL2/SDL_events.h:595:3: warning: redefinition of typedef 'SDL_Event'
      is a C11 feature [-Wtypedef-redefinition]
} SDL_Event;
  ^
imgui/impl/imgui_impl_sdl.h:18:25: note: previous definition is here
typedef union SDL_Event SDL_Event;
                        ^
1 warning generated.
```

Although it said definition is first found in imgui's implementation header, but that's because in `main.c`, it included such header first before `SDL.h`. I leave this as a notice as I still cannot think about the way to resolve this cleanly. Usually this is a trick as `union` struct is treated as anonymous struct that we just can't forward declared like we did previously. If you have any idea, feel free to comment below the article.

# imgui_impl_opengl3.(h/cpp)
---

## • IMGUI_IMPL_API

The same as we did for `imgui_impl_sdl.h`. In our `Makefile` to compile its relevant source files, add `-DIMGUI_IMPL_API="extern \"C\""`.

There's one more thing to do. We need to remove default parameter value in function as seen in `imgui_impl_opengl3.h`

```c
IMGUI_IMPL_API bool     ImGui_ImplOpenGL3_Init(const char* glsl_version = NULL);
```

we changed it to

```c
IMGUI_IMPL_API bool     ImGui_ImplOpenGL3_Init(const char* glsl_version);
```

## • OpenGL Function Loader

There are 4 options presented in the code to handle loading OpenGL functions.

1. gl3w
2. glew
3. glad
4. Custom

It depends which one you want to use, just make sure you have its header and source file on your system. In this case, I have `glew` installed, as well as provided `gl3w` alongside the sample project. So at compile time, if we want to use `glew` as a loader then specify `-DIMGUI_IMPL_OPENGL_LOADER_GLEW`. For `gl3w`, no need to specify anything as implementation source code will default to it when no specific loader is supplied.

The following code as seen in `imgui_impl_opengl3.h`.

```c
...
// Set default OpenGL loader to be gl3w
#if !defined(IMGUI_IMPL_OPENGL_LOADER_GL3W)     \
 && !defined(IMGUI_IMPL_OPENGL_LOADER_GLEW)     \
 && !defined(IMGUI_IMPL_OPENGL_LOADER_GLAD)     \
 && !defined(IMGUI_IMPL_OPENGL_LOADER_CUSTOM)
#define IMGUI_IMPL_OPENGL_LOADER_GL3W
#endif
...
```

# Link against _cimgui.dylib_
---

Building cimgui will produce `cimgui.dylib` without `lib...` in front. Check its [Makefile](https://github.com/cimgui/cimgui/blob/4be0522d9f1513e9f14dd3510c396325007f58ad/Makefile#L15-L44), you will see similar pattern of output names applied for other platforms, so please take good care of hanlding this. Thus if we use `-l...` linking flag, it won't find such file.

We have 2 options here.

1. Create relative path symlink as `libcimgui.dylib` -> `cimgui.dylib` (use `ln -s cimgui.dylib libcimgui.dylib`)
2. Directly use `cimgui.dylib` in linking phase (I used this approach)

# Build
---

The fact that those platform implementation files are based in C++, thus we need to link against C++ library via `-lc++` with `gcc`. 

There are 3 build targets

1. `make` or `make all` - to build both variant of `gl3w` and `glew`
2. `make gl3w`
3. `make glew`

It will produce executable `main-gl3w` or `main-glew` at the root directory.

Run such file, and play around with it.
If click on `Menu->...` on the right popup to show additional windows; you will see something similar to the following result.

[![sdl2-cimgui-demo](/assets/images/sdl2-cimgui/result-sdl2-cimgui-demo.png)](/assets/images/sdl2-cimgui/result-sdl2-cimgui-demo.png)

# Recap
---

The sample project has cimgui as dependencies, and in turn cimgui has imgui as dependencies as well. Dependencies are via git submodule.

Thus we refer to relevant headers and some supporting implementation source files in imgui project directory (nested inside cimgui) but just a few source files that we copied and modified to make it compatible with C realm as seen in the previous section.

When build the project, it will build cimgui, then copy the result dynamica library file into its root directory in order to implicitly makes rpath towards library correct without hassle.

At last, check inside `Makefile` for which source files to look for when you integrate cimgui with your SDL2 + OpenGL3 program.

---

Check above setup over my repsitory on Github at [haxpor/sdl2-cimgui-demo](https://github.com/haxpor/sdl2-cimgui-demo).  
I tested with SDL2 2.0.9 (latest development as of 29 October), cimgui (check commit hash in git repo via `git submodule status`), glew v.2.1.0.

---

## Reference

* [https://github.com/cimgui/cimgui/issues/79](https://github.com/cimgui/cimgui/issues/79) ↩︎
* [https://github.com/cimgui/cimgui/issues/78](https://github.com/cimgui/cimgui/issues/78) ↩︎

