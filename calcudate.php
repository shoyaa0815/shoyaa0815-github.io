<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คำนวณอายุแบบง่าย (พ.ศ.)</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2 class="mb-4">คำนวณอายุของคุณ (กรอกปี พ.ศ.)</h2>

    <form method="post" action="">
        <div class="form-group">
            <label for="birth_year_be">ปีเกิด (พ.ศ.):</label>
            <input type="number" class="form-control" id="birth_year_be" name="birth_year_be" placeholder="เช่น 2530" required>
        </div>
        <div class="form-group">
            <label for="birth_month">เดือนเกิด:</label>
            <input type="number" class="form-control" id="birth_month" name="birth_month" placeholder="เช่น 1 (ม.ค.) หรือ 12 (ธ.ค.)" min="1" max="12" required>
        </div>
        <div class="form-group">
            <label for="birth_day">วันที่:</label>
            <input type="number" class="form-control" id="birth_day" name="birth_day" placeholder="เช่น 15" min="1" max="31" required>
        </div>
        <button type="submit" class="btn btn-primary">คำนวณ</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["birth_year_be"]) && isset($_POST["birth_month"]) && isset($_POST["birth_day"])) {

        $birthYearBE = (int)$_POST["birth_year_be"];
        $birthMonth = (int)$_POST["birth_month"];
        $birthDay = (int)$_POST["birth_day"];  

        $birthYearCE = $birthYearBE - 543;

        $birthdateString = sprintf("%04d-%02d-%02d", $birthYearCE, $birthMonth, $birthDay);

     
        if (checkdate($birthMonth, $birthDay, $birthYearCE)) {

            $birthdate = new DateTime($birthdateString);
            $today = new DateTime();

            $interval = $today->diff($birthdate);

            echo "<div class='mt-4 alert alert-success'>";
            echo "คุณเกิดมาแล้ว: ";
            echo "<strong>" . $interval->y . "</strong> ปี, ";
            echo "<strong>" . $interval->m . "</strong> เดือน, และ ";
            echo "<strong>" . $interval->d . "</strong> วัน";
            echo "</div>";

        } else {
            echo "<div class='mt-4 alert alert-danger'>";
            echo "<strong>ข้อผิดพลาด:</strong> วันที่ที่คุณกรอกไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง (เช่น เดือนกุมภาพันธ์ไม่มีวันที่ 30)";
            echo "</div>";
        }
    }

    echo "<p class='mt-3'>ปีปัจจุบันในพุทธศักราช: <strong>" . (date("Y") + 543) . "</strong></p>";
    echo "<p>วันนี้: <strong>" . date("Y.M.D") . "</strong></p>";
    ?>
</div>

</body>
</html>
