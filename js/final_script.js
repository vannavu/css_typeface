$(document).ready(function(){

  $(".button").hover(function() {
    $(this).css({
      'transform': 'scale(1.25)',
      'transition': 'transform 0.6s'
    });
    }, function() {
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 1s'
      });
  });

  $(".transformation_icons").hover(function() {
      $("#sausage, #hamburger, #magnet, #link, #i.button, #b.button, #w.button").css({
        'opacity': '1',
        'transition': 'opacity 1s'
      });
    }, function() {
        $("#sausage, #hamburger, #magnet, #link, #i.button, #b.button, #w.button").css({
          'opacity': '0',
          'transition': 'opacity 1s'
        });
    });

  var hamburger_on = false;
  $("#hamburger").click(function() {
    if (hamburger_on == false) {
      hamburger_on = true;
      $(this).css({
        '--stroke_color': 'var(--button_on)',
      });
      $(".word .htop").css({
        'border-top-left-radius': '4rem',
        'border-top-right-radius': '4rem',
        'border-bottom-left-radius': '0',
        'border-bottom-right-radius': '0',
        'transition': 'border-radius 6s'
      });
      $(".word .hmiddle").css({
        'border-radius': '0',
        'transition': 'border-radius 3s'
      });
      $(".word .hbottom").css({
        'border-top-left-radius': '0',
        'border-top-right-radius': '0',
        'border-bottom-left-radius': '4rem',
        'border-bottom-right-radius': '4rem',
        'transition': 'border-radius 2s'
      });
    }
    else {
      hamburger_on = false;
      $(this).css({
        '--stroke_color': 'var(--button_off)',
      });
      if (sausage_on == true) {
        $(".word .htop, .word .hmiddle, .word .hbottom").css({
          'border-radius': '4rem',
          'transition': 'border-radius 1.5s'
        });
      }
      else {
        $(".word .htop, .word .hmiddle, .word .hbottom").css({
          'border-radius': '0',
          'transition': 'border-radius 1.5s'
        });
      }
    }
  });

  var cake_on = false;
  $("#cake").click(function() {
    if (cake_on == false) {
      cake_on = true;
      $(this).css({
        '--stroke_color': 'var(--button_on)',
      });
      $(".word .htop, .word .hmiddle, .word .hbottom").css({
        'border-radius': '0',
        'transition': 'border-radius 2s'
      });
    }
    else {
      cake_on = false;
      $(this).css({
        '--stroke_color': 'var(--button_off)',
      });
      $(".word .htop, .word .hmiddle, .word .hbottom").css({
        'border-radius': '0',
        'transition': 'border-radius 2s'
      });
    }
  });

  var sausage_on = false;
  $("#sausage").click(function() {
    if (sausage_on == false) {
      sausage_on = true;
      $(this).css({
        '--stroke_color': 'var(--button_on)',
      });
      $(".word .htop, .word .hmiddle, .word .hbottom").css({
        'border-radius': '4rem',
        'transition': 'border-top-left-radius 1s, border-bottom-left-radius 1s, border-top-right-radius 0.25s 0.5s, border-bottom-right-radius 0.25s 0.5s'
      });
    }
    else {
      sausage_on = false;
      $(this).css({
        '--stroke_color': 'var(--button_off)',
      });
      if (hamburger_on == true) {
        $(".word .htop").css({
          'border-top-left-radius': '4rem',
          'border-top-right-radius': '4rem',
          'border-bottom-left-radius': '0',
          'border-bottom-right-radius': '0',
          'transition': 'border-radius 5s'
        });
        $(".word .hmiddle").css({
          'border-radius': '0',
          'transition': 'border-radius 3s'
        });
        $(".word .hbottom").css({
          'border-top-left-radius': '0',
          'border-top-right-radius': '0',
          'border-bottom-left-radius': '4rem',
          'border-bottom-right-radius': '4rem',
          'transition': 'border-radius 2s'
        });
      }
      else {
        $(".word .htop, .word .hmiddle, .word .hbottom").css({
          'border-radius': '0',
          'transition': 'border-radius 1.5s'
        });
      }
    }
  });

  var link_on = false;
  $("#link").click(function() {
    if (link_on == false) {
      link_on = true;
      $(this).css({
        '--stroke_color': 'var(--button_on)',
      });
      $(".word .glyph").css({
        '--side_bearings': '0rem',
        '--glyph_width': 'calc(100% / var(--num_char) - 2 * var(--side_bearings))',
        width: 'var(--glyph_width)',
        margin: '0 -0.25px',
        'transition': 'margin 0.25s ease-in, width 0.25s ease-in',
      });
      $(".wrapper").css({
        width: '95%',
        'transition': 'width 1s'
      });
    }
    else {
      link_on = false;
      $(this).css({
        '--stroke_color': 'var(--button_off)',
      });
      $(".word .glyph").css({
        '--side_bearings': '0.4rem',
        '--glyph_width': 'calc(100% / var(--num_char) - 2 * var(--side_bearings))',
        margin: '0 var(--side_bearings)',
        'transition': 'margin 0.25s ease-in, width 0.25s ease-in',
      });
      $(".wrapper").css({
        width: '75%',
        'transition': 'width 1s'
      });
    }
  });

  var magnet_on = false;
  $("#magnet").click(function() {
    if (magnet_on == false) {
      magnet_on = true;
      $(this).css({
        '--stroke_color': 'var(--button_on)',
      });
      $(".word").css({
        margin: '0',
        'transition': 'margin 0.65s ease-in',
      });
    }
    else {
      magnet_on = false;
      $(this).css({
        '--stroke_color': 'var(--button_off)',
      });
      $(".word").css({
        margin: '3rem 0',
        'transition': 'margin 0.65s ease-in',
      });
    }
  });

  var invert_on = false;
  $("#i.button").click(function() {
    if (invert_on == false) {
      invert_on = true;
      $(this).css({
        'background-color': 'white',
        '--stroke_color': 'var(--button_off)',
        'transition': 'background-color 1s',
        'border': '1px solid white',
      });
      $(".word .glyph").animate({
        backgroundColor: 'black',
      }, 500, function() {
      });
      $(".word .htop, .word .hmiddle, .word .hbottom, .word .vleft, .word .vright, .word .vmiddle" ).animate({
        backgroundColor: 'white',
      }, 2750, function() {
      });
    }
    else {
      invert_on = false;
      $(this).css({
        'background-color': 'var(--button_off)',
        '--stroke_color': 'white',
        'transition': 'background-color 1s',
        'border': '1px solid var(--button_off)',
      });
      $(".word .glyph").animate({
        backgroundColor: 'white',
      }, 500, function() {
      });
      $(".word .htop, .word .hmiddle, .word .hbottom, .word .vleft, .word .vright, .word .vmiddle" ).animate({
        backgroundColor: 'black',
      }, 2750, function() {
      });
    }
  });

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

});
