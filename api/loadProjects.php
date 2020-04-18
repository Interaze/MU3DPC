<?php
    include ('dbconnect.php');

    $sql = "SELECT P.name,P.Sname,S.Hex,P.Description,P.Image FROM PROJECTS P, SUBGROUPS S WHERE S.Name = P.Sname ORDER BY P.Name DESC;";

    $arr = array();
    $result = mysqli_query($conn, $sql);
    while(($row = mysqli_fetch_assoc($result))) {
        $arr[] = $row;
    }

    echo json_encode($arr);
    $conn->close();
?>
