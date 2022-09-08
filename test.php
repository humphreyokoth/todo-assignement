<?php 
$db = mysqli_connect('localhost','root','','todo');
if (isset($_POST['submit'])){
    $item =$_POST['item'];

    $mysqli_query($db,"INSERT INTO item(item) VALUES ('$item')");

}



?>