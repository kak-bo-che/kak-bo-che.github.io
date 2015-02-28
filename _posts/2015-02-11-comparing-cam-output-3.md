---
layout: post
title: Testing CAM Programs Part VI (Comparing CAM Output Machining)
categories: cnc
tags: [makercam, easel, jscut, gcode, cam]
minutes_spend: 240
---
<script type="text/javascript" src="/images/{{ page.date | date:"%Y-%m-%d" }}/arc-motion.js"></script>

## Differences Between MakerCAM, Easel, and JsCut
One square is different than the others...

![Combined](/images/{{ page.date | date:"%Y-%m-%d" }}/combined.png)

## Important GCODE to know

* G1 - Coordinated motion ("Straight feed")
* G2 - Clockwise Arc Move
* G3 - Counter Clockwise Arc Move

Instead of following the entire machining operation I will focus on the first tool pass from Z operation to Z operation.

### MakerCAM
{% highlight nasm linenos %}
G0 X-1.5875634517766497 Y0
G1 Z-1.5 F1200
G1 X-1.5862944162436547 Y-35.276649746192895 F2473
G3 X0 Y-36.86548223350254 I1.5862944162436547 J0
G1 X35.276649746192895 Y-36.86548223350254
G3 X36.86548223350254 Y-35.276649746192895 I0 J1.5862944162436547
G1 X36.86548223350254 Y0
G3 X35.276649746192895 Y1.5862944162436547 I-1.5862944162436547 J0
G1 X0 Y1.5862944162436547
G3 X-1.5862944162436547 Y0 I0 J-1.5862944162436547
G1 Z-3 F1200
{% endhighlight %}

Wow is MakerCAM compact. What is going on here? with the I and J values? 

<a onClick="arcMotion('arcMotion')">Animate MakerCAM Arc Motion</a>

<div id="arcMotion" class="paper"></div>
<script type="text/javascript">arcMotion('arcMotion');</script>

#### side length = 35.2766 mm

1. First plunging into the material to a depth of 1.5mm at 1200 mm/m ~ half of the lateral speed 
2. Move in a straight line from the start position to (-1.5862, -35.2766)
3. Move in an arc whose center is the corner of the work piece ending at (0, -36.8655)
4. Move in a straight line from the start position to (35.2766, -35.8655)
5. similar motion for other 3 sides
6. plunge 1.5 mm

### Easel
{% highlight nasm linenos %}
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
{% endhighlight %}

<a onClick="segmentMotion('easelSegments', 6)">Animate Easel Segmented Motion</a>

<div id="easelSegments" class="paper"></div>

<script type="text/javascript">-segmentMotion('easelSegments', 6);</script>

#### side length = 26.81 mm

1. First begin plunging into the material to a depth of 0.711 mm at 228 mm/min ~ 1/3 lateral speed 
2. Move in a straight line from the start position to (139.848, 123.094)
3. Move along the 90 degree arc, whose center is the corner of the work divided into six chords ending at (141.325, 121.662)
4. Move in a straight line from the start position to (141.322, 94.848)
5. similar motion for other 3 sides
6. plunge 0.711 mm

### JSCut
{% highlight nasm linenos %}
G1 Z0.0000
; plunge
G1 Z-1.5000 F127
; cut
G1 X0.0000 Y1.5875 F1016
G1 X-0.0688 Y1.5860
G1 X-0.1585 Y1.5796
G1 X-0.2474 Y1.5682
G1 X-0.3358 Y1.5517
G1 X-0.4229 Y1.5301
G1 X-0.5088 Y1.5037
G1 X-0.5931 Y1.4727
G1 X-0.6754 Y1.4366
G1 X-0.7554 Y1.3962
G1 X-0.8331 Y1.3513
G1 X-0.9083 Y1.3020
G1 X-0.9804 Y1.2487
G1 X-1.0495 Y1.1913
G1 X-1.1151 Y1.1298
G1 X-1.1773 Y1.0650
G1 X-1.2355 Y0.9967
G1 X-1.2898 Y0.9253
G1 X-1.3401 Y0.8509
G1 X-1.3861 Y0.7737
G1 X-1.4277 Y0.6942
G1 X-1.4646 Y0.6124
G1 X-1.4968 Y0.5286
G1 X-1.5245 Y0.4430
G1 X-1.5471 Y0.3561
G1 X-1.5646 Y0.2682
G1 X-1.5773 Y0.1793
G1 X-1.5850 Y0.0897
G1 X-1.5875 Y0.0000
G1 X-1.5875 Y-28.2222
G1 X-1.5860 Y-28.2910
G1 X-1.5796 Y-28.3807
G1 X-1.5682 Y-28.4696
G1 X-1.5517 Y-28.5580
G1 X-1.5301 Y-28.6451
G1 X-1.5037 Y-28.7310
G1 X-1.4727 Y-28.8153
G1 X-1.4366 Y-28.8976
G1 X-1.3962 Y-28.9776
G1 X-1.3513 Y-29.0553
G1 X-1.3020 Y-29.1305
G1 X-1.2487 Y-29.2026
G1 X-1.1913 Y-29.2717
G1 X-1.1298 Y-29.3373
G1 X-1.0650 Y-29.3995
G1 X-0.9967 Y-29.4577
G1 X-0.9253 Y-29.5120
G1 X-0.8509 Y-29.5623
G1 X-0.7737 Y-29.6083
G1 X-0.6942 Y-29.6499
G1 X-0.6124 Y-29.6868
G1 X-0.5286 Y-29.7190
G1 X-0.4430 Y-29.7467
G1 X-0.3561 Y-29.7693
G1 X-0.2682 Y-29.7868
G1 X-0.1793 Y-29.7995
G1 X-0.0897 Y-29.8072
G1 X0.0000 Y-29.8097
G1 X28.2222 Y-29.8097
G1 X28.2910 Y-29.8082
G1 X28.3807 Y-29.8018
G1 X28.4696 Y-29.7904
G1 X28.5580 Y-29.7739
G1 X28.6451 Y-29.7523
G1 X28.7310 Y-29.7259
G1 X28.8153 Y-29.6949
G1 X28.8976 Y-29.6588
G1 X28.9776 Y-29.6184
G1 X29.0553 Y-29.5735
G1 X29.1305 Y-29.5242
G1 X29.2026 Y-29.4709
G1 X29.2717 Y-29.4135
G1 X29.3373 Y-29.3520
G1 X29.3995 Y-29.2872
G1 X29.4577 Y-29.2189
G1 X29.5120 Y-29.1475
G1 X29.5623 Y-29.0731
G1 X29.6083 Y-28.9959
G1 X29.6499 Y-28.9164
G1 X29.6868 Y-28.8346
G1 X29.7190 Y-28.7508
G1 X29.7467 Y-28.6652
G1 X29.7693 Y-28.5783
G1 X29.7868 Y-28.4904
G1 X29.7995 Y-28.4015
G1 X29.8072 Y-28.3119
G1 X29.8097 Y-28.2222
G1 X29.8097 Y0.0000
G1 X29.8082 Y0.0688
G1 X29.8018 Y0.1585
G1 X29.7904 Y0.2474
G1 X29.7739 Y0.3358
G1 X29.7523 Y0.4229
G1 X29.7259 Y0.5088
G1 X29.6949 Y0.5931
G1 X29.6588 Y0.6754
G1 X29.6184 Y0.7554
G1 X29.5735 Y0.8331
G1 X29.5242 Y0.9083
G1 X29.4709 Y0.9804
G1 X29.4135 Y1.0495
G1 X29.3520 Y1.1151
G1 X29.2872 Y1.1773
G1 X29.2189 Y1.2355
G1 X29.1475 Y1.2898
G1 X29.0731 Y1.3401
G1 X28.9959 Y1.3861
G1 X28.9164 Y1.4277
G1 X28.8346 Y1.4646
G1 X28.7508 Y1.4968
G1 X28.6652 Y1.5245
G1 X28.5783 Y1.5471
G1 X28.4904 Y1.5646
G1 X28.4015 Y1.5773
G1 X28.3119 Y1.5850
G1 X28.2222 Y1.5875
; Rapid to initial position
G1 X28.2222 Y1.5875 F2540
G1 Z-1.5000
; plunge
G1 Z-3.0000 F127
{% endhighlight %}

<a onClick="segmentMotion('jsCutSegments', 27)">Animate JsCut Segmented Motion</a>


<div id="jsCutSegments" class="paper"></div>

<script type="text/javascript">-segmentMotion('jsCutSegments', 27);</script>

#### side length = 28.2222 mm

1. First begin plunging into the material to a depth of 1.5 mm at 127 mm/min ~ 1/8 lateral speed
2. Move in a straight line from the start position to (0, 1.5875)
3. Move along the 90 degree arc, whose center is the corner of the work divided into 27 chords ending at (-1.5875, 0)
4. Move in a straight line from the start position to (-1.5875, -28.2222)
5. similar motion for other 3 sides
6. plunge 1.5 mm

## Differences between CAM Programs
* First and foremost each program by default expects the SVG to be defined in slightly different units (mm) per pixel
* MakerCAM uses Arc Motion
* Easel and JsCut use line segments for curves and Easel divides curves into far fewer arc chords than JsCut
* MakerCAM and JsCut plunge 1.5mm per pass while Easel only goes .75 mm. Which 1/2 tool diameter vs 1/4. looking into this further it appears that Easel wasn't configured correctly somehow and only cuts to a maximum depth of 2.5 mm vs 5mm.
