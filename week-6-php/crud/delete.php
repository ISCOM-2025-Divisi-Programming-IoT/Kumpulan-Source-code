<?php

    include 'db.php';

    $id = $_GET['id'];
    $query = "DELETE FROM mahasiswa WHERE id = $id";
    mysqli_query($koneksi, $query);

    header('Location: read.php');

?>