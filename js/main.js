function figure(){//Отрисовка фигуры
    var figure = document.getElementById("figure");
    var ctx    = figure.getContext("2d");
    var grad   = ctx.createLinearGradient(100, 0, 0, 650);
    figure.width = "920";
    figure.height = "764";
    grad.addColorStop(1, '#ff8f5a');
    grad.addColorStop(0, '#ff2f96');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(300, 755);
    ctx.bezierCurveTo(-180, 680, 0, 400,300, 100);
    ctx.bezierCurveTo(520, -110, 1000, 20,900, 490);
    ctx.bezierCurveTo(800, 750, 600, 760,300, 755);
    ctx.closePath();
    ctx.fill();
};
function s_right_class(i1,i2,i3,n){
    if(n < 3){
        $(".ex__item_order_1").toggleClass('ex__item_order_1 ex__item_order_n');
        $(".ex__item_order_2").toggleClass('ex__item_order_2 ex__item_order_1');
        $(".ex__item_order_n").toggleClass('ex__item_order_n ex__item_order_1');
    }
    else{
        var eqi;
        if(i1 == 0){
            $(".ex__item:eq(" + (n-1) + ")").addClass("ex__item_order_1");
        }
        else{
            $(".ex__item:eq(" + (i1-1) + ")").addClass("ex__item_order_1");
        }
        for(i = 0;i < n; i++){
            eqi = $(".ex__item:eq(" + i + ")");
            if(i == i1){
                eqi.toggleClass("ex__item_order_1 ex__item_order_2");
            }
            else if(i == i2){
                eqi.toggleClass("ex__item_order_2 ex__item_order_3");
            }
            else if(i == i3){
                eqi.removeClass("ex__item_order_3");
            }
        }
    }
};
function s_left_class(i1,i2,i3,n){
    if(n < 3){
        $(".ex__item_order_1").toggleClass('ex__item_order_1 ex__item_order_n');
        $(".ex__item_order_2").toggleClass('ex__item_order_2 ex__item_order_1');
        $(".ex__item_order_n").toggleClass('ex__item_order_n ex__item_order_1');
    }
    else{
        var eqi;
        if(i3 == n-1){
            $(".ex__item:eq(" + 0 + ")").addClass("ex__item_order_3");
        }
        else{
            $(".ex__item:eq(" + (i3+1) + ")").addClass("ex__item_order_3");
        }
        for(i = 0;i < n; i++){
            eqi = $(".ex__item:eq(" + i + ")");
            if(i == i3){
                eqi.toggleClass("ex__item_order_3 ex__item_order_2");
            }
            else if(i == i2){
                eqi.toggleClass("ex__item_order_2 ex__item_order_1");
            }
            else if(i == i1){
                eqi.removeClass("ex__item_order_1");
            }
        }
    }
};
$(function(){
    figure();
    $(".ex__list").swipe( {
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection)
        {
            if (phase=="start"){
            }
            else if(phase=="move"){
                if(direction == "left"){
                    $(".ex__item").css({
                        left:"-"+ distance + "px"
                    })
                }
                else if(direction == "right"){
                    $(".ex__item").css({
                        left: distance + "px"
                    })
                }
            }
            else if (phase=="end"){
                var ww, n, i1,i2,i3;
                ww = $( window ).width();
                n = $(".ex__item").length;
                i1= $("#list_swipe .ex__item").index($(".ex__item_order_1"));
                i3= $("#list_swipe .ex__item").index($(".ex__item_order_3"));
                i2= $("#list_swipe .ex__item").index($(".ex__item_order_2"));
                
                if(ww > 1198){//для большого экрана
                    if(direction == "left"){
                        s_left_class(i1,i2,i3,n);
                    }
                    else if(direction == "right"){
                        s_right_class(i1,i2,i3,n);
                    }
                }
                else if(ww > 979){//для среднего
                    if(direction == "left"){

                    }
                    else if(direction == "right"){
                        if(i1 == 0){//$(".ex__item:eq("+(n-1)+")")
                            $(".ex__item:eq("+(n-1)+")").css({
                                display:"inline-block",
                                transform:"translate(-590px, 0px)",
                                opacity:0
                            });
                            $(".ex__item_order_1").animate({
                                left: "280px",
                                opacity:0
                            },100,"linear");
                            $(".ex__item:eq("+(n-1)+")").animate({
                                left: "280px",
                                opacity:1
                            },100,"linear");
                        }
                    }
                }
                else{//для маленького
                    if(direction == "left"){
                        $(".ex__item_order_2").css({
                            display:"inline-block",
                            "margin-left":"10px",
                            opacity:0
                        });
                        $(".ex__item_order_1").animate({
                            left: "-280px",
                            "margin-right":"10px",
                            opacity:0
                        },100,"linear");
                        $(".ex__item_order_2").animate({
                            left: "-280px",
                            "margin-left":"0px",
                            opacity:1
                        },100,"linear", function(){s_left_class(i1,i2,i3,n);
                            $(".ex__item_order_1").attr('style', '');
                            $(".ex__item_order_2").attr('style', '');
                            $(".ex__item_order_3").attr('style', '');});
                    }
                    else if(direction == "right"){
                        if(i1 == 0){//$(".ex__item:eq("+(n-1)+")")
                            $(".ex__item:eq("+(n-1)+")").css({
                                display:"inline-block",
                                transform:"translate(-590px, 0px)",
                                opacity:0
                            });
                            $(".ex__item_order_1").animate({
                                left: "280px",
                                opacity:0
                            },100,"linear");
                            $(".ex__item:eq("+(n-1)+")").animate({
                                left: "280px",
                                opacity:1
                            },100,"linear", function(){
                                s_right_class(i1,i2,i3,n);
                                $(".ex__item_order_1").attr('style', '');
                                $(".ex__item_order_2").attr('style', '');
                                $(".ex__item_order_3").attr('style', '');
                            });
                        }
                        else{//$(".ex__item:eq("+(i1-1)+")")
                            $(".ex__item:eq("+(i1-1)+")").css({
                                display:"inline-block",
                                transform:"translate(-590px, 0px)",
                                opacity:0
                            });
                            $(".ex__item_order_1").animate({
                                left: "280px",
                                opacity:0
                            },100,"linear");
                            $(".ex__item:eq("+(i1-1)+")").animate({
                                left: "280px",
                                opacity:1
                            },100,"linear", function(){
                                s_right_class(i1,i2,i3,n);
                                $(".ex__item_order_1").attr('style', '');
                                $(".ex__item_order_2").attr('style', '');
                                $(".ex__item_order_3").attr('style', '');
                            });
                        }
                    }
                }
            }
            else{
                $(".ex__item").animate({
                    left: "0px"
                },100,"linear");
            }
     },
     allowPageScroll: "horizontal", 
     triggerOnTouchEnd:false,
     threshold:100 // сработает через 100 пикселей
    });
});