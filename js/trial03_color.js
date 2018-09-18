/* truth */
$(document).ready(function(){

  var background_color = 'white';
  $("#b.button, #w.button").click(function() {
    if (background_color == 'white') {
      background_color = 'black';
      $(".wrapper, section, body").animate({
        backgroundColor: background_color,
      }, 1000, function() {
      });
      $("#b.button").css({
        'display': 'none',
      });
      $("#w.button").css({
        'display': 'inline-block',
      });
    }
    else {
      background_color = 'white';
      $(".wrapper, section, body").animate({
        backgroundColor: background_color,
      }, 1000, function() {
      });
      $("#b.button").css({
        'display': 'inline-block',
      });
      $("#w.button").css({
        'display': 'none',
      });
    }
  });

  var color_cycle = 0;
  var default_stroke_color = 'black';
  $(".word .glyph").mousemove(function() {
    if (background_color == 'white') {
      default_stroke_color = 'black';
    }
    else {
      default_stroke_color = 'white';
    }
    if (color_cycle == 0) {
      color_cycle = color_cycle + 1,
      $(this).find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
          backgroundColor: 'red',
      }, 1500, function() {
      });
    }
    else if (color_cycle == 1) {
      color_cycle = color_cycle + 1,
      $(this).find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
          backgroundColor: 'lime',
      }, 1500, function() {
      });
    }
    else if (color_cycle == 2) {
      color_cycle = color_cycle + 1,
      $(this).find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
          backgroundColor: 'blue',
      }, 1500, function() {
      });
    }
    else {
      color_cycle = 0,
      $(this).find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
          backgroundColor: default_stroke_color,
      }, 1500, function() {
      });
    }
  });

});
