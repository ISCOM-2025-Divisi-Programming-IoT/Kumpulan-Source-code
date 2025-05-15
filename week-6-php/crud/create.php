<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <form action="" method="POST">
            Nama: <input type="text" name="nama" placeholder="Masukkan nama anda" required> <br>
            NPM: <input type="text" name="npm" placeholder="Masukkan NPM anda" required> <br>
            Jurusan: <input type="text" name="jurusan" placeholder="Masukkan jurusan anda" required> <br>
            <input type="submit" name="submit" value="Enter data">
        </form>
</body>
</html>

<?php

include 'db.php';

if (isset($_POST["submit"])) {

    $nama = $_POST["nama"];
    $npm = $_POST["npm"];
    $jurusan = $_POST["jurusan"];

    $tambahData = "INSERT INTO mahasiswa (id, nama, npm, jurusan) VALUES (NULL, '$nama', '$npm', '$jurusan')";

    if (mysqli_query($koneksi, $tambahData)) {
        echo "Data berhasil ditambahkan.";
    } else {
        echo "Error: " . mysqli_error($koneksi);
    }
}

?>