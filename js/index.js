$('.carousel').carousel();
$(function(){
	// 关于 点击展示事件
	$('.about-more i').click(function(){
		if ($('.company-info').height()==0) {
			$('.company-info').animate({'height':715+'px'});	
		} else{
			$('.company-info').animate({'height':0});
		}
	// 切换图标	
		if ($(this).toggleClass('glyphicon-plus-sign')) {
			$(this).toggleClass('glyphicon-minus');
		} else{
			$(this).toggleClass('glyphicon-plus-sign')
		}
	})
	
	// 导航点击
	var n;
	var infoHeight;
	$('.p-nav li').click(function(){
		n=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		scrollPage();
		infoHeight=$('.company-info').height();
	})
	// 页面滚动
	function scrollPage(){
		if (n==0) {
			$("html,body").animate({scrollTop:0}, 500);
		} 
		if (n==1) {
			$("html,body").animate({scrollTop:430+'px'}, 500);
		}
		if (n==2) {
			$("html,body").animate({scrollTop:915+'px'}, 500);
		}
		if (n==3) {
			$("html,body").animate({scrollTop:1400+'px'}, 500);
		}
		if (n==4) {
			if (infoHeight!=0) {
				$("html,body").animate({scrollTop:(1737+infoHeight)+'px'}, 500);
			} else{
				$("html,body").animate({scrollTop:1737+'px'}, 500);
			}
		}
		if (n==5) {
			if (infoHeight!=0) {
				$("html,body").animate({scrollTop:(2035+infoHeight)+'px'}, 500);
			} else{
				$("html,body").animate({scrollTop:2035+'px'}, 500);
			}
		}
	}
})
