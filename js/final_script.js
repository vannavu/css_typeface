$(document).ready(function(){

  $(".button").hover(function() {
      $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.6s, margin 0.6s ease-in'
      });
    }, function() {
        $(this).css({
          'transform': 'scale(1)',
          'transition': 'transform 1s, margin 1s ease-in'
        });
    });

  $(".button").click(function() {
    $(this).unbind("mousenter mouseleave");
    if($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
    }
    else {
      $(this).addClass('clicked');
    }
  });

  $(".hamburger").click(function() {
    $(".htop").css({
      'border-top-left-radius': '4rem',
      'border-top-right-radius': '4rem',
      'border-bottom-left-radius': '0',
      'border-bottom-right-radius': '0',
      'transition': 'border-radius 6s'
    });
    $(".hmiddle").css({
      'border-radius': '0',
      'transition': 'border-radius 3s'
    });
    $(".hbottom").css({
      'border-top-left-radius': '0',
      'border-top-right-radius': '0',
      'border-bottom-left-radius': '4rem',
      'border-bottom-right-radius': '4rem',
      'transition': 'border-radius 2s'
    });
  });

  $(".cake").click(function() {
    $(".htop, .hmiddle, .hbottom").css({
      'border-radius': '0',
      'transition': 'border-radius 2s'
    });
  });

  $(".sausage").click(function() {
    $(".htop, .hmiddle, .hbottom").css({
      'border-radius': '4rem',
      'transition': 'border-radius 1.5s'
    });
  });

  $(".link").click(function() {
    $(".glyph").css({
      margin: '0 -0.5px',
      'transition': 'margin 0.5s, width 0.5s',
    });
  });

  $(".magnet").click(function() {
    $(".word").css({
        margin: '0.5% 0',
        'transition': 'margin 0.65s ease-in',
    });
    $(this).css({
      "--stroke_color": 'silver',
    });
  });

  $(".counter").click(function() {
    $(".glyph").animate({
      backgroundColor: 'black',
    }, 500, function() {
    });
    $(".htop, .hmiddle, .hbottom, .vleft, .vright, .vmiddle" ).animate({
      backgroundColor: 'white',
    }, 2750, function() {
    });
  });

});
