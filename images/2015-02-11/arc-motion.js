arcMotion = function(example_name){
  var tool_diameter = 160;
  var tool_radius = tool_diameter/2;
  var total_width = 200;
  var half_width = total_width/2;


  showArc = function(draw){
    var circle = draw.circle().move(half_width, half_width).stroke({width:1, color:'#f06'}).fill('#f06').opacity(0.1)
    circle.animate(1000, '<', 1000).radius(tool_radius).after(function(){
      this.animate(2000, '>', 1000);
    })
    
    draw.path().M({x: half_width - tool_radius, y: half_width})
               .A(tool_radius, tool_radius, 0, 0, 1, {x: half_width, y: half_width - tool_radius})
               .stroke({ width: 1, color: '#f06'}).fill('none').drawAnimated({delay:3000, duration:2000})
  }

  showToolPath = function(draw){
    var tool_path = draw.path().M({x: half_width - tool_radius, y: total_width })
                  .L({x: half_width - tool_radius, y: half_width})
                  .A(tool_radius, tool_radius, 0, 0, 1, {x: half_width, y: half_width - tool_radius}).fill('none')
                  .L({x: total_width, y: half_width - tool_radius}).stroke({ width: 1 }).fill('none').drawAnimated({delay:5000, duration:2000})
  }
    var arcDemo = SVG.get(example_name + '_');
    if (arcDemo) { 
      arcDemo.clear()
    } else {
      arcDemo = SVG(example_name).size(200, 200).attr('id', example_name + '_');
    }
    var rect = arcDemo.rect(150,150).move(half_width,half_width).stroke({width:1}).fill('blue')

    showArc(arcDemo);
    showToolPath(arcDemo);
}

segmentMotion = function(example_name, num_segments){
  var tool_diameter = 160;
  var tool_radius = tool_diameter/2;
  var total_width = 200;
  var half_width = total_width/2;
  var total_delay = 6000;
  var segment_delay = total_delay/(num_segments);

  showSegments = function(draw, num_segments){
    var arcAngle = (Math.PI/2)/(num_segments);
    var start =   [half_width - tool_radius, half_width];
    var end =     [half_width, half_width - tool_radius];
    var last = start;
    var origin = [half_width, half_width];
    var vertices  = [];

    vertices.push(start)
    for (i = 1; i < (num_segments); i++){
      var x =  half_width - tool_radius*Math.cos(i*arcAngle);
      var y =  half_width - tool_radius*Math.sin(i*arcAngle);
      draw.polygon([[x,half_width], origin, [x,y]]).stroke({ width: 1, color: 'none'})
                                                   .fill('none')
                                                   .animate(segment_delay, '<>', segment_delay*i)
                                                   .opacity(0.1)
                                                   .stroke({ width: 1, color: '#f06'})
                                                   .fill('#f06');
      draw.polyline([last, [x,y]]).stroke({width:1, color: 'none'}).animate(segment_delay, '<>', segment_delay*i).stroke({width:1, color: '#f06'})
      last = [x,y];
      vertices.push([x,y]);
    }
    draw.polyline([last, end]).stroke({width:1, color: 'none'}).animate(1000, '<>', segment_delay*i).stroke({width:1, color: '#f06'})
    vertices.push(end);
    return vertices;
  }

  showToolPath = function(draw, curve){
    var tool_path = draw.path().M({x: half_width - tool_radius, y: total_width })
                  .L({x: half_width - tool_radius, y: half_width})
    $.each(curve, function(index, point){ tool_path.L({x:point[0], y:point[1]})})
    tool_path.L({x: total_width, y: half_width - tool_radius}).stroke({ width: 1 }).fill('none').drawAnimated({delay:total_delay + 1000, duration:2000})
  }
    var arcDemo = SVG.get(example_name + '_');
    if (arcDemo) { 
      arcDemo.clear()
    } else {
      arcDemo = SVG(example_name).size(200, 200).attr('id', example_name + '_');
    }
    var rect = arcDemo.rect(150,150).move(half_width,half_width).stroke({width:1}).fill('blue')
    var segments = showSegments(arcDemo, num_segments);
    showToolPath(arcDemo, segments);
}