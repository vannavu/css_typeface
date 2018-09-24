/* rational */
$(document).ready(function(){

  var characters_shown = false;
  $("section#character_set").click(function() {
    if (characters_shown == false) {
      characters_shown = true;
      $(this).css({
        'left': 'calc(-100% + 3rem)',
        'transition': 'left 2s',
      });
    }
    else {
      characters_shown = false;
      $(this).css({
        'left': '0%',
        'transition': 'left 2s',
      });
    }
  });

  var direction = 0;
  $("#text .word .glyph").click(function() {
    var random_width = Math.floor($(".wrapper").width() * Math.random() * 0.5) + 20;
    var random_height = Math.floor($(".wrapper").height() * Math.random() * 0.3) + 62;
    if (direction == 0) {
      direction = 1;
      $(this).animate({
        width: random_width,
      }, random_width * 8, function(){
      });
    }
    else {
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
    }
  });

});
