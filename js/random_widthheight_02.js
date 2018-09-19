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
      $(this).parent().delay(random_width * 7.75).animate({
        left: random_shift,
      }, random_width * 10, function() {
      });
    }
    else {
      var random_shift = random_height * shift;
      direction = 0;
      $(this).css({
        '--glyph_height': '13rem',
        'top': 'calc(var(--glyph_height) / 4 + var(--hstroke) / 2)',
        'transition': 'height 1s, top 1s'
      });
      $(this).parent().css({
        height: 'calc(var(--glyph_height) * 0.5 + var(--hstroke) / 2)'
      });
      $(this).find(".hmiddle").css('transition', 'top 1s');
      $(this).find(".vleft, .vmiddle, .vright").css('transition', 'height 1s');
    }
    if (shift == -1) {
      shift = 1;
    }
    else {
      shift = -1;
    }
  });

});
