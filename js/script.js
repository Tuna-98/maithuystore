$(document).ready(function () {
  $('.menu .menu-item-has-child .toggle').click(function () {
    $(this).toggleClass('show');

    if ($(this).hasClass('show')) {
      $(this).next('.sub-menu').slideDown(300);
    } else {
      $(this).next('.sub-menu').slideUp(300);
    }
  });
  if ($(window).width() < 1024) {
    $('.menu-bars').click(function () {
      $('.mobile-sidebar').toggleClass('mobile-sidebar-toggle');
      $('.menu-bars-close').toggleClass('menu-bars-close--toggle');
    });

    $('.menu-bars-close,.mobile-sidebar-close').click(function () {
      $('.mobile-sidebar').removeClass('mobile-sidebar-toggle');
      $('.menu-bars-close').removeClass('menu-bars-close--toggle');
    });
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 80) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.header').removeClass('stuck');
      }
    });
  }
  if ($(window).width() > 1024) {
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 170) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.header').removeClass('stuck');
      }
    });
  }
  $('.box-product .box-product__image').hover(
    function () {
      $(this).next('.box-product-tooltip').addClass('toggle');
    },
    function () {
      $(this).next('.box-product-tooltip').removeClass('toggle');
    }
  );
  $('.box-product-tooltip').hover(
    function () {
      $(this).addClass('toggle');
    },
    function () {
      $(this).removeClass('toggle');
    }
  );
});
function openInfoDetail(e) {
  var i;
  var x = document.getElementsByClassName("info-detail-content__item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(e).style.display = "block";  
}

// Data Picker Initialization
$('.datepicker').datepicker({
  inline: true
});

var datepickers = [].slice.call(document.querySelectorAll('[data-datepicker]'))
var datepickersList = datepickers.map(function (el) {
    return new Datepicker(el, {
        buttonClass: 'btn'
    });
});

function showSideBar(){
  document.getElementById('sidebar').classList.add('show-sidebar');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('show-sidebar');
}