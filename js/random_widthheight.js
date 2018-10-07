/* rational */
$(document).ready(function(){

  var background = Math.random() * 5;
  if (0 < background && background <=1) {
    $(".blur").css({
      'background-image': 'url("backgrounds/facebook.jpeg")'
    });
  }
  else if (1 < background && background <= 2) {
    $(".blur").css({
      'background-image': 'url("backgrounds/pinterest.jpeg")'
    });
  }
  else if (2 < background && background <= 3) {
    $(".blur").css({
      'background-image': 'url("backgrounds/youtube.jpeg")'
    });
  }
  else if (3 < background && background <= 4) {
    $(".blur").css({
      'background-image': 'url("backgrounds/twitter.jpeg")'
    });
  }
  else {
    $(".blur").css({
      'background-image': 'url("backgrounds/instagram.jpeg")'
    });
  }

  var characters_shown = false;
  $("section#character_set").click(function() {
    if (characters_shown == false) {
      characters_shown = true;
      $(this).css({
        'left': 'calc(-100% + 3rem)',
        'transition': 'left 3s',
      });
    }
    else {
      characters_shown = false;
      $(this).css({
        'left': '0%',
        'transition': 'left 3s',
      });
    }
  });

  var direction = 0;
  var click_count = 0;
  var blur_constant = 0;
  var opacity_constant = 0;
  var newHeight;
  $("#text .word .glyph").click(function() {
    click_count = click_count + 1;
    blur_constant = 18 - click_count;
    if (direction == 0) {
      var random_width = Math.floor($(".wrapper").width() * Math.random() * 0.5) + 20;
      direction = 1;
      $(this).animate({
        width: random_width,
      }, random_width * 6, function(){
      });
      $(".blur").css({
        "--blur_amount": blur_constant + 'px',
      });
    }
    else {
      newHeight = $(document).height();
      $(".blur").css({
        "height": newHeight,
        "transition": "height 1s",
        "--blur_amount": blur_constant + 'px',
      });
      var random_height = Math.floor($(".wrapper").height() * Math.random() * 0.3) + 40;
      direction = 0;
      $(this).animate({
        height: random_height,
      }, random_height * 6, function(){
      });
      $(this).find(".htop, .hbottom").animate({
        height: random_height * 0.285,
      }, random_height * 6, function(){
      });
      if ($(this).is("#s") || $(this).is("#z")) {
        $(this).find(".hmiddle").css({
          height: '1px',
          'top': '50%',
          'transition': 'top 0.5s'
        });
      }
      else {
        $(this).find(".hmiddle").animate({
          height: '28.5%',
          top: '35.75%',
        }, random_height * 6, function(){
        });
      }
      if ($(this).is("#g")) {
        $(this).find(".vright.bottom").animate({
          height: '57%',
        }, random_height * 6, function(){
        });
      }
      else if ($(this).is("#l")) {
        $(this).find(".vright.bottom").animate({
          height: random_height * 0.57,
        }, random_height * 6, function(){
        });
      }
      else if ($(this).is("#q")) {
        $(this).find(".vleft.bottom").animate({
          height: '57%',
        }, random_height * 6, function(){
        });
      }
      else if ($(this).is("#s")) {
        $(this).find(".vleft.top, .vright.bottom").animate({
          height: '50%',
        }, random_height * 6, function(){
        });
        $(this).find(".vleft.bottom, .vright.top").animate({
          height: '42.5%',
        }, random_height * 6, function(){
        });
      }
      else if ($(this).is("#z")) {
        $(this).find(".vleft.bottom, .vright.top").animate({
          height: '50%',
        }, random_height * 6, function(){
        });
        $(this).find(".vleft.top, .vright.bottom").animate({
          height: '42.5%',
        }, random_height * 6, function(){
        });
      }
      else {
        $(this).find(".top, .bottom").animate({
          height: '42.5%',
        }, random_height * 6, function(){
        });
      }
    }

  });

});
