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



//获取商品数据
!function($){
	$.ajax({
		url: 'http://10.31.162.54/meilele/php/index-getdata-1.php',
		//type: 'default GET (Other values: POST)',
		dataType: 'json',
		//data: {param1: 'value1'},
	}).done(function(data) {
		var $str1="";
		var $str2="";
		var $str3="";
		var $str4="";
		var $str5="";
		var $str6="";
		var $str7="";
		var $str8="";
		$.each(data,function(index,value){
			if(index>=0 && index<4 && index==0){
				$str1+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if(index>=0 && index<4){
				$str1+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=4 && index<8 && index==4){
				$str2+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if(index>=4 && index<8){
				$str2+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=8 && index<12 && index==8){
				$str3+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=8 && index<12) {
				$str3+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=12 && index<16 && index==12){
				$str4+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=12 && index<16) {
				$str4+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}
			if(index>=16 && index<20 && index==16){
				$str5+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=16 && index<20) {
				$str5+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=20 && index<24 && index==20){
				$str6+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=20 && index<24) {
				$str6+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=24 && index<28 && index==24){
				$str7+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=24 && index<28){
				$str7+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};
			if(index>=28 && index<32 && index==28){
				$str8+=`<div class="goods first">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			}else if (index>=28 && index<32){
				$str8+=`<div class="goods">
						<a href="details.html?sid=${value.sid}" class="back-img">
							<img src="${value.showpic}">
							<div class="tag"></div>
						</a>
						<p class="name">
							<a href="" target="_blank">${value.showtitle}</a>
						</p>
						<p class="price">￥<span class="JS_async_price">${value.showprice}</span></p>
					</div>`
			};

		})
		$('.scroll-index .goods-list:eq(0)').addClass('eq-0').html($str1);
		$('.scroll-index .goods-list:eq(1)').html($str2);
		$('.scroll-index .goods-list:eq(2)').html($str3);
		$('.scroll-index .goods-list:eq(3)').html($str4);
		$('.scroll-index .goods-list:eq(4)').html($str5);
		$('.scroll-index .goods-list:eq(5)').html($str6);
		$('.scroll-index .goods-list:eq(6)').html($str7);
		$('.scroll-index .goods-list:eq(7)').html($str8);


	})
	/*.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});*/
	
}(jQuery)


//效果js
!function($){
	//商品分类侧边栏
		$(".index-header").on('mouseover','.cat-item',function(event){
			/*var $target=event.target;*/
			$(this).css({'paddingLeft':'5px','background':'rgba(255,255,255,.9)'}).children('.sub-cat').css('display', 'block');
		})
		$(".index-header").on('mouseout','.cat-item',function(event){
			/*var $target=event.target;*/
			$(this).css({'paddingLeft':'0px','background':'rgba(00,00,00,.8)'}).children('.sub-cat').css('display', 'none');
		})

	/*$(".index-header .menu-bar .cat-item").hover(function() {
		$(this).stop().animate({paddingLeft:5}, 500).css('background', 'rgba(255,255,255,.9)');
	}, function() {
		$(this).stop().animate({paddingLeft:0}, 500).css('background', 'rgba(00,00,00,.8)');
	});*/


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

//各类商品切换
!function($){
	/*按钮划过时的效果*/
	var $num=0;
	$('.classify-btn .btn').hover(function() {
		$num=$(this).index()
		$(this).addClass('current').siblings().removeClass('current');
		$('.scroll-index').children('.goods-list').eq($num).css('display', 'block').siblings('.goods-list').css('display', 'none');
	}, function() {
		
	});
}(jQuery)