---
layout: post
title: Testing CAM Programs Part V (Comparing CAM Output Footers)
categories: cnc
tags: [makercam, easel, jscut, gcode, cam]
minutes_spend: 30
---
## File Footers
I'm saving my analysis of the cutting portion of the GCODE produced by the three browser based CAM programs for my next posting. Before that lets take a look at how each CAM program ends its run.

### MakerCAM
{% highlight nasm linenos %}
G0 Z15
M5
M30
{% endhighlight %}

1. G0 Rapid motion, use the highest feed rate to move to 15 mm above the surface of the start position.
2. M5 Stop Spindle
3. M30 Program end, Rewind to first block and STOP execution.

### Easel
{% highlight nasm linenos %}
G1 Z3.810 F228.6
G0 X0.000 Y0.000 
{% endhighlight %}

1. Move the tool in a straight line 3.81 mm above the surface of the part at a speed of 228.6 mm/minute
2. Rapid Move to coordinates at (0, 0) what coordinate system is being used?

### JSCut
{% highlight nasm linenos %}
; Retract
G1 Z2.5400 F2540
{% endhighlight %}

1. Move the tool in straight line 2.54 mm above the surface of the part at 2540 mm/minute

## Differences between CAM Footers
* MakerCAM moves rapidly above the work piece and turns off the spindle, which assumes control of the spindle. It also calls M30, which seems pointless.
* Easel moves at machining speed off the work piece and then rapidly returns to the origin position
* JSCut moves at machining speed off the work piece and stops.

Maybe I'm missing something but I don't understand why Easel and JsCut use G1 for removing the milling bit off the the part seems like that motion should be G0. 
