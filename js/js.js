AOS.init();

/**마우스 부드럽게 해당위치로 이동**/
$(function(){
    $(".menu01").click(function(){
    var offset = $("#section01").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
    });
    $(".menu02").click(function(){
        var offset = $("#section02").offset();
        $("html,body").animate({scrollTop : offset.top}, 800);
    });
    $(".menu03").click(function(){
        var offset = $("#section04").offset();
        $("html,body").animate({scrollTop : offset.top}, 800);
    }); 
    $(".more-text").click(function(){
        var offset = $("#section02").offset();
        $("html,body").animate({scrollTop : offset.top}, 800);
    }); 
});

// 탑 이동 키
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
var $element = matchMedia("screen and (min-width: 414px)").matches ? document.getElementById("scrollTopBtn") : document.getElementById("scrollTopBtnMob");
$element.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
}

function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 500);
}