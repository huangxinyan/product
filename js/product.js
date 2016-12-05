/**
 * Created by dell001 on 2016/11/28.
 */
$(function(){
    var doc = document.documentElement || document.body;
    (function(){
        var $swipe = $(".swiperWrapper");
        var $dot = $(".swiperWrapper .dot");
        var $img = $(".swiperWrapper .slides-container");
        var spans = $(".dot span");
        var $index = 0;
        var timeId;
        $img.css("width",spans.length*1903);
        var play = function(){
            $img.css("left",-$index * 1903);
            spans.removeClass("active");
            spans.eq($index).addClass("active");
        };
        $dot.mouseover(function(e){
            var $tar = $(e.target);
            $index = $tar.index();
            play();
        });
        var autoPlay = function(){
            timeId = setInterval(function(){
                $index++;
                if($index > $(".slide-item").length-1){
                    $index = 0;
                }
                if($index < 0){
                    $index = 0;
                }
                play();
            },3000);
        };
        autoPlay();
        $swipe.mouseenter(function(){
              clearInterval(timeId);
        });
        $swipe.mouseleave(function(){
            autoPlay();
        });
    })();
    var nav = $("#navBar");
    $(window).scroll(function () {
         var $top = $(this).scrollTop();
        if($top>=200){
            nav.addClass("fixed");
        }else{
            nav.removeClass("fixed");
        }
    });


});