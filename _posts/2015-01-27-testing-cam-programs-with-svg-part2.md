---
layout: post
title: Testing CAM Programs with SVG Part II (Easel)
categories: cnc
tags: [svg, cam, easel, openscam]
minutes_spend: 60
---
Since this is part II you can find the settings I'm using in [part one]({% post_url 2015-01-22-testing-cam-programs-with-svg %}).
Today I'll be using [Easel](http://app.easel.com/)
 which is the software that is expected to work with the Shapeoko 2 that was donated to Quelab by [Inventables](https://www.inventables.com).

## First Attempt with Easel
My first attempt at duplicating my MakerCAM process ended in failure. Instead of cutting out the square it engraved the entire area of the square.

![Easel-fill](/images/{{ page.date | date:"%Y-%m-%d" }}/easel-fill.gif)

### OpenSCAM of First Attempt
I only realized I did something terribly wrong when I went to check the tool paths in OpenSCAM ... oops.
![OpenSCAM Easel-fill](/images/{{ page.date | date:"%Y-%m-%d" }}/openscam-easel-fill.png)

## Second Attempt with Easel
1. File => Import SVG
2. Move the square to the center of the screen. Impossible to do an outside profile operation with an edge outside of the cut area.
3. Select cut operation *Outline*
4. Select Units mm
5. Materials => Birch
6. Materials => Z: 5 mm
7. Machine => Advanced
8. Machine => Advanced => Generate g-code
9. Machine => Advanced => Export g-code

![Easel-fill](/images/{{ page.date | date:"%Y-%m-%d" }}/easel.gif)

### OpenSCAM Distance View
Notice that the resulting SCAM does a large machine move to the center of the cut area. This must mean that Easel expects the Shapeoko 2 to be zeroed at the machine origin and the top of the material first.
![OpenSCAM Dryrun](/images/{{ page.date | date:"%Y-%m-%d" }}/openscam-easel-long.png)

### OpenSCAM Close Up View
The close up of the actual cut paths looks very similar to the cuts from MakerCAM. 
![OpenSCAM Dryrun](/images/{{ page.date | date:"%Y-%m-%d" }}/openscam-easel.png)

### Resulting GCODE
Twice as long as MakerCAM for some reason.

{% highlight asm %}
G21
G90
G1 Z3.810 F228.6
G0 X139.848 Y123.094
G1 Z-0.711 F228.6
G1 X139.848 Y123.094 F762.0
G1 X140.246 Y123.015 F762.0
G1 X140.612 Y122.839 F762.0
G1 X140.923 Y122.577 F762.0
G1 X141.155 Y122.244 F762.0
G1 X141.295 Y121.862 F762.0
G1 X141.325 Y121.662 F762.0
G1 X141.322 Y94.848 F762.0
G1 X141.217 Y94.456 F762.0
G1 X141.018 Y94.103 F762.0
G1 X140.733 Y93.809 F762.0
G1 X140.387 Y93.600 F762.0
G1 X139.998 Y93.486 F762.0
G1 X113.187 Y93.469 F762.0
G1 X112.789 Y93.544 F762.0
G1 X112.423 Y93.721 F762.0
G1 X112.112 Y93.986 F762.0
G1 X111.880 Y94.319 F762.0
G1 X111.707 Y94.901 F762.0
G1 X111.713 Y121.715 F762.0
G1 X111.818 Y122.107 F762.0
G1 X112.017 Y122.460 F762.0
G1 X112.298 Y122.754 F762.0
G1 X112.648 Y122.963 F762.0
G1 X113.037 Y123.077 F762.0
G1 X139.848 Y123.094 F762.0
G1 Z-1.422 F228.6
G1 X139.848 Y123.094 F762.0
G1 X139.848 Y123.094 F762.0
G1 X140.246 Y123.015 F762.0
G1 X140.612 Y122.839 F762.0
G1 X140.923 Y122.577 F762.0
G1 X141.155 Y122.244 F762.0
G1 X141.295 Y121.862 F762.0
G1 X141.325 Y121.662 F762.0
G1 X141.322 Y94.848 F762.0
G1 X141.217 Y94.456 F762.0
G1 X141.018 Y94.103 F762.0
G1 X140.733 Y93.809 F762.0
G1 X140.387 Y93.600 F762.0
G1 X139.998 Y93.486 F762.0
G1 X113.187 Y93.469 F762.0
G1 X112.789 Y93.544 F762.0
G1 X112.423 Y93.721 F762.0
G1 X112.112 Y93.986 F762.0
G1 X111.880 Y94.319 F762.0
G1 X111.707 Y94.901 F762.0
G1 X111.713 Y121.715 F762.0
G1 X111.818 Y122.107 F762.0
G1 X112.017 Y122.460 F762.0
G1 X112.298 Y122.754 F762.0
G1 X112.648 Y122.963 F762.0
G1 X113.037 Y123.077 F762.0
G1 X139.848 Y123.094 F762.0
G1 Z-2.134 F228.6
G1 X139.848 Y123.094 F762.0
G1 X139.848 Y123.094 F762.0
G1 X140.246 Y123.015 F762.0
G1 X140.612 Y122.839 F762.0
G1 X140.923 Y122.577 F762.0
G1 X141.155 Y122.244 F762.0
G1 X141.295 Y121.862 F762.0
G1 X141.325 Y121.662 F762.0
G1 X141.322 Y94.848 F762.0
G1 X141.217 Y94.456 F762.0
G1 X141.018 Y94.103 F762.0
G1 X140.733 Y93.809 F762.0
G1 X140.387 Y93.600 F762.0
G1 X139.998 Y93.486 F762.0
G1 X113.187 Y93.469 F762.0
G1 X112.789 Y93.544 F762.0
G1 X112.423 Y93.721 F762.0
G1 X112.112 Y93.986 F762.0
G1 X111.880 Y94.319 F762.0
G1 X111.707 Y94.901 F762.0
G1 X111.713 Y121.715 F762.0
G1 X111.818 Y122.107 F762.0
G1 X112.017 Y122.460 F762.0
G1 X112.298 Y122.754 F762.0
G1 X112.648 Y122.963 F762.0
G1 X113.037 Y123.077 F762.0
G1 X139.848 Y123.094 F762.0
G1 Z-2.500 F228.6
G1 X139.848 Y123.094 F762.0
G1 X139.848 Y123.094 F762.0
G1 X140.246 Y123.015 F762.0
G1 X140.612 Y122.839 F762.0
G1 X140.923 Y122.577 F762.0
G1 X141.155 Y122.244 F762.0
G1 X141.295 Y121.862 F762.0
G1 X141.325 Y121.662 F762.0
G1 X141.322 Y94.848 F762.0
G1 X141.217 Y94.456 F762.0
G1 X141.018 Y94.103 F762.0
G1 X140.733 Y93.809 F762.0
G1 X140.387 Y93.600 F762.0
G1 X139.998 Y93.486 F762.0
G1 X113.187 Y93.469 F762.0
G1 X112.789 Y93.544 F762.0
G1 X112.423 Y93.721 F762.0
G1 X112.112 Y93.986 F762.0
G1 X111.880 Y94.319 F762.0
G1 X111.707 Y94.901 F762.0
G1 X111.713 Y121.715 F762.0
G1 X111.818 Y122.107 F762.0
G1 X112.017 Y122.460 F762.0
G1 X112.298 Y122.754 F762.0
G1 X112.648 Y122.963 F762.0
G1 X113.037 Y123.077 F762.0
G1 X139.848 Y123.094 F762.0
G1 Z3.810 F228.6
G0 X0.000 Y0.000
{% endhighlight %}
