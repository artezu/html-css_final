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
    ctx.moveTo(250, 755);
    ctx.bezierCurveTo(-180, 680, 0, 400,250, 100);
    ctx.bezierCurveTo(520, -110, 1000, 20,900, 490);
    ctx.bezierCurveTo(800, 750, 600, 760,250, 755);
    ctx.closePath();
    ctx.fill();
};
function s_right_class(i1,i2,i3,n){
    var index;
    if(i1 == 0){
        index = n;
    }
    else{
        index = i1; 
    }
    $("#r-" + index).prop('checked', true);
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
    var index;
    if(i1+1 == n){
        index = 1;
    }
    else{
        index = i2 + 1; 
    }
    $("#r-" + index).prop('checked', true);
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
    var time=250;//задержка
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
                    if(n > 3){
                        if(direction == "left"){
                           
                            //s_left_class(i1,i2,i3,n);
                        }
                        else if(direction == "right"){

                            //s_right_class(i1,i2,i3,n);
                        }
                    }
                    else{
                        $(".ex__item").animate({
                            left: "0px"
                        },time,"linear");
                    }
                }
                else if(ww > 979){//для среднего
                    if(n > 2){//защита от недостаточного количества эл-тов для пролистывания
                        if(direction == "left"){
                            $(".ex__item_order_3").css({
                                display:"inline-block",
                                "margin-left":"35px",
                                opacity:0
                            });
                            $(".ex__item_order_2").css({
                                "margin-left":"35px"
                            });
                            $(".ex__item_order_2").animate({
                                left: "-457px",
                            },time,"linear");
                            $(".ex__item_order_1").animate({
                                left: "-457px",
                                opacity:0
                            },time,"linear");
                            $(".ex__item_order_3").animate({
                                left: "-457px",
                                opacity:1
                            },time,"linear",
                                function(){s_left_class(i1,i2,i3,n);
                                    $(".ex__item").attr('style', '');}
                            );
                        }
                        else if(direction == "right"){
                            var n1;
                            if(i1 == 0)
                                n1 = n-1;
                            else
                                n1 = i1-1;

                            $(".ex__item:eq("+(n1)+")").css({
                                display:"inline-block",
                                transform:"translate(-1390px, 0px)",
                                opacity:0
                            });
                            $(".ex__item_order_2").css({
                                "margin-left":"35px"
                            });
                            $(".ex__item_order_1").animate({
                                left: "495px"
                            },time,"linear");
                            $(".ex__item:eq("+(n1)+")").animate({
                                left: "495px",
                                opacity:1
                            },time,"linear");
                            $(".ex__item_order_2").animate({
                                left: "495px",
                                opacity:0
                            },time,"linear",function(){
                                s_right_class(i1,i2,i3,n);
                                $(".ex__item").attr('style', '');
                            });
                        }
                    }
                    else{
                        $(".ex__item").animate({
                            left: "0px"
                        },time,"linear");
                    }
                }
                else{//для маленького
                    if(n > 1){//защита от недостаточного количества эл-тов для пролистывания
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
                            },time,"linear");
                            $(".ex__item_order_2").animate({
                                left: "-280px",
                                "margin-left":"0px",
                                opacity:1
                            },time,"linear", function(){s_left_class(i1,i2,i3,n);
                                $(".ex__item").attr('style', '');});
                        }
                        else if(direction == "right"){
                            var n1;
                            if(i1 == 0){
                                n1 = n-1;
                            }
                            else{
                                n1 = i1-1;
                            }
                                $(".ex__item:eq("+(n1)+")").css({
                                    display:"inline-block",
                                    transform:"translate(-590px, 0px)",
                                    opacity:0
                                });
                                $(".ex__item_order_1").animate({
                                    left: "280px",
                                    opacity:0
                                },time,"linear");
                                $(".ex__item:eq("+(n1)+")").animate({
                                    left: "280px",
                                    opacity:1
                                },time,"linear", function(){
                                    s_right_class(i1,i2,i3,n);
                                    $(".ex__item").attr('style', '');
                                });
                        }
                    }
                    else{
                        $(".ex__item").animate({
                            left: "0px"
                        },time,"linear");
                    }
                }
            }
            else{
                $(".ex__item").animate({
                    left: "0px"
                },time,"linear");
            }
     },
     allowPageScroll: "vertical", 
     triggerOnTouchEnd: true,
     threshold:80 // сработает, если пройдено 80 пикселей
    });
});