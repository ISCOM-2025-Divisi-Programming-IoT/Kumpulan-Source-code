<?php
include 'db.php';

$query = "SELECT * FROM mahasiswa";
$hasil = mysqli_query($koneksi, $query);

?>

<a href="create.php">Menambah data mahasiswa</a>


<table border="1">
    <tr>
        <th>id</th>
        <th>nama</th>
        <th>npm</th></th>
        <th>jurusan</th>
        <th>operasi</th>
    </tr>

    <?php while ($data = mysqli_fetch_assoc($hasil)): ?>
        <tr>
            <td><?php echo $data['id']; ?></td>
            <td><?php echo $data['nama']; ?></td>
            <td><?php echo $data['npm']; ?></td>
            <td><?php echo $data['jurusan']; ?></td>
            <td>
                <a href="update.php?id=<?php echo $data['id']; ?>">Edit</a>
                <a href="delete.php?id=<?php echo $data['id']; ?>">Hapus</a>
            </td>
        </tr>
    <?php endwhile; ?>
</table>
