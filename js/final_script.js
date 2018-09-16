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
      $(this).off("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_on)',
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
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
      $(this).on("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_off)',
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
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

  $("#cake").click(function() {
    $(".word .htop, .word .hmiddle, .word .hbottom").css({
      'border-radius': '0',
      'transition': 'border-radius 2s'
    });
  });

  var sausage_on = false;
  $("#sausage").click(function() {
    if (sausage_on == false) {
      $(this).off("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_on)',
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
      });
      sausage_on = true;
      $(".word .htop, .word .hmiddle, .word .hbottom").css({
        'border-radius': '4rem',
        'transition': 'border-radius 1.5s'
      });
    }
    else {
      sausage_on = false;
      $(this).on("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_off)',
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
      });
      if (hamburger_on == true) {
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
      $(this).off("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_on)',
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
      });
      $(".word .glyph").css({
        '--side_bearings': '0rem',
        '--glyph_width': 'calc(100% / var(--num_char) - 2 * var(--side_bearings))',
        margin: '0 -0.5px',
        'transition': 'margin 0.25s ease-in, width 0.25s ease-in',
      });
      $(".wrapper").css({
        width: '95%',
        'transition': 'width 1s'
      });
    }
    else {
      link_on = false;
      $(this).on("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_off)',
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
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
      $(this).off("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_on)',
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
      });
      $(".word").css({
        margin: '0',
        'transition': 'margin 0.65s ease-in',
      });
    }
    else {
      magnet_on = false;
      $(this).on("mouseover mouseleave");
      $(this).css({
        '--stroke_color': 'var(--button_off)',
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
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
      $(this).off("mouseover mouseleave");
      $(this).css({
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
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
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
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
      $(this).off("mouseover mouseleave");
      $(this).css({
        'transform': 'scale(1.25)',
        'transition': 'transform 0.5s'
      });
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
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 0.5s'
      });
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

  $(".horizontal #z .dot").click(function() {
    $(".horizontal .glyph").css({
      '--side_bearings': '0rem',
      '--num_char': '10.455',
      '--glyph_width': 'calc(100% / var(--num_char) - 2 * var(--side_bearings))',
      margin: '0 calc(var(--vstroke) / -2)',
      'transition': 'margin 0.5s, width 0.5s',
    });
    $(this).css({
      backgroundColor: 'black',
    });
    $(".emphasis #e .hmiddle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #e").click(function() {
    $(".emphasis #m .hbottom.middle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #m").click(function() {
    $(".emphasis #p .hmiddle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #p").click(function() {
    $(".emphasis #h .hmiddle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #h").click(function() {
    $(".emphasis #a .hmiddle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #a").click(function() {
    $(".emphasis #s .hmiddle").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #s").click(function() {
    $(".emphasis #s").find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
    $(".emphasis #i .vleft").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis .glyph").click(function() {
    $(this).find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
      backgroundColor: 'blue',
    }, 500, function() {
    });
  });

  $(".emphasis #i").click(function() {
    $(".and_serifs_aid #e .htop").animate({
      height: '1px',
    }, 500, function() {
    });
  });

  $(".and_serifs_aid #e").click(function() {
    $(".and_serifs_aid .htop").animate({
      height: '1px',
    }, 500, function() {
    });
    $(".and_serifs_aid #r .hbottom").animate({
      height: '1px',
    }, 2000, function() {
    });
  });

  $(".and_serifs_aid #r").click(function() {
    $(".and_serifs_aid .hbottom").animate({
      height: '1px',
    }, 500, function() {
    });
  });

  $(".and_serifs_aid #r").click(function() {
    $(".and_serifs_aid .hbottom").animate({
      height: '1px',
    }, 500, function() {
    });
    $(".and_serifs_aid .hmiddle").animate({
      backgroundColor: 'lime',
    }, 500, function() {
    });
  });

  $(".and_serifs_aid .hmiddle").click(function() {
    $(".and_serifs_aid .hmiddle").css({
      height: '1px',
      'top': '50%',
      'transition': 'height 1s, top 1s',
    });
    $(".and_serifs_aid").find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
      backgroundColor: 'lime',
    }, 500, function() {
    });
    $(".and_serifs_aid").find("#s .vleft, #s .vright, #r .vright").animate({
      height: '50%',
    }, 500, function() {
    });
  });

});
