<?php
    include ('dbconnect.php');

    $numbResult = filter_var($_GET['Amm'] ?? 5, FILTER_SANITIZE_NUMBER_INT);
    $numbIn = filter_var($_GET['Dist'] ?? 0, FILTER_SANITIZE_NUMBER_INT);

    if($numbResult > 50){
        $numbResult = 50;
    }

    $sql = $conn->prepare("SELECT * FROM EVENTS E ORDER BY E.Posted DESC LIMIT ?,? ;");
    $sql->bind_param("ii", $numbIn, $numbResult);

    $arr = array();
    $sql->execute();
    $result = $sql->get_result();
    while(($row = mysqli_fetch_assoc($result))) {
        $arr[] = $row;
    }

    echo json_encode($arr);
    $sql->close();
    $conn->close();
?>
