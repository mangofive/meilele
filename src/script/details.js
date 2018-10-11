!function($){
	$('.details-header').load('header.html');
	$('.details-footer').load('footer.html');
	$.ajax({
		url: 'http://10.31.162.54/meilele/php/details.php',
		dataType: 'json',
		data: {
			sid:location.search.substring(1).split('=')[1]
		},
	})
	.done(function(data) {
		console.log(data)
		var $str='<img src="'+data[0].url.split(',')[0]+'">';
		$('#JS_scale_src').html($str);
		var $str1="";
		$.each(data[0].url.split(','),function(index,value) {
			$str1+='<li class="album_item">'+
						'<a href="javascript:;">'+'</a>'+
						'<img src="'+value+'">'+
					'</li>';
		});
		$('#JS_goods_album_stage').html($str1);
	})
}(jQuery)