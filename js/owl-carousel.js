$(document).ready(function () {
  $('.slider-image.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
  $('.new-product__list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1.5,
        nav: false,
        margin: 10,
        stagePadding: 10,
      },
      768: {
        items: 3,
        nav: true,
      },
      992: {
        items: 4,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
  $('.procedure__list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
        autoplay: true,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
        dots: false,
        autoplay: false,
      },
      1200: {
        items: 4,
        dots: false,
        autoplay: false,
      },
    },
  });
  $('.brand__list.owl-carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        margin: 15,
      },
      768: {
        items: 4,
        margin: 15,
        nav: false,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  $('.news__list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $('.intro__list.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
  $('.feedback__list.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
});
