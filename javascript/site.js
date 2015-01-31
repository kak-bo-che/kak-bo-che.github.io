loadPosts = function(title){
// $.get( "/posts.json", function( data ) {
//   alert( "Load was performed." );
// });
 $.get( "/posts.json", function( data ) {
    thousandHours(data, title)});
}

thousandHours = function(posts, title){
  var i=0;
  var j=0;
  var delay = 100;
  var total_minutes = 0, total_hours=0;
  var draw = SVG('hours-spent').size(400, 50)
  $.each(posts, function(index, post){total_minutes += parseInt(post.minutes)})
  total_hours = total_minutes/60;
    for(i=0; i < 1000; i++){
      var rect = draw.rect(4, 4).move(i%100*5, Math.floor(i/100)*5).attr({ fill:'#ccc'});
      if(i < total_hours){
        rect.animate(delay, '<', i*delay).attr({ fill: '#f03' });
      }
  }
  draw.text(title).move(5, 10).addClass('site-title');

}
