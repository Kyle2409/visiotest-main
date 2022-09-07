
var $ = jQuery

$(document).ready(function () {
    $('body').on('click', '.menu' ,function () {
        $('.nav-page1').toggleClass('open');
    });

    $('body .nav-page1').on('click', '.nav', function () {
      $('.nav-page1').removeClass('open');
    });
});

window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('.menu').onclick=()=>{              $('.menu').classList.toggle('rotate')
  $('.nav-page1').classList.toggle('transform')
  $('.menu-line1').classList.toggle('rotate1')
   $('.menu-line2').classList.toggle('rotate2')
   $('.menu-line3').classList.toggle('rotate3')
}
}


