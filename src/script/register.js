!function($){
	$('#header-reg').load('header.html .guoqing');
	$('#footer-reg').load('footer.html');
}(jQuery)
!function($){
	$('#user-reg-from').validate({
		rules:{
			username:{
				required:true,
				rangelength:[4,20],
				remote: {
				    url: "http://10.31.162.54/meilele/php/register.php",     //后台处理程序
				    type: "post",               //数据发送方式  
				    /*data: {                     //要传递的数据
				        username: function() {
				            return $("#username").val();
				        }
				    }*/
				}

			},
			password:{
				required:true,
				rangelength:[6,20]
				
			},
			repass:{
				required: true,
				equalTo: "#password"//值和密码框的值相同
			},
			phonenumber:{
				required:true,
				digits:true,
				rangelength:[11,11]
			}
		},
		messages:{
			username:{
				required:"请输入用户名",
				rangelength:"可使用字母、汉字、数字、下划线或其组合，4～20个字符",
				remote:'用户名已存在'
			},
			password:{
				required:"请输入密码",
				rangelength:"6-20位，支持字母、数字或符号的组合"
			},
			repass:{
				required:" 请输入确认密码",
				equalTo:"请确保两次输入的密码一致",
			},
			phonenumber:{
				required:"请输入手机号",
				digits:"必须是整数",
				rangelength:"号码有误"
			}
		}
	});
	$.validator.setDefaults({
		/*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
		success: function(label){
			label.text('√').css('color','green').addClass('valid');
		}
	});
}(jQuery)