$fn=60;
mm_in=25.4;
puck_diameter=3*mm_in;
puck_radius=puck_diameter/2;
bit_diameter=(1/4)*mm_in;
template_diameter=(5/8)*mm_in;
bit_template_difference=(template_diameter-bit_diameter)/2;
module bit_template(){
    difference(){
        #circle(d=bit_diameter);
        #circle(d=template_diameter);
    }
}
module holder_plate(){
    translate([1.25*mm_in, 0]) square([7.5*mm_in,5*mm_in], center=true);
}
translate([puck_radius-bit_diameter/2,0,0]) bit_template();
difference(){
    holder_plate();
    circle(d=3*mm_in+2*bit_template_difference);
    circle(d=3*mm_in);
}