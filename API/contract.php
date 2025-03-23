<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM contract";

    
        if(isset($_GET['admin_id'])) {
            $id = $_GET['admin_id'];
            $sql .= " WHERE employee_id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $contracts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        else if(isset($_GET['user_id'])) {

            $id = $_GET['user_id'];

            $sql .= " WHERE signed_by = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $contracts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } 
        
        else if (isset($_GET['contract_id'])) {
            $id = $_GET['contract_id'];
            $sql .= " WHERE contract_id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $contracts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $contracts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($contracts);
        break;

        
    case "POST":
        $data = json_decode( file_get_contents('php://input') );
        $status = isset($data->starting_date) && $data->starting_date !== null ? 'PENDING' : 'WAITING';
        $sql = "INSERT INTO contract( contract_name, starting_date, expiration_date, cost, items, contract_terms, owner,employee_id,warranty_start_date,warranty_end_date,company_name,address,company_phone, status, signed_by) 
        VALUES( :contract_name, :starting_date, :expiration_date, :cost,:items, :contract_terms ,:owner,:employee_id,:warranty_start_date,:warranty_end_date,:company_name,:address,:company_phone, :status, :signed_by)";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute([
            'contract_name' => $data->contract_name,
            'starting_date' => $data->starting_date,
            'expiration_date' => $data->expiration_date,
            'cost' => $data->cost,
            'items' => $data->items,
            'contract_terms' => $data->contract_terms,
            'owner' => $data->owner,
            'employee_id' => $data->employee_id,
            'warranty_start_date' => $data->warranty_start_date ?? null,
            'warranty_end_date' => $data->warranty_end_date ?? null,
            'company_name' => $data->company_name,
            'address' => $data->address,
            'company_phone' => $data->company_phone,
            'signed_by' => $data->signed_by ?? null,
            'status' => $status
            
        ]);


        if($result) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;


        case "PUT":
        if(isset($_GET['user_id']) && isset($_GET['contract_id'])) {
            $user_id = $_GET['user_id'];
            $contract_id = $_GET['contract_id'];
            $sql = "UPDATE contract SET signed_by = :user_id, status = 'PENDING', signing_date = CURDATE() WHERE contract_id = :contract_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user_id);
            $stmt->bindParam(':contract_id', $contract_id);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
        }

        else if(isset($_GET['status']) && isset($_GET['contract_id'])) {
            $status = $_GET['status'];
            $contract_id = $_GET['contract_id'];
            $sql = "UPDATE contract SET status = :status WHERE contract_id = :contract_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':status', $status);
            $stmt->bindParam(':contract_id', $contract_id);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
        } 
        break;
    
        case "DELETE":
        $conract_id = $_GET['contract_id'];
        $sql = "DELETE FROM contract WHERE contract_id = :contract_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':contract_id', $conract_id);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

}