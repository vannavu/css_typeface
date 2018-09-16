/* rational */
$(document).ready(function(){

  $(".word .glyph").mouseover(function() {
    $(this).css({
      'transform': 'scale(.9)',
      'transition': 'transform 0.6s'
    });
  });

  $(".word .glyph").mouseleave(function() {
    $(this).css({
      'transform': 'scale(1)',
      'transition': 'transform 1s'
    });
  });

  var direction = -1;
  $(".word .glyph").click(function() {
    var random_width = Math.floor($(".wrapper").width() * Math.random() * 0.5) + 0.1;
    var random_shift = random_width * direction;
    $(this).animate({
      width: random_width,
    }, 1000, function(){
    });
    $(this).parent().delay(900).animate({
      left: random_shift,
    }, 1500, function() {
    });
    if (direction == -1) {
      direction = 1;
    }
    else {
      direction = -1;
    }
  });

});
