$('.top-nav-list li').on('mouseover', function(){
    $('.header-container').addClass('header-hover');
  }).on('mouseout', function(){
    $('.header-container').removeClass('header-hover');
  })