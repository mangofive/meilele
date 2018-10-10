<?php
	require 'conn.php';
	header('Access-Control-Allow-Origin:*');
	//origin:远程仓库的名称
	//设置允许跨域的方式
	header('Access-Control-Allow-Method:GET,POST');
	if(isset($_POST['name'])){
		$username=$_POST['name'];
		$password=md5($_POST['pass']);	
	}else{
		
	}
	$query="select * from user where username='$username' and userpassword='$password'";
	$result=mysql_query($query);

	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
?>