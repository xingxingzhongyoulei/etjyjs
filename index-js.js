// JavaScript Document
$(function(){
	$(".link li").mouseover(function(){
		var m=$(this).index();
		$(".link a").eq(m).css("color","#16324a")
		});
	$(".link li").mouseleave(function(){
		var m=$(this).index();
		$(".link a").eq(m).css("color","#FFF")
		});

	$(".w ul li").mousemove(function(){
		$(this).addClass("col").siblings().removeClass("col");
		});
	$(".w ul").mouseleave(function(){
		$(".w ul li").eq(0).addClass("col").siblings().removeClass("col");
	});
	$('.check ul li:even').addClass("ys");
	$(".search input").click(function(){
		$(this).val(" ");
		});
	$("#search-information input").click(function(){
		$(this).val(" ");
		});
	$(".gundong li:eq(0)").addClass("yd");
	$(".w ul li").eq(3).addClass("ycl");
	$(".w ul li").last().css("border-bottom","none");
	$(".top button").click(function(){
		if($(".top ul li").width()==80){
			$(".top").css({
				"background":"#f8da06",
				"overflow":"visible"
			});
			$(".link li").css({
				"background":"#163e4a",
				"width":"100%",
				"border":"#FFF solid 1px"
				});
			}
		else{
			$(".link li").css({
				"width":"80px",
				"border":"none"
				});
			$(".top").css({
				"background":"#163e4a",
				"overflow":"hidden"
		      });
			};
			});
});
$(function(){
	 var $h=$(".check  h4:eq(0)");
     var $m=$(".check  h4:eq(1)");
	 var $a=$(".c-on-a");
	 var $b=$(".c-on-b");
	
	 $h.click(function(){
		 if($(".top button").is(":hidden")){
			     $(".check ul").eq(0).addClass("c-on-a")
				 $(".check ul").eq(0).removeClass("c-on-b")
				 $(".check ul").eq(1).addClass("c-on-b")
				 $(".check ul").eq(1).removeClass("c-on-a")
			 }else{
				 $(".check ul").eq(0).addClass("c-on-a")
				 $(".check ul").eq(0).removeClass("c-on-b")
				 $(".check ul").eq(1).addClass("c-on-b")
				 $(".check ul").eq(1).removeClass("c-on-a")
				 };
		 });
	 $m.click(function(){
		  if($(".top button").is(":hidden")){
			     $(".check ul").eq(1).addClass("c-on-a")
				 $(".check ul").eq(1).removeClass("c-on-b")
				 $(".check ul").eq(0).addClass("c-on-b")
				 $(".check ul").eq(0).removeClass("c-on-a")
			 }else{
				 $(".check ul").eq(0).addClass("c-on-a")
				 $(".check ul").eq(0).removeClass("c-on-b")
				 $(".check ul").eq(1).addClass("c-on-b")
				 $(".check ul").eq(1).removeClass("c-on-a")
				 };
		 });
		 
	$(".c-on-a li:eq(0) a").before('<img src="images/a.png">&nbsp;');
	$(".c-on-a li:eq(1) a").before('<img src="images/b.png">&nbsp;');
	$(".c-on-a li:eq(2) a").before('<img src="images/c.png">&nbsp;');
	$(".c-on-a li:eq(3) a").before('<img src="images/d.png">&nbsp;');
	$(".c-on-a li:eq(4) a").before('<img src="images/e.png">&nbsp;');
	$(".c-on-a li:eq(5) a").before('<img src="images/f.png">&nbsp;');
	$(".c-on-a li:eq(6) a").before('<img src="images/g.png">&nbsp;');
	$(".c-on-a li:eq(7) a").before('<img src="images/h.png">&nbsp;');
	
	
	$(".c-on-b li:eq(0) a").before('<img src="images/a.png">&nbsp;');
	$(".c-on-b li:eq(1) a").before('<img src="images/b.png">&nbsp;');
	$(".c-on-b li:eq(2) a").before('<img src="images/c.png">&nbsp;');
	$(".c-on-b li:eq(3) a").before('<img src="images/d.png">&nbsp;');
	$(".c-on-b li:eq(4) a").before('<img src="images/e.png">&nbsp;');
	$(".c-on-b li:eq(5) a").before('<img src="images/f.png">&nbsp;');
	$(".c-on-b li:eq(6) a").before('<img src="images/g.png">&nbsp;');
	$(".c-on-b li:eq(7) a").before('<img src="images/h.png">&nbsp;');


	});
$(function(){
	$(".download ul li").eq(0).css({
		"background":"#16324a",
		"color":"#FFF",
		});
	$(".download ul li").eq(1).css({
		"background":"#b0b0b0",
		"color":"#16324a",
		});
	$(".download ul li").eq(2).css({
		"background":"#2f74af",
		"color":"#16324a",
		});
	$(".download ul li>a").eq(0).css({
		"color":"#FFF",
		});
	$(".download ul li>a").eq(1).css({
		"color":"#16324a",
		});
	$(".download ul li>a").eq(2).css({
		"color":"#16324a",
		});
	$(".footer ul:eq(0)").css({
		"margin-left":"140px",
	});
	});
$(function(){
	var $li=$(".show ul li");
	var $timer=5000;
	var p=0;
	
	$li.hide();
	$li.eq(0).show();
	function play(){
		p<$li.length-1?p++:p=0;
		$li.eq(p).fadeIn(2000).siblings().fadeOut(2000);
		};
	set=setInterval(play,$timer);
	$(".show ul").mouseover(function(){
		clearInterval(set);
		});
	$(".show ul").mouseout(function(){
	set=setInterval(play,$timer);
		});

	});
$(function(){
	$(".m").before($(".s"))
	});
$(function(){
	$(".link-img li:eq(0) img").wrap($(".link-a li:eq(0) a"));
	$(".link-img li:eq(1) img").wrap($(".link-a li:eq(1) a"));
	$(".link-img li:eq(2) img").wrap($(".link-a li:eq(2) a"));
	$(".link-img li:eq(3) img").wrap($(".link-a li:eq(3) a"));
	$(".link-img li:eq(4) img").wrap($(".link-a li:eq(4) a"));
	$(".link-img li:eq(5) img").wrap($(".link-a li:eq(5) a"));
	$(".update-one ul li a").before($(".d"));
	$(".update-two ul li a").before($(".e"));
	});
	

$(function(){	
var imgRun = function(a,b,c,d){
       var $imgUl = $(a).find("ul");
       var $imgLi = $(a).find("li");
       var $width = $(a).find("li").eq(0).outerWidth(true);
       var $s = 0;
       var $timer1 = null;
       var speed1 = parseInt(d);
       var speed2 = parseInt(d/5);
       $imgLi.clone(true).appendTo($imgUl);
       function runLe(){
           $s--;
           if($s<-$width){
               $s=0;
               $(a).find("li:first").appendTo($imgUl);
               }
           $imgUl.css("left",$s+"px");
           }
        function runRi(){
            $s++;
            if($s>0){
                $s=-$width;
                $(a).find("li:last").prependTo($imgUl);
                }
            $imgUl.css("left",$s+"px");
            }
        $timer1 = setInterval(runLe,speed1);
        $imgUl.hover(function(){
            clearInterval($timer1);
            },function(){
            $timer1 = setInterval(runLe,speed1);
            })
        $(b).mousedown(function(){
            clearInterval($timer1);
            $timer1 = setInterval(runRi,speed2);
            })
        $(b).mouseup(function(){
            clearInterval($timer1);
            $timer1 = setInterval(runLe,speed1);
            })
        $(c).mousedown(function(){
            clearInterval($timer1);
            $timer1 = setInterval(runLe,speed2);
            })
        $(c).mouseup(function(){
            clearInterval($timer1);
            $timer1 = setInterval(runLe,speed1);
            })
    }
imgRun("#imgRun","#imgRunRi","#imgRunLe",35);
});
<!--无缝滚动-->	
jQuery(function($){
	$('#demo2').slideBox({
		direction : 'left',
		duration : 0.3,
		easing : 'swing',
		delay : 5,
		startIndex : 1,
	});
});
/*
 * jQuery图片轮播(焦点图)插件
 * ADD.JENA.201206291027
 * EDIT.JENA.201206300904
 * EDIT.JENA.201207051027
 * EDIT.JENA.201208090849
 * EDIT.JENA.201303141312
 * Version: 1.2.0314
 * Author: jena
 * Demo: http://ishere.cn/demo/jquery.slidebox/
 */
(function($){$.fn.slideBox=function(options){var defaults={direction:'left',duration:0.6,easing:'swing',delay:3,startIndex:0,hideClickBar:true,clickBarRadius:5,hideBottomBar:false,width:null,height:null};var settings=$.extend(defaults,options||{});var wrapper=$(this),ul=wrapper.children('ul.items'),lis=ul.find('li'),firstPic=lis.first().find('img');var li_num=lis.size(),li_height=0,li_width=0;var order_by='ASC';var init=function(){if(!wrapper.size())return false;li_height=settings.height?settings.height:lis.first().height();li_width=settings.width?settings.width:lis.first().width();wrapper.css({width:li_width+'px',height:li_height+'px'});lis.css({width:li_width+'px',height:li_height+'px'});if(settings.direction=='left'){ul.css('width',li_num*li_width+'px')}else{ul.css('height',li_num*li_height+'px')};ul.find('li:eq('+settings.startIndex+')').addClass('active');if(!settings.hideBottomBar){var tips=$('<div class="tips"></div>').css('opacity',0.6).appendTo(wrapper);var title=$('<div class="title"></div>').html(function(){var active=ul.find('li.active').find('a'),text=active.attr('title'),href=active.attr('href');return $('<a>').attr('href',href).text(text)}).appendTo(tips);var nums=$('<div class="nums"></div>').hide().appendTo(tips);lis.each(function(i,n){var a=$(n).find('a'),text=a.attr('title'),href=a.attr('href'),css='';i==settings.startIndex&&(css='active');$('<a>').attr('href',href).text(text).addClass(css).css('borderRadius',settings.clickBarRadius+'px').mouseover(function(){$(this).addClass('active').siblings().removeClass('active');ul.find('li:eq('+$(this).index()+')').addClass('active').siblings().removeClass('active');start();stop()}).appendTo(nums)});if(settings.hideClickBar){tips.hover(function(){nums.animate({top:'0px'},'fast')},function(){nums.animate({top:tips.height()+'px'},'fast')});nums.show().delay(2000).animate({top:tips.height()+'px'},'fast')}else{nums.show()}};lis.size()>1&&start()};var start=function(){var active=ul.find('li.active'),active_a=active.find('a');var index=active.index();if(settings.direction=='left'){offset=index*li_width*-1;param={'left':offset+'px'}}else{offset=index*li_height*-1;param={'top':offset+'px'}};wrapper.find('.nums').find('a:eq('+index+')').addClass('active').siblings().removeClass('active');wrapper.find('.title').find('a').attr('href',active_a.attr('href')).text(active_a.attr('title'));ul.stop().animate(param,settings.duration*1000,settings.easing,function(){active.removeClass('active');if(order_by=='ASC'){if(active.next().size()){active.next().addClass('active')}else{order_by='DESC';active.prev().addClass('active')}}else if(order_by=='DESC'){if(active.prev().size()){active.prev().addClass('active')}else{order_by='ASC';active.next().addClass('active')}}});wrapper.data('timeid',window.setTimeout(start,settings.delay*1000))};var stop=function(){window.clearTimeout(wrapper.data('timeid'))};wrapper.hover(function(){stop()},function(){window.setTimeout(start,settings.delay*1000);});var imgLoader=new Image();imgLoader.onload=function(){imgLoader.onload=null;init()};imgLoader.src=firstPic.attr('src')}})(jQuery);