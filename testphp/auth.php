<?php
$_POST = json_decode(file_get_contents('php://input'), true)
if(isset($_POST) && !empty($_POST)){
	$username = $_POST['username'];
	$password = $_POST['password'];

	if($username == 'admin' && $password == "admin"){
	echo "Authentication Successful";
	?>
	{
		"success": true,
		"secret": "this is secret"
	}
	<?php
} else {
	?>
	{
		"success": false,
		"message": "Invalid Credentials"
	}
}
}
?>