<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include("connection.php");

$query = $mysqli->prepare("SELECT * FROM new");
$query->execute();
$array = $query->get_result();
