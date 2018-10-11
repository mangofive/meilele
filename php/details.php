<?php
	require 'conn.php';
	header('Access-Control-Allow-Origin:*');
	//origin:远程仓库的名称
	//设置允许跨域的方式
	header('Access-Control-Allow-Method:GET,POST');
	if(isset($_GET['sid'])){
		$sid=$_GET['sid'];
	}
	$result=mysql_query("select * from detailsdata where sid = '$sid'");
	$picarray=array();
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$picarray[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($picarray);
?>