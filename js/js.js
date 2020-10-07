AOS.init();

$('.pink41').mouseover(function(){
    $(this).on().animate({background:'#e9cccf'}, 500); },
function(){
    $(this).stop().animate({background:'#000'}, 2500);
});
