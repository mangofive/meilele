!function($){
	$('.header-guoqing').load('header.html .guoqing');
	$('#buttom').load('footer.html');

	$('#btn').on('click',function(){
		var $username=$('#username').val();
		var $password=$('#password').val();
		console.log($('#username').val());
		console.log($('#password').val());
		$.ajax({
				type:'post',
				url: 'http://10.31.162.54/meilele/php/login.php',
				data:{//将用户名和密码传输给后端
					name:$username,
					pass:$password
				},
				success:function(data){//请求成功，接收后端返回的值
				if(!data){//用户名或者密码错误
				$('.error-date').html('用户名或者密码错误');
				$('#password').val('');
				//console.log(data);
				}else{//成功,存cookie,跳转到首页
						addCookie('UserName',$username,7);
						location.href='index.html';
						//console.log(data);
					}
				}
		})
	});
	function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				};
}(jQuery)

