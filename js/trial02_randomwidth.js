/* rational */
$(document).ready(function(){

  var direction = -1;
  $(".word .glyph").click(function() {
    var random_width = Math.floor($(".wrapper").width() * Math.random() * 0.5) + 0.1;
    var random_shift = random_width * direction;
    $(this).animate({
      width: random_width,
    }, random_width * 6, function(){
    });
    $(this).parent().delay(random_width * 5.75).animate({
      left: random_shift,
    }, random_width * 8, function() {
    });
    if (direction == -1) {
      direction = 1;
    }
    else {
      direction = -1;
    }
  });

});
