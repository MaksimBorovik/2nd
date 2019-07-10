(function ($) {  

  $(document).ready(function() {  
      $('body').niceScroll();
  });

  $('.header-navbar__hamburger').click(function() {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

})(jQuery);