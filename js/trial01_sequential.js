/* legibility */
$(document).ready(function(){

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
