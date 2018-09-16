/* rational */
$(document).ready(function(){

  $(".word .glyph").click(function() {
    var random_width = $(".wrapper").width() * Math.random() * 0.5;
    $(this).css({
      width: random_width,
      'min-width': '1rem',
      'transition': 'width 1s'
    });
  });

});
