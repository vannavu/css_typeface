console.log("hello");

$(document).ready(function(){

  $("#zero .hmiddle.opacity").click(function() {
    $("#zero.glyph.opacity").animate({
      opacity: 0.1,
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

});
