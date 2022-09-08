<?php 

 //file_put_contents("post.log", print_r($_POST, true));
//error_log($input . "\n", 3, "./php_error.log");

ini_set('display_errors',1);
ini_set('log_errors',1);
ini_set('error_log',dirname(__FILE__).'./php_error.log');
error_reporting(E_ALL);
error_log($_POST . "\n", 3, "./php_error.log");
// require "index.html";

?>