
const currentNumber = document.getElementById("current-number");
const totalNumber = document.getElementById("total-numbers");

$(document).ready(function() {

var owlSlide1 = $("#owlSlide1");
var owlSlide2 = $("#owlSlide2");
var slidesPerPage = 3; 
var syncedSecondary = true;

owlSlide1.owlCarousel({
items: 1,
slideSpeed: 2000,
autoplay: false, 
dots: false,
loop: true,
stagePadding: 0,
responsive:{
  0:{
      items:1,
  }
}
}).on('changed.owl.carousel', syncPosition);

owlSlide2.on('initialized.owl.carousel', function() {
  owlSlide2.find(".owl-item").eq(0).addClass("current");
})
.owlCarousel({
  items: slidesPerPage,
  nav: true,
  smartSpeed: 200,
  slideSpeed: 500,
  slideBy: slidesPerPage, 
  responsiveRefreshRate: 100
}).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {
const count = el.item.count - 1;
let current = Math.round(el.item.index - (el.item.count / 2) - .5);

if (current < 0) {
  current = count;
}
if (current > count) {
  current = 0;
}

currentNumber.innerText = current >= 10 ? current + 1 : "0" + (current + 1).toString(); ;
totalNumber.innerText = el.item.count >= 10 ? `/${el.item.count}` : `/0${el.item.count}`;

owlSlide2
  .find(".owl-item")
  .removeClass("current")
  .eq(current)
  .addClass("current");
const onscreen = owlSlide2.find('.owl-item.active').length - 1;
const start = owlSlide2.find('.owl-item.active').first().index();
const end = owlSlide2.find('.owl-item.active').last().index();

if (current > end) {
  owlSlide2.data('owl.carousel').to(current, 100, true);
}
if (current < start) {
  owlSlide2.data('owl.carousel').to(current - onscreen, 100, true);
}
}

function syncPosition2(el) {
if (syncedSecondary) {
  const number = el.item.index;
  owlSlide1.data('owl.carousel').to(number, 100, true);
}
}

owlSlide2.on("click", ".owl-item", function(e) {
e.preventDefault();
const number = $(this).index();
owlSlide1.data('owl.carousel').to(number, 300, true);
});

$('#owl-products').owlCarousel({
    loop:true,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots: true,
        },
        600:{
            items:2,
            dots: true
        },
        1000:{
            items:3,
            dots: true
        }
    }
})

});
