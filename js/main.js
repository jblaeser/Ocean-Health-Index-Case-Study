$('.top-nav-list li').on('mouseover', function(){
    $('.header-container').addClass('header-hover');
  }).on('mouseout', function(){
    $('.header-container').removeClass('header-hover');
  })



var header = $('.header');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   header.css({ 'opacity' : (1 - st/150) });
});





var offset = $(".jellyfish").offset();
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $(".jellyfish").css("left", -st * 1.5 + offset.left);
  $(".jellyfish").css("top", st * .5 + offset.top);
});