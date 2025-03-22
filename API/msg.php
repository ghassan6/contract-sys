<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $msg = json_decode(file_get_contents('php://input'));

        if (
            isset($msg->name)
            && isset($msg->email)
            && isset($msg->message)
            && isset($msg->subject)
            && !empty($msg->name)
            && !empty($msg->email)
            && !empty($msg->message)
            && !empty($msg->subject)
        ) {


            $sql = "INSERT INTO messages(id, name, email,subject, message) VALUES(null, :name, :email,:subject, :message)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $stmt->bindParam(':name', $msg->name);
            $stmt->bindParam(':email', $msg->email);
            $stmt->bindParam(':message', $msg->message);
            $stmt->bindParam(':subject', $msg->subject);

            try {
                if ($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record created successfully.'];
                }
            } catch (Exception $e) {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
        } else{
            echo "Please Fill The Fields";
        }

        break;
}
