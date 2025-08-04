<?php 
    if (isset($_POST['calculate'])) {

        $midterm_score= (int)$_POST['midterm_score'];
        $final_score= (int)$_POST['final_score'];

        $total_score= $midterm_score+ $final_score;

        if ($total_score >= 60) {
        } else {
        }
    }
?>





<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>โปรแกรมคำนวณผลการเรียน</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin-top: 5rem;
            margin-bottom: 5rem;
        }
        .card {
            padding: 2rem;
        }
        .result-section {
            border: 2px;
            padding: 1.5rem;
            margin-top: 2rem;
            border-radius: .5rem;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="card shadow-sm">
        <h2 class="text-center mb-4">📝 คำนวณผลการเรียน</h2>

        <form action="" method="post">
            <div class="mb-3">
                <label for="midterm_score" class="form-label"><b>คะแนนเก็บ (60%)</b></label>
                <input type="number" class="form-control" id="midterm_score" name="midterm_score" placeholder="กรอกคะแนนเก็บ (สูงสุด 60)" min="0" max="60" required>
            </div>
            <div class="mb-3">
                <label for="final_score" class="form-label"><b>คะแนนสอบ (40%)</b></label>
                <input type="number" class="form-control" id="final_score" name="final_score" placeholder="กรอกคะแนนสอบ (สูงสุด 40)" min="0" max="40" required>
            </div>
            <div class="d-grid">
                <button type="submit" name="calculate" class="btn btn-primary">คำนวณคะแนน</button>
            </div>
        </form>

            <?php 
                if (isset($_POST['calculate'])) {

                    $midterm_score= (int)$_POST['midterm_score'];
                    $final_score= (int)$_POST['final_score'];

                    $total_score= $midterm_score+ $final_score;

                    if ($total_score >= 60) {
            ?>
                    <div class="result-section">
                        <h3 class="text-center text-success mb-3">ผลการประเมิน: สอบผ่าน 🎉</h3>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">รายการ</th>
                                    <th scope="col" class="text-center">คะแนน</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>คะแนนเก็บ</td>
                                    <td class="text-center"><?php echo $midterm_score?></td>
                                </tr>
                                <tr>
                                    <td>คะแนนสอบ</td>
                                    <td class="text-center"><?php echo $final_score?></td>
                                </tr>
                                <tr class="table-primary">
                                    <td><b>คะแนนรวม</b></td>
                                    <td class="text-center"><b><?php echo $total_score?></b></td>
                                </tr>
                                <tr class="table-success">
                                    <td><b>ผลการประเมิน</b></td>
                                    <td class="text-center"><b>ผ่าน</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <?php
                    } else {
                    ?>
                        <div class="result-section">
                        <h3 class="text-center text-danger mb-3">ผลการประเมิน: สอบไม่ผ่าน 😥</h3>
                        <div class="alert alert-danger text-center" role="alert">
                            <h4>เสียใจด้วย คุณสอบไม่ผ่าน</h4>
                        </div>
                    </div>
                    <?php
                    
                    }
                    }?>
                




    </div>
</div>

</body>
</html>
