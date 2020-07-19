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
    ctx.moveTo(400, 755);
    ctx.bezierCurveTo(-180, 680, 0, 400,250, 100);
    ctx.bezierCurveTo(520, -110, 1000, 20,900, 490);
    ctx.bezierCurveTo(800, 750, 600, 760,250, 755);
    ctx.closePath();
    ctx.fill();
};
var time=250, scroll;//задержка
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
function radioclick(r_index){
    var ww, n,is1,is2,is3;
    ww = $( window ).width();
    n = $(".ex__item").length;
    is1 = r_index;
    if(n != is1+1)
        is2= is1+1;
    else
        is2 = 0;
    if(n != is2+1)
        is3= is2 +1;
    else
        is3 = 0
    $(".ex__item").animate({
        opacity: 0
    },time/2,"linear",function(){
        $(".ex__item").removeClass("ex__item_order_1");
        $(".ex__item").removeClass("ex__item_order_2");
        $(".ex__item").removeClass("ex__item_order_3");
        $(".ex__item").css({
            opacity:0
        })
        $(".ex__item:eq(" + is1 + ")").addClass("ex__item_order_1");
        $(".ex__item:eq(" + is2 + ")").addClass("ex__item_order_2");
        $(".ex__item:eq(" + is3 + ")").addClass("ex__item_order_3");
        $(".ex__item").animate({
            opacity: 1
        },time/2,"linear");
    }); 
}
function leftclick(){
    var ww, n, i1,i2,i3,is1,is2,is3;;
    ww = $( window ).width();
    n = $(".ex__item").length;
    i1= $("#list_swipe .ex__item").index($(".ex__item_order_1"));
    i2= $("#list_swipe .ex__item").index($(".ex__item_order_2"));
    i3= $("#list_swipe .ex__item").index($(".ex__item_order_3"));
    if(i1 == 0)
        is1 = n-1;
    else 
        is1 = i1-1;
    if(i2 == 0)
        is2 = n-1;
    else 
        is2 = i2-1;
    if(i3 == 0)
        is3 = n-1;
    else 
        is3 = i3-1;
    $("#r-" + (is1 + 1)).prop('checked', true);
    $(".ex__item").animate({
        opacity: 0
    },time/2,"linear",function(){
        $(".ex__item").removeClass("ex__item_order_1");
        $(".ex__item").removeClass("ex__item_order_2");
        $(".ex__item").removeClass("ex__item_order_3");
        $(".ex__item").css({
            opacity:0
        })
        $(".ex__item:eq(" + is1 + ")").addClass("ex__item_order_1");
        $(".ex__item:eq(" + is2 + ")").addClass("ex__item_order_2");
        $(".ex__item:eq(" + is3 + ")").addClass("ex__item_order_3");
        $(".ex__item").animate({
            opacity: 1
        },time/2,"linear");
    });
}
function rightclick(){
    var ww, n, i1,i2,i3,is1,is2,is3;;
    ww = $( window ).width();
    n = $(".ex__item").length;
    i1= $("#list_swipe .ex__item").index($(".ex__item_order_1"));
    i2= $("#list_swipe .ex__item").index($(".ex__item_order_2"));
    i3= $("#list_swipe .ex__item").index($(".ex__item_order_3"));
    if(i1 == n-1)
        is1 = 0;
    else 
        is1 = i1+1;
    if(i2 == n-1)
        is2 = 0;
    else 
        is2 = i2+1;
    if(i3 == n-1)
        is3 = 0;
    else 
        is3 = i3+1;
    $("#r-" + (is1 +1)).prop('checked', true);
    $(".ex__item").animate({
        opacity: 0
    },time/2,"linear",function(){
        $(".ex__item").removeClass("ex__item_order_1");
        $(".ex__item").removeClass("ex__item_order_2");
        $(".ex__item").removeClass("ex__item_order_3");
        $(".ex__item").css({
            opacity:0
        })
        $(".ex__item:eq(" + is1 + ")").addClass("ex__item_order_1");
        $(".ex__item:eq(" + is2 + ")").addClass("ex__item_order_2");
        $(".ex__item:eq(" + is3 + ")").addClass("ex__item_order_3");
        $(".ex__item").animate({
            opacity: 1
        },time/2,"linear");
    });
}
function menu_on(scroll){
    $("body").css({
        top:"-"+ scroll+"px",
    });
    $(".night").css({
        opacity: 0
    });

    $(".top__menu").css({
        left: "-500px"
    });
    $("body").addClass("menu-on");
    $(".top__menu").animate({
        left:0
    },time,"linear");
    $(".night").animate({
        opacity:1
    },time,"linear");
    $(".btn-menu").animate({
        opacity:0
    },time,"linear");
}
function menu_off(scroll){
    $(".top__menu").animate({
        left:"-500px"
    },time,"linear");
    $(".btn-menu").animate({
        opacity:1
    },time,"linear");
    $(".night").animate({
        opacity:0
    },time,"linear",function(){
        $("html").attr("style","scroll-behavior: auto;");
        $("body").removeClass("menu-on");
        $(window).scrollTop(scroll);
        $("html").attr("style","");
    });
}
function menu_off_a(scroll){
    $(".night").css({
        opacity: 1,
        display: "block"
    });
    $(".top__menu").css({
        left: "0px",
        display: "flex"
    });
    $(".top__menu").animate({
        left:"-500px"
    },time,"linear");
    $(".btn-menu").animate({
        opacity:1
    },time,"linear");
    $(".night").animate({
        opacity:0
    },time,"linear",function(){
        $(".night").attr("style","");
        $(".top__menu").attr("style","");
    });
    $("html").attr("style","scroll-behavior: auto;");
    $("body").removeClass("menu-on");
    $(window).scrollTop(scroll);
    $("html").attr("style","");
}
function modal_on(scroll){
    $("body").css({
        top:"-"+ scroll+"px",
    });
    $(".night").css({
        opacity: 0
    });

    $(".make-call").css({
        opacity: 0
    });
    $("body").addClass("modal-on");
    $(".make-call").animate({
        opacity:1
    },time,"linear");
    $(".night").animate({
        opacity:1
    },time,"linear");
}
function modal_off(scroll){
    $(".make-call").animate({
        opacity:0
    },time,"linear");
    $(".night").animate({
        opacity:0
    },time,"linear",function(){
        $("html").attr("style","scroll-behavior: auto;");
        $("body").removeClass("modal-on");
        $(window).scrollTop(scroll);
        $("html").attr("style","");
    });
}
$(function(){
    figure();
    $("#popup__number").mask("+7 (999) 999-99-99");
    $(".btn-call").on("click",function(){
        scroll = $(window).scrollTop();
        modal_on(scroll);
    });
    $(".night").on("click", function(){
        if($("body").hasClass("modal-on"))
            modal_off(scroll);
        else  menu_off(scroll);
    });
    $("#make-call").on("submit", function(e){
        e.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            url: 'make-call.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                $(".make-call__popup h3").html('Вы заказали обратный звонок на номер: '+data);
                $("#make-call").css({
                    display: "none"
                });
                $('.after').css({
                    display: 'inline-block'
                });
            }
        });
    });
    $(".popup__close").on("click", function(e){
        e.preventDefault();
        modal_off(scroll);
    });
    $(".after__close").on("click", function(e){
        modal_off(scroll);
    });
    $(".after__restart").on("click", function(e){
        $("#make-call").css({
            display: "block"
        });
        $('.after').css({
            display: "none"
        });
    });
    $(".ex__radio-cont li").on("click",function(){radioclick($(".ex__radio-cont li").index($(this)))});
    $(".ex__arrow.a-left").on("click",function(){leftclick()});
    $(".ex__arrow.a-right").on("click",function(){rightclick()});
    if($( window ).width() <= 1198){
        $(".btn-menu").on("click", function(){
            scroll =  $(window).scrollTop();
            menu_on(scroll);
        });
        $(".menu__close a").on("click", function(e){
            menu_off(scroll);
            e.preventDefault();
        });
        $(".menu__item a").on("click",function(e){
            menu_off_a(scroll); 
        });
        $("header").swipe( {
            swipeStatus:function(event, phase, direction, distance){
                menu_swipe(event, phase, direction, distance);
                },
            excludedElements:".ex__list",
            allowPageScroll: "vertical",
            triggerOnTouchEnd: true, 
            threshold:100
        });
        $("main").swipe( {
            swipeStatus:function(event, phase, direction, distance){
                menu_swipe(event, phase, direction, distance);
                },
            excludedElements:".ex__list",
            allowPageScroll: "vertical",
            triggerOnTouchEnd: true, 
            threshold:100
        });
        $("footer").swipe( {
            swipeStatus:function(event, phase, direction, distance){
                menu_swipe(event, phase, direction, distance);
                },
            excludedElements:".ex__list",
            allowPageScroll: "vertical",
            triggerOnTouchEnd: true, 
            threshold:100
        });
        $(".night").swipe( {
            swipeStatus:function(event, phase, direction){
                if (direction == "left")
                    if (phase=="end"){
                        menu_off(scroll);
                    }
            },
            allowPageScroll: "vertical",
            triggerOnTouchEnd: true, 
            threshold: 50
        });
    }
    $(".ex__list").swipe( {
        swipeStatus:function(event, phase, direction, distance)
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
                i2= $("#list_swipe .ex__item").index($(".ex__item_order_2"));
                i3= $("#list_swipe .ex__item").index($(".ex__item_order_3"));
                if(ww > 1198){//для большого экрана
                        $(".ex__item").animate({
                            left: "0px"
                        },time,"linear");
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
function menu_swipe(event, phase, direction, distance)
{
    if (direction == "right")
        if (phase=="end"){
            if(!$("body").hasClass("menu-on")){
                scroll =  $(window).scrollTop();
                menu_on(scroll);
            }
        }
}