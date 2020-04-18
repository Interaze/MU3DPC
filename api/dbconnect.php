<?php
    // Create connection
    $conn = new mysqli("db:3306", "FinalBot", "password", "MU3DPC");

    // Check connection
    if ($conn->connect_error) {
        echo json_encode([
            'msg' => 'Connection Failed: ' . $conn->connect_error,
            'Error' => '1'
        ]);
        exit();
    }

?>
