<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ai_solutions";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $company = $data['company'];
    $country = $data['country'];
    $job_title = $data['job_title'];
    $job_details = $data['job_details'];

    $sql = "INSERT INTO inquiries (name, email, phone, company, country, job_title, job_details) 
            VALUES ('$name', '$email', '$phone', '$company', '$country', '$job_title', '$job_details')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Inquiry submitted successfully."]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
