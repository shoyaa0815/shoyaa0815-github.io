<?php session_start(); ?>

<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="main.css">
    <style>
        /* main.css */

/* พื้นหลังและฟอนต์ */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* กล่องล็อกอิน */
.container {
    background: white;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    box-sizing: border-box;
    text-align: center;
}

/* หัวข้อ */
.container h1 {
    margin-bottom: 1.5rem;
    color: #333;
}

/* label และ input */
label {
    display: block;
    text-align: left;
    margin: 1rem 0 0.5rem;
    font-weight: bold;
    color: #444;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
}

/* ปุ่ม */
button {
    background-color: #4CAF50;
    color: white;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

/* ลิงก์ */
p {
    margin-top: 1rem;
    font-size: 0.95rem;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* กล่อง error */
.error {
    background-color: #ffdddd;
    color: #d8000c;
    padding: 10px;
    border: 1px solid #d8000c;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: left;
}

    </style>
</head>

<body class="card">
    <div class="container">
        <?php if (isset($_SESSION['error'])) : ?>
            <div class="error" role="alert">
                <?php
                echo $_SESSION['error'];
                ?>
            </div>
        <?php endif; ?>
        <h1>Login</h1>
        <form action="" method="post" id="login">
            <label for="username" name="username">กรอกชื่อผู้ใช้ :</label>
            <input type="text" placeholder="Username" id="username" name="username-login">

            <label for="password" name="password">กรอกรหัสผ่าน :</label>
            <input type="password" placeholder="password" id="password" name="password-login">

            <button type="submit" name="login">ลงชื่อเข้าใช้</button>
        </form>
        <p>ยังไม่มีบัญชี <a href="register.php">สร้างเลย</a></p>
    </div>
</body>

</html>

<?php

if (isset($_POST['login'])) {
    $_SESSION['username_login'] = $_POST['username-login'];
    $_SESSION['password_login'] = md5($_POST['password-login']);

    if (isset($_SESSION['username_register']) && isset($_SESSION['password_register'])) {
        if ($_SESSION['username_login'] == $_SESSION['username_register'] && $_SESSION['password_login'] == $_SESSION['password_register']) {
            $_SESSION['action'] = "a";
            header("Location: index.html");
            exit();
        } else {
            $_SESSION['error'] = "ชื่อผู้ใช้หรือรหัสผ่านผิด";
            header("Location: login.php");
            exit();
        }
    } else {
        $_SESSION['error'] = "กรุณาลงทะเบียนก่อน";
        header("Location: login.php");
        exit();
    }
}

if (isset($_SESSION['error'])) {
    session_destroy();
}

?>

