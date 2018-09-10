console.log("hello");

function refresh() {
  location.reload();
}

$(document).ready(function(){

  $("#zero .hmiddle.opacity").click(function() {
    $("#zero.glyph.opacity").animate({
      opacity: 0.1,
    }, 1000, function() {
    });
  });

  $(".oh").hover(function() {
    $(".oh .hmiddle").animate({
      width: '21%',
    }, 500, function() {
    });
    $(".oh .hmiddle").animate({
      width: '0%',
    }, 1000, function() {
    });
  });

  $(".vemph").one("click", function() {
    $(".vemph .htop, .vemph .hbottom").height(1).css({
    });
    $(".vemph .vleft, .vemph .vright").width(26).css({
    });
    $("#zero.glyph.vemph .hmiddle").css({
      'transform': 'rotate(90deg)'
    });
  });

  $(".glyph.invert").click(function() {
    $(this).animate({
      backgroundColor: "#000000",
    }, 1000, function() {
    });
    $("#zero.glyph.invert .hmiddle").animate({
      backgroundColor: "#ffffff",
    }, 1000, function() {
    });
  });

  $(".no_v").click(function() {
    $(".glyph.no_v .vleft, .glyph.no_v .vright").animate({
      opacity: 0,
    }, 1000, function() {
    });
  });

  $(".no_v_all").click(function() {
    $(".vleft, .vmiddle, .vright").animate({
      opacity: 0,
    }, 1000, function() {
    });
    $(".glyph").css({
      marginLeft: "-0.19rem",
      marginRight: "-0.19rem"
    });
  });

  $(".magnet").on("click", function() {
    $(".glyph.magnet .htop, .glyph.magnet .hmiddle,  .glyph.magnet .hbottom, .glyph.magnet .vright, .glyph.magnet .vleft").animate({
      backgroundColor: "red",
    }, 250, function() {
    });
    $("#s.glyph").css({
      marginLeft: "-0.19rem",
      marginRight: "-0.19rem"
    });
  });

  $(".widen").click(function() {
    $( this ).animate({
      width: '80rem',
    }, 5000, function() {
    });
    $( this ).animate({
      width: '14rem',
    }, 2500, function() {
    });
  });

  $(".shrink").click(function() {
    $( this ).animate({
      width: '1rem',
    }, 1000, function() {
    });
    $( this ).animate({
      width: '14rem',
    }, 1000, function() {
    });
  });

  $(".tall").click(function() {
    $( this ).animate({
      height: '30rem',
    }, 2000, function() {
    });
    $( this ).animate({
      height: '7rem',
    }, 2000, function() {
    });
  });

  $(".short").click(function() {
    $( this ).animate({
      height: '4rem',
    }, 1000, function() {
    });
    $(".short .hmiddle" ).animate({
      opacity: 0,
    }, 1200, function() {
    });
    $( this ).animate({
      height: '7rem',
    }, 1000, function() {
    });
    $(".short .hmiddle" ).animate({
      opacity: 1,
    }, 1200, function() {
    });
  });

  $(".dance").hover(function() {
    $(".dance .hmiddle" ).animate({
      backgroundColor: 'purple',
    }, 1000, function() {
    });
  });

  $(".dance").click(function() {
    $(".dance .hmiddle" ).animate({
      backgroundColor: 'purple',
    }, 1000, function() {
    });
    $(".widen" ).animate({
      width: '80rem',
    }, 4000, function() {
    });
    $(".widen" ).animate({
      width: '16rem',
    }, 2000, function() {
    });
    $(".shrink" ).animate({
      width: '1rem',
    }, 1000, function() {
    });
    $(".shrink" ).animate({
      width: '14rem',
    }, 1000, function() {
    });
    $(".tall" ).animate({
      height: '30rem',
    }, 2000, function() {
    });
    $(".tall" ).animate({
      height: '7rem',
    }, 2000, function() {
    });
    $(".short" ).animate({
      height: '4rem',
    }, 1000, function() {
    });
    $(".short .hmiddle" ).animate({
      opacity: 0,
    }, 1200, function() {
    });
    $(".short" ).animate({
      height: '7rem',
    }, 1000, function() {
    });
    $(".short .hmiddle" ).animate({
      opacity: 1,
    }, 1200, function() {
    });
  });

  $(".shortenleft").click(function() {
    $(".htop").animate({
      width: '60%',
    }, 1000, function() {
    });
  });

  $(".shortenright").click(function() {
    $(".hbottom").animate({
      right: '0',
      width: '60%',
    }, 1000, function() {
    });
    $(".no_v_all").animate({
      opacity: 0.25,
    }, 500, function() {
    });
  });

  $(".r_gb").click(function() {
    $("#r.glyph .htop, #r.glyph .hmiddle, #r.glyph .hbottom, #r.glyph .vleft, #r.glyph .vright").animate({
      backgroundColor: 'blue',
    }, 1000, function() {
    });
  });

  $(".rg_b").click(function() {
    $("#r.glyph .htop, #r.glyph .hmiddle, #r.glyph .hbottom, #r.glyph .vleft, #r.glyph .vright").animate({
      backgroundColor: 'lime',
    }, 1000, function() {
    });
    $("#g.glyph .htop, #g.glyph .hmiddle, #g.glyph .hbottom, #g.glyph .vleft, #g.glyph .vright").animate({
      backgroundColor: 'blue',
    }, 1000, function() {
    });
  });

  $(".rgb_").click(function() {
    $("#r.glyph .htop, #r.glyph .hmiddle, #r.glyph .hbottom, #r.glyph .vleft, #r.glyph .vright").animate({
      backgroundColor: 'red',
    }, 1000, function() {
    });
    $("#g.glyph .htop, #g.glyph .hmiddle, #g.glyph .hbottom, #g.glyph .vleft, #g.glyph .vright").animate({
      backgroundColor: 'lime',
    }, 1000, function() {
    });
    $("#b.glyph .htop, #b.glyph .hmiddle, #b.glyph .hbottom, #b.glyph .vleft, #b.glyph .vright").animate({
      backgroundColor: 'blue',
    }, 1000, function() {
    });
  });

  $(".tall_all").mousedown(function() {
    $(".glyph" ).animate({
      height: '30rem',
    }, 1000, function() {
    });
  });

  $(".tall_all").mouseleave(function() {
    $(".glyph" ).animate({
      height: '7rem',
    }, 2000, function() {
    });
  });

  $(".wide_wrap").click(function() {
    $(".wrapper" ).css({
      width: '4000px',
      'overflow': 'auto',
      'white-space': 'normal'
    });
  });

  $(".wide_wrap").hover(function() {
    $( this ).animate({
      width: '20rem',
    }, 1000, function() {
    });
    $("p").css({
      'visibility': 'visible',
    });
  });

  var glyphHeight = parseInt($('.glyph').css('width')),
    stopHeight=glyphHeight / 2;

  $(window).scroll(function(e) {
    var windowLeftScroll = $(window).scrollLeft(),
        newHeight = glyphHeight + windowLeftScroll/20;
    if(newHeight>=stopHeight){
        $('.glyph').css("width", newHeight);
    }
    else{
        $('.glyph').css("width", stopHeight);
    }
  });

  $(".perm_shrink").click(function() {
    $( this ).animate({
      width: '5rem',
    }, 1000, function() {
    });
  });

  $(".perm_wide").click(function() {
    $( this ).animate({
      width: '20rem',
    }, 1000, function() {
    });
  });

  $(".norm_invert").click(function() {
    $( this ).animate({
      backgroundColor: 'black',
    }, 1000, function() {
    });
    $(".norm_invert .htop, .norm_invert .hmiddle, .norm_invert .hbottom, .norm_invert .vleft, .norm_invert .vright, .norm_invert .vmiddle" ).animate({
      backgroundColor: 'white',
    }, 1000, function() {
    });
  });

  $(".jag").click(function() {
    $(".jag .htop, .jag .hbottom").animate({
      width: '40%',
    }, 1000, function() {
    });
  });

  $(".colorswitch").click(function() {
    $(".colorswitch .htop, .colorswitch .hmiddle, .colorswitch .hbottom, .colorswitch .vleft, .colorswitch .vmiddle, .colorswitch .vright" ).animate({
      backgroundColor: 'blue',
    }, 1000, function() {
    });
  });

  $(".invert_all").click(function() {
    $(".glyph, body").animate({
      backgroundColor: 'black',
    }, 1000, function() {
    });
    $(".htop, .hmiddle, .hbottom, .vleft, .vright, .vmiddle" ).animate({
      backgroundColor: 'white',
    }, 1000, function() {
    });
  });

  $(".gradient").click(function() {
    $(".gradient .htop").animate({
      backgroundColor: 'blue',
      opacity: 0.25,
    }, 500, function() {
    });
    $(".gradient .hmiddle").animate({
      backgroundColor: 'blue',
      opacity: 0.5,
    }, 1000, function() {
    });
    $(".gradient .hbottom").animate({
      backgroundColor: 'blue',
    }, 1500, function() {
    });
  });
});
