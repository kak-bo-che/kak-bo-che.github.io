---
layout: post
title: Generating a Rose Window
categories: Laser Cutter, Paper Cutter
tags: [Laser Cutter, Card Stock, Paper Cutter, OpenJSCAD, Inkscape]
minutes_spend: 180
---
![all layers](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window_combined.svg)


Still a work in progress, but so far promising results...[(inspiration)](https://quadralectics.wordpress.com/3-contemplation/3-3-churches-and-tetradic-architecture/3-3-2-wind-roses-and-rose-windows/)

## OpenJSCAD source

{% highlight javascript linenos %}

// title      : Rose Window Generator
// license    : MIT License
// revision   : 0.1.0
// tags       : Rose_Window
// file       : rose_window.jscad
function double_circle(radius1, radius2){
    return circle({r:radius1}).center()
        .subtract(circle({r:radius2}).center());
}

function ray(radius, width, divisions, invert){
  rays = [];
  for (i=0; i < divisions; i++){
      rays.push(CAG.rectangle({corner1: [0, -width/2], corner2: [radius,width/2]})
                   .rotateZ(i*360/divisions));
  }
  return union(rays);
}

function double_rose(radius, circle_radius, circle_inner_radius, divisions){
  var rose = new CAG();
  for (i=0;i<divisions;i++){
    rose = rose.union(double_circle(circle_radius, circle_inner_radius)
        .translate([radius - circle_radius,0]).rotateZ(i*360/divisions));
  }
  return rose;
}

function rose_window(radius, divisions, inner_radius, invert){
  var outside_circle = circle({r:radius}).center();
  var rose = new CAG();
  for (i=0;i<divisions;i++){
    rose = rose.union(circle({r:(radius-inner_radius)/2}).center()
        .translate([inner_radius + (radius-inner_radius)/2,0]))
        .rotateZ(360/divisions);
  }
  if (invert === true){
    rose = outside_circle.subtract(rose);
  }
  return rose;
}
function main() {
    // still a manual process here, play around with values...
    return double_circle(20,19)
    //.subtract(rose_window(22,17, 18,true))
    .union(double_rose(19.2,6,5.5,14))
    //.union(rose_window(19,17, 12,false).rotateZ(360/17/2))
    //.subtract(double_circle(14,9))
    // .union(rose_window(15,3))
    // .union(double_circle(13.5,12.5))
    // .union(double_rose(10,5,4.5,7))
    // .union(circle({r:5}).center())
    // .union(ray(14, .5, 14))
    // .subtract(circle({r:4}).center())
    .scale(4)
    // .subtract(rose_window(4, 3, 0, true).center().rotateZ(15))
}

{% endhighlight %}

![Finished Rose Window](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window.jpg)

## DXF, SVG and FCM files
* Bottom [DXF](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window.dxf) [SVG](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window.svg) [FCM](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window.fcm)
* Middle [DXF](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window2.dxf) [SVG](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window2.svg) [FCM](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window2.fcm)
* Top    [DXF](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window3.dxf) [SVG](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window3.svg) [FCM](/images/{{ page.date | date:"%Y-%m-%d" }}/rose_window3.fcm)
