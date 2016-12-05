/**
 * Created by dell001 on 2016/11/30.
 */
$(function(){
    $(".clothes dl:nth-child(4n+1)").css("margin-left",0);
    var stop = true;  //防止多次触发事件
    $(window).scroll(function () {
        var $top = $(this).scrollTop();
        var $height = $(window).height();
        var $clientH = $(document).height();
        if($top>=100&&$top + $height + 100 >= $clientH){
            if(stop == true) {
                //将开关设为false,事件未完成前不能触发
                stop = false;
                $(".more  .clothes").append("<div class='loadImg' style='text-align:center'><img src='../images/load.gif' style='width:293px; height:220px;'></div>");
                //向后台请求数据   ：只写了每次加载一个
                // $.get("",function(data){
                //       $(".more .clothes").append('<dl>'+
                //                                       '<dt><a href="###"><img src="../images/clothes.png"/></a></dt>'+
                //                                     '<dd class="clothName"><a href="###">茵曼森女风衬衣</a></dd>'+
                //                                     '<dd class="buy">' +
                //                                     '<a href="###">' +
                //                                     '<span>' +
                //                                     '<i><sub>￥</sub>99.<sub>90</sub></i>' +
                //                                     '<del>￥<em>199.8</em></del>'+
                //                                     '</span>' +
                //                                     '<span class="floatR">立即抢购</span>' +
                //                                     '</a>' +
                //                                     '</dd>'+
                //                                     '</dl>'
                //                                 );
                //
                //     //请求成功后将加载图片删除
                //     $(".loadImg").remove();
                //     //开关设为true
                //     stop = true;
                // });
            }
        }
    });

});