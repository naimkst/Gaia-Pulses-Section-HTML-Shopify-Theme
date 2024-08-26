(function ($) {

  "use strict";


 /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
    if ($(".testimonial-slider").length) {
      $(".testimonial-slider").owlCarousel({
          autoplay: true,
          smartSpeed: 300,
          margin: 30,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          items:2,
          responsive: {
              0 : {
                  items: 1,
              },

              767 : {
                  items: 2
              },
              1200 : {
                  items: 3
              },
              1400 : {
                  items: 3,
              },
              1500 : {
                  items: 3
              },

          }
      });
  }
 /*------------------------------------------
      story-active
    -------------------------------------------*/
    if ($(".story-active").length) {
      $(".story-active").owlCarousel({
          autoplay: true,
          smartSpeed: 300,
          margin: 30,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          items:1,
      });
  }

})(window.jQuery);


// faq

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.parentElement;
    const content = accordionItem.querySelector('.accordion-content');
    if (accordionItem.classList.contains('active')) {
      accordionItem.classList.remove('active');
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
        activeItem.classList.remove('active');
        activeItem.querySelector('.accordion-content').style.maxHeight = null;
      });
      accordionItem.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

