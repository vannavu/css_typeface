$(document).ready(function(){

  $(".hamburger").click(function() {
    $(".htop").css({
      'border-top-left-radius': '4rem',
      'border-top-right-radius': '4rem',
      'border-bottom-left-radius': '0',
      'border-bottom-right-radius': '0',
      'transition': 'border-radius 5s'
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
      'transition': 'border-radius 3s'
    });
  });

  $(".cake").click(function() {
    $(".htop, .hmiddle, .hbottom").css({
      'border-radius': '0',
      'transition': 'border-radius 3s'
    });
  });

  $(".sausage").click(function() {
    $(".htop, .hmiddle, .hbottom").css({
      'border-radius': '4rem',
      'transition': 'border-radius 3s'
    });
  });

  $(".magnet").click(function() {
    $(".glyph").css({
      margin: '-0.2rem',
      marginTop: '0.2rem',
      'transition': 'margin 2s'
    });
  });

  $(".counter").click(function() {
    $(".glyph").animate({
      backgroundColor: 'black',
    }, 1000, function() {
    });
    $(".htop, .hmiddle, .hbottom, .vleft, .vright, .vmiddle" ).animate({
      backgroundColor: 'white',
    }, 1000, function() {
    });
  });

  $(".thin").click(function() {
    $(".hmiddle").css({
      'top': '50%',
    });
    $(".vleft.top, .vleft.bottom, .vright.top, .vright.bottom").css({
      height: '40%',
    });
    $(" .htop, .hmiddle, .hbottom").animate({
      height: '1px',
    }, 1000, function() {
    });
  });

});
