<?php

include 'db.php';

$id = $_GET['id'];
$query = "SELECT * FROM mahasiswa WHERE id = $id ";
$hasil = mysqli_query($koneksi, $query);
$data = mysqli_fetch_assoc($hasil);

// Kondisi untuk mengupdate data mahasiswa
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'];
    $npm = $_POST['npm'];
    $jurusan = $_POST['jurusan'];

    $query = "UPDATE mahasiswa SET nama = '$nama', npm = '$npm', jurusan = '$jurusan' WHERE id = $id ";
    mysqli_query($koneksi, $query);

    header('Location: read.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="create.php">Kembali halaman insert</a>
        <form action="" method="POST">
            Nama: <input type="text" name="nama" value="<?php echo $data["nama"]; ?>"> <br>
            Npm: <input type="text" name="npm" value="<?php echo $data["npm"]; ?>"> <br>
            Jurusan: <input type="text" name="jurusan" value="<?php echo $data["jurusan"]; ?>"> <br>
            <input type="submit" value="Ubah data">
        </form>
</body>
</html>