/* rational */
$(document).ready(function(){

  var shift = -1;
  var direction = 0;
  $(".word .glyph").click(function() {
    var random_width = Math.floor($(".wrapper").width() * Math.random() * 0.5) + 20;
    var random_height = Math.floor($(".wrapper").height() * Math.random() * 0.3) + 62;
    if (direction == 0) {
      var random_shift = random_width * shift;
      direction = 1;
      $(this).animate({
        width: random_width,
      }, random_width * 8, function(){
      });
      $(this).parent().delay(random_width * 2).animate({
        left: random_shift,
      }, random_width * 10, function() {
      });
    }
    else {
      var random_shift = random_height * shift;
      direction = 0;
      $(this).animate({
        height: random_height,
      }, random_height * 6, function(){
      });
      $(this).css({
        '--glyph_height': random_height,
      });
      $(this).find(".htop, .hbottom").delay(random_height * 1.5).animate({
        height: random_height * 0.285,
      }, random_height * 6, function(){
      });
      if ($(this).is("#s") || $(this).is("#z")) {
        $(this).find(".hmiddle").css({
          height: '1px',
          'top': random_height / 2,
          'transition': 'top 0.5s'
        });
      }
      else {
        $(this).find(".hmiddle").delay(random_height * 1.5).animate({
          height: random_height * 0.285,
          top: random_height / 2 - (random_height * 0.285 / 2),
        }, random_height * 3, function(){
        });
      }
      $(this).find(".vleft, .vmiddle, .vright").css('transition', 'height 3s');
      $(".wrapper").animate({
        'margin-top': '3rem',
      }, 1000, function(){
      });
      $(".word").animate({
        margin: '0.8rem 0',
      }, random_width * 10, function() {
      });
    }
    if (shift == -1) {
      shift = 1;
    }
    else {
      shift = -1;
    }
  });

});
