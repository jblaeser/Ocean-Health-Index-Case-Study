$('.top-nav-list li').on('mouseover', function(){
  $('.header-container').addClass('header-hover');
}).on('mouseout', function(){
  $('.header-container').removeClass('header-hover');
})



var header = $('.header');
$(window).on('scroll', function() {
 var st = $(this).scrollTop();
 header.css({ 'opacity' : (1 - st/200) });
});





var offset = $(".jellyfish").offset();
$(window).scroll(function(event) {
var st = $(this).scrollTop();
$(".jellyfish").css("left", -st * 1.5 + offset.left);
$(".jellyfish").css("top", st * .5 + offset.top);
});


var searchTop = document.querySelector('.search-top');
searchTop.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('html')
    .classList
    .toggle('search-open')
});

var searchBottom = document.querySelector('.search-bottom');
searchBottom.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('html')
    .classList
    .toggle('search-open')
});

var searchExit = document.querySelector('.exit-symbol');
searchExit.addEventListener('click', function() {console.log('Close Sesame');
document.querySelector('html')
    .classList
    .toggle('search-open')
});

var overlayExit = document.querySelector('.overlay');
overlayExit.addEventListener('click', function() {console.log('Close Sesame');
document.querySelector('html')
    .classList
    .toggle('search-open')
});