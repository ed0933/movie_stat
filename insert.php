<?php
//require('movie_table.php');
$conn = mysqli_connect("localhost:3306", "root", "gkfma123", "movie");
//$sql = "SELECT * FROM movie_stats";
if(isset($_POST['submit'])) {
	/*$name = $_POST['name'];
	$email = $_POST['email'];
	$age = $_POST['age'];
	$address = $_POST['address'];
	$ins_query="insert into movie.insert
    (name, email, age, address)values
    ('$name','$email', '$age', '$address')";*/
	$Year = $_POST['Year'];
	$movie_name = $_POST['movie_name'];
	$ins_query="insert into movie.movie_stats
    (Year,movie_name)values
    ('$Year','$movie_name')";
    $run = mysqli_query($conn, $ins_query) or die (mysqli_error());
    if($run) {
    	echo "Successfully";
    }
}
?>
