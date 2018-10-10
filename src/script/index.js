!function($){
	$('.index-header').load('header.html');
	$('.index-footer').load('footer.html');

	//轮播图数据
	$.ajax({
		url: 'http://10.31.162.54/meilele/php/index-getdata.php',
		dataType: 'json'
		/*success:function(d){
			//console.log(typeof d);
			//console.log(d);
		}*/
	}).done(function(data){
		//console.log(data);
		var $str="";
		$.each(data,function(index, value) {
			if(index==0){
				$str+=`<li class="scroll-item" style= "display:block;background:rgb${value.rgb}">
				<div class="scroll-index">
					<a href="#" target="_blank" title="${value.title}">
						<img src="${value.url}" class="sc-big fadeInR">
						<img src="https://img001.mllres.com/images/201809/1537750740707588246.png" class="sc-small fadeInL">
					</a>
				</div>
			</li>`	
			}else{
				$str+=`<li class="scroll-item" style="background :rgb${value.rgb}">
				<div class="scroll-index">
					<a href="#" target="_blank" title="${value.title}">
						<img src="${value.url}" class="sc-big fadeInR">
						<img src="https://img001.mllres.com/images/201809/1537750740707588246.png" class="sc-small fadeInL">
					</a>
				</div>
			</li>`
			}
			
		});
		$(".banner .scroll-pic").html($str);
	});
	//console.log($("scroll-pic").children().size());
}(jQuery);


!function($){
	//商品分类侧边栏
	console.log($(".index-header .menu-bar .cat-item").size());
	$(".index-header .menu-bar .cat-item").hover(function() {
		$(this).stop().animate({paddingLeft:5}, 500).css('background', 'rgba(255,255,255,.9)');
	}, function() {
		$(this).stop().animate({paddingLeft:0}, 500).css('background', 'rgba(00,00,00,.8)');
	});
	//轮播图效果
	var $num=0
	var $timer=null
	var $btn=$(".scroll-btn span")
	
	$(".scroll-btn span").mouseover(function(){
		$num=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.scroll-pic li').eq($(this).index()).css({'display':'block'}).fadeTo('normal',1).siblings('.scroll-pic li').css({'display':'none'}).fadeTo('normal',0);
		/*$('.tab_content ul').eq($(this).index()).show().siblings('.tab_content ul').hide();*/
	});
	
	//自动轮播
	$timer=setInterval(function(){
		$num++;
		if($num==$(".scroll-btn span").size()){
			$num=0;
		}
		$btn.eq($num).trigger('mouseover');
	},5000)
	$('.scroll-pic').hover(function() {
		clearInterval($timer)
	}, function() {
			$timer=setInterval(function(){
				$num++;
				if($num==$(".scroll-btn span").size()){
					$num=0;
				}
				$btn.eq($num).trigger('mouseover');
			},5000)
	});
}(jQuery);