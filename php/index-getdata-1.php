<?php
	require 'conn.php';
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Method:GET,POST');
	$result=mysql_query("select * from commodity");
	$arr=Array();
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($arr);
?>