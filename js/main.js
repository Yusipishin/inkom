// CAROUSEL
var current=1;
var kolvo=5; //количество картинок

// массив картинок
tumb= new Array();
tumb[0]=new Image();   // картинка 1
tumb[1]=new Image();   // картинка 2
tumb[2]=new Image();   // картинка 3
tumb[3]=new Image();   // картинка 4
tumb[4]=new Image();   // картинка 5

//сами картинки, не ошибитесь с путем...
tumb[0].src="img/catalog/cat1.jpg"
tumb[1].src="img/catalog/cat2.jpg"
tumb[2].src="img/catalog/cat3.jpg"
tumb[3].src="img/catalog/cat4.jpg"
tumb[4].src="img/catalog/cat5.jpg"

function frw(){
if (current < kolvo) {
current++;
document.images['Жильё'].src=tumb[current-1].src;
}
}
function bck(){
if (current > 1) {
current--;
document.images['Жильё'].src=tumb[current-1].src;
}
}

$(function () {
  $('.menu-open').click(function () {
    $('.header__nav-list').toggleClass('show-menu')
  })
});
