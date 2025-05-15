<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if (isset($_GET["submit"])): ?>
        <h1>Halo nama saya <?php echo $_GET["nama"]; ?></h1>
        <h1>Alamat saya <?php echo $_GET["alamat"]; ?></h1>
        <h1>No. Telepon saya <?php echo $_GET["telepon"]; ?></h1>
        <h1>Email saya <?php echo $_GET["email"]; ?></h1>
    <?php endif; ?>
</body>
</html>