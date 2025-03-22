
<?php

header("Access-Control-Allow-Origin: *"); // Allow all origins, or restrict to a specific one
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");





include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    
            
case "POST":
    $user = json_decode( file_get_contents('php://input') );
    $email= $user->email;
    $pass=$user->password;
    $sql = "SELECT * FROM users WHERE email = :email AND password = :password";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':password', $pass, PDO::PARAM_STR);
    $response = $stmt->execute();

    
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
    break;


}


    