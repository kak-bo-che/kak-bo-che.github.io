---
layout: post
title: Hockey Puck Pocket Holes
categories: laser
tags: [router template, laser cutting, cnc build]
minutes_spend: 120
---
## CNC Build
After assembling my CNC I realized my decision to bolt the CNC to the table wasn't such a great idea for when I have to work on things. I had read a post about one way to keep the CNC machine from sliding off the table was to inset the feet into the table.

Ideally, I would have a template and plunge router to create a pocket in the table. I didn't have a template to do this but I do have access to a laser cutter and some acrylic to create a template. I also realized that I didn't have to have a plunge router either.  Since there will already be drilled holes where I bolted the feet to the table I could just start the router inside of the hole at the depth I'm planning on cutting the pocket. 

## Materials

* [1/4" (Dia.) Down Spiral Bit](http://www.amazon.com/Dia-Down-Spiral-Bit/dp/B00004T7K3) ![router bit](/images/{{ page.date | date:"%Y-%m-%d" }}/router_bit_small.jpg) Found this at Home Depot for $20
* [Router Template Guides](http://www.amazon.com/PORTER-CABLE-42000-9-Piece-Template-Guide/dp/B0000222V1) ![router guide](/images/{{ page.date | date:"%Y-%m-%d" }}/router_guide_small.jpg)
 I don't actually have this kit I have 2 templates that came with a dovetail jig I bought off of craigslist.
* [1/4" Cast Acrylic](http://www.amazon.com/gp/product/B009AEAG2E/ref=oh_aui_search_detailpage?ie=UTF8&psc=1)

## Template Design
![openSCAD view](/images/{{ page.date | date:"%Y-%m-%d" }}/openscad_view.png)
I decided to use openscad because this would be an easy to describe.

I found that the standard size of a hockey puck is 3 in. and I measured the distance from the edge of the cnc table to the middle of the existing holes 5 in. The template which I had had an outside diameter of 5/8 in. Since the bit is only 1/4 in. I had to figure out the offset from the edge of the template to the cutting edge of the bit. This can be found in the [OpenSCAD script](/images/{{ page.date | date:"%Y-%m-%d" }}/hockey_puck_template.scad) below:

{% highlight javascript %}
$fn=60;
mm_in=25.4;
puck_diameter=3*mm_in;
puck_radius=puck_diameter/2;
bit_diameter=(1/4)*mm_in;
template_diameter=(5/8)*mm_in;
bit_template_difference=(template_diameter-bit_diameter)/2;

// To show where the template boundry is vs the cutting edge
module bit_template(){
    difference(){
        #circle(d=bit_diameter);
        #circle(d=template_diameter);
    }
}
// This has an edge that will go to the edge of my cnc table for clamping
module holder_plate(){
    translate([1.25*mm_in, 0]) square([7.5*mm_in,5*mm_in], center=true);
}

translate([puck_radius-bit_diameter/2,0,0]) bit_template();

// Everything important is here
difference(){
    holder_plate();
    circle(d=3*mm_in+2*bit_template_difference);
}

{% endhighlight %}

  According to the OpenSCAD documentation there are no units in the design, but after trying to import into Inkscape I realized that it is a pain to make Inkscape import in any units other than millimeters. So I had to go back and convert all of my units to mm before exporting the [dxf file](/images/{{ page.date | date:"%Y-%m-%d" }}/hockey_puck_template.dxf). That is why you can see 

## Results
![template and guide](/images/{{ page.date | date:"%Y-%m-%d" }}/template_and_guide.jpg)
![cut pocket](/images/{{ page.date | date:"%Y-%m-%d" }}/cut_pocket.jpg)
