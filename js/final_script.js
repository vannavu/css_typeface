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

  $(".button").click(function() {
    if($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 1s',
      })
    }
    else {
      $(this).off("mousenter mouseleave");
      $(this).addClass('clicked');
      $(this).css({
        'transform': 'scale(1.25)',
        'transition': 'transform 1s',
      });
    }
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

  $("#hamburger").click(function() {
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
  });

  $("#cake").click(function() {
    $(".word .htop, .word .hmiddle, .word .hbottom").css({
      'border-radius': '0',
      'transition': 'border-radius 2s'
    });
  });

  $("#sausage").click(function() {
    $(".word .htop, .word .hmiddle, .word .hbottom").css({
      'border-radius': '4rem',
      'transition': 'border-radius 1.5s'
    });
  });

  $("#link").click(function() {
    $(".word .glyph").css({
      margin: '0 -0.5px',
      'transition': 'margin 0.5s, width 0.5s',
    });
  });

  $("#magnet").click(function() {
    $(".word").css({
        margin: '0',
        'transition': 'margin 0.65s ease-in',
    });
    $(this).css({
      "--stroke_color": 'silver',
    });
  });

  $("#i.button").click(function() {
    $(".word .glyph").animate({
      backgroundColor: 'black',
    }, 500, function() {
    });
    $(".word .htop, .word .hmiddle, .word .hbottom, .word .vleft, .word .vright, .word .vmiddle" ).animate({
      backgroundColor: 'white',
    }, 2750, function() {
    });
  });

  $("#b.button").click(function() {
    $(".wrapper, section, body").animate({
      backgroundColor: 'black',
    }, 1000, function() {
    });
    $(".word").find(".htop, .hmiddle, .hbottom, .vleft, .vmiddle, .vright").animate({
      backgroundColor: 'white',
    }, 1000, function() {
    });
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
