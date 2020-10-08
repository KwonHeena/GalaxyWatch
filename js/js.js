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
});
