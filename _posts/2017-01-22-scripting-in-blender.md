---
layout: post
title:  "Scripting in Blender"
date:   2017-01-22 09:45
categories: blog
tags: [blender, scripting]
---

I started to use Blender for one of my work for client. There're times when I need to modify, fix, re-create UV, map mesh to texture, etc by myself without waiting for artist to do that.

As for automation that we can achieve it in [iOS workflow via Fastlane](https://wasin.io/blog/2017/01/15/hands-on-fastlane.html) especially in automated testing/building, I'm slightly surprised to see that it has potential to be done in Blender as well.

![Scripting in Blender](/assets/images/blender/blender-python-script.png)

Above is the result I got from executing python script right inside Blender to automatically **create a new cube, rename its name, and move its location**.

Technically you can execute python script with Blender's GUI but Blender still runs in the background. Anyway I don't do it in this article.

## Let's Get Started

Firstly remove a cube as shown on *3D View* window, then you  choose a screen layout by clicking on *Choose Screen Layout* button then select *Scripting* as seen below.

![Choose Screen Layout](/assets/images/blender/blender-choose-screen-layout.png)

To have such UI element shows up, you need to select the panel as *Info* first as seen below.

![Panel Type](/assets/images/blender/blender-panel-type.png)

Now you will get layout ready to script in python.

Enter code I shared on [gist](https://gist.github.com/haxpor/198f6993a62a21279519fcd0fbb36726), or copy the following code to editor.

```python
import bpy

def strVector3( v3 ):
    return str(v3.x) + "," + str(v3.y) + "," + str(v3.z)

# create a new cube
bpy.ops.mesh.primitive_cube_add()

# newly created cube will be automatically selected
cube = bpy.context.selected_objects[0]
# change name
cube.name = "MyLittleCube"

# change its location
cube.location = (0.0, 5.0, 0.0)

# done
print("Done creating MyCube at position " + strVector3(cube.location) + " with name " + cube.name)
```

Then name the file to `blender_cube_creation.py`. Finally, click on *Run Script*.

![Name and run script](/assets/images/blender/blender-name-the-file-run-script.png)

Then you will see that Blender will create a new cube, select it, rename into `"MyLittleCube"`, and translate to `(0.0, 5.0, 0.0)`.

## Tips

* If you hold mouse over each Blender's UI element for a while, it will show a tool tip of python function that you can use it in the script.
* Play around with each function in *Python Console* window at the bottom before combining them up in full script.
* To know how to do something in code for certain actions we did directly on Blender GUI, just do some actions on Blender first, then look at *Info* window (on the top), you will see something like this for history of python functions called. Then you know which functions to call in python code.  

   [![Blender Info Window with History](/assets/images/blender/blender-info-window.png)](/assets/images/blender/blender-info-window.png)  
   <sub>Click on image to enlarge</sub>