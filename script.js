<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ผลงาน - Shoya</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <nav id="navbar">
    <div class="nav-container">
      <div class="logo">Shoya</div>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html"><span>หน้าหลัก</span></a></li>
        <li><a href="projects.html"><span>ผลงาน</span></a></li>
        <li><a href="education.html"><span>ประวัติการศึกษา</span></a></li>
        <li><a href="activity.html"><span>กิจกรรม</span></a></li>
        <li><a href="about.html"><span>เกี่ยวกับฉัน</span></a></li>
        <li><a href="contact.html"><span>ติดต่อ</span></a></li>
      </ul>
    </div>
  </nav>

  <section class="projects">
    <h2>ผลงาน</h2>

    <div class="project">
      <h3>โปรเจกต์ 1: บอทเทรดอัตโนมัติ IQ Option</h3>
      <p>โปรเจกต์นี้เป็นระบบเทรดอัตโนมัติที่เขียนด้วยภาษา Python เพื่อทำการตัดสินใจซื้อขายบน IQ Option โดยบอทจะวิเคราะห์ข้อมูลตลาดแบบเรียลไทม์ และซื้อขายตามกลยุทธ์ที่กำหนดไว้ล่วงหน้า</p>

      <h4>1. การเชื่อมต่อกับ IQ Option </h4>
      <p>ส่วนนี้คือการเชื่อมต่อไปยังแพลตฟอร์มการซื้อขาย IQ Option เพื่อให้บอทสามารถส่งคำสั่งซื้อขายได้ ใช้ไลบรารี <code>IQ_Option</code> เพื่อสร้างการเชื่อมต่อ และตั้งค่าให้เชื่อมต่อกับ<strong>บัญชีฝึกหัด </strong> </p>
      
      <img src="s_website_images/login.jpg" alt="ภาพแสดงสถานะการเชื่อมต่อกับ IQ Option" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: การเชื่อมต่อและยอดคงเหลือในบัญชีฝึกหัด</p>

      <h4>2. รับข้อมูลแท่งเทียนแบบเรียลไทม์</h4>
      <p>ส่วนนี้คือการรวบรวมข้อมูลตลาด บอทจะเริ่มสตรีมข้อมูลแท่งเทียน สำหรับสินทรัพย์ที่กำหนด (เช่น "EURUSD-OTC") ในช่วงเวลา 60 วินาที (แท่งเทียน 1 นาที) และดึงข้อมูลแท่งเทียน <strong>สามแท่งสุดท้ายที่สมบูรณ์แล้ว</strong> เพื่อนำมาวิเคราะห์</p>
      
      <img src="s_website_images/candles_data.jpg" alt="ภาพข้อมูลแท่งเทียนเรียลไทม์" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: การแสดงข้อมูลแท่งเทียนแบบเรียลไทม์จากแพลตฟอร์ม</p>

      <h4>3. การวิเคราะห์รูปแบบแท่งเทียน </h4>
      <p>บอทจะวิเคราะห์ราคาเปิด , ราคาปิด , ราคาสูงสุด  และราคาต่ำสุด  ของแท่งเทียนแต่ละแท่ง เพื่อกำหนดสี (เขียวสำหรับขาขึ้น, แดงสำหรับขาลง, โดจิสำหรับเป็นกลาง) และบอกรูปแบบการซื้อขาย</p>
      <p><strong>เงื่อนไขหลัก:</strong></p>
      <ul>
        <li><strong>เงื่อนไขออปชั่น Call (ซื้อขึ้น):</strong> บอทจะซื้อ "CALL" ถ้าแท่งเทียนสองแท่งสุดท้ายเป็นสี<strong>เขียว</strong>ทั้งคู่ และแท่งเทียนที่สามเปิดสูงกว่าราคาสูงสุดของแท่งที่สอง </li>
        <li><strong>เงื่อนไขออปชั่น Put (ซื้อลง):</strong> บอทจะซื้อ "PUT" ถ้าแท่งเทียนสองแท่งสุดท้ายเป็นสี<strong>แดง</strong>ทั้งคู่ และแท่งเทียนที่สามเปิดต่ำกว่าราคาต่ำสุดของแท่งที่สอง </li>
      </ul>
      
      <img src="s_website_images/calculate.jpg" alt="ภาพแสดงรูปแบบแท่งเทียนสำหรับ Buy Put" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: รูปแบบการคำนวณเพื่อตัดสินใจ ซื้อขึ้นหรือซื้อลง</p>

      <h4>4. การทำงานของบอท (ให้ทำงานต่อเนื่อง)</h4>
      <p>บอทจะทำงานในลูปไปเรื่อยๆ และจะตรวจสอบโอกาสการซื้อขายที่<strong>วินาทีที่ 54 ของทุกนาที</strong> ซึ่งเป็นเวลาสำคัญในการตัดสินใจก่อนที่แท่งเทียนใหม่จะขึ้น นอกจากนี้ยังมีระบบตรวจการเชื่อมต่อ เพื่อให้บอทเชื่อมใหม่ได้อัตโนมัติหากการเชื่อมต่อหลุด</p>
      
      <img src="s_website_images/loop_time.jpg" alt="ภาพแผนผังการทำงานของบอท" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: การทำงานวนซ้ำและตรวจสอบเวลาของบอท</p>

      <p><br></p><p><br></p><p><br></p><p><br></p>

      <img src="s_website_images/output.jpg" alt="ภาพแผนผังการทำงานของบอท" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: ผลลัพธ์การเชื่อมต่อที่รันด้วย Command Prompt</p>
      <img src="s_website_images/outputwin.jpg" alt="ภาพแผนผังการทำงานของบอท" class="project-content-img"/>
      <p style="text-align: center; font-size: 0.9em; color: #666;">ภาพตัวอย่าง: ผลลัพธ์การชนะที่รันด้วย Command Prompt</p>

      <div class="warning-box">
        <strong>คำเตือน: การซื้อขายมีความเสี่ยง!</strong>
        <p>โปรเจกต์บอทเทรดนี้เป็นเเค่การศึกษา การใช้บอทเทรดอัตโนมัติโดยไม่เข้าใจความเสี่ยงอาจทำให้เกิดความเสียหาย ควรพิจารณาอย่างรอบคอบและศึกษาข้อมูลก่อนซื้อขาย</p>
      </div>

      <h4>จุดแข็งโปรเจกต์</h4>
      <ul>
        <li><strong>ระบบอัตโนมัติ:</strong> บอททำงานได้ตลอดเวลาตามที่ตั้งไว้ </li>
        <li><strong>เงื่อนไข:</strong> ซื้อขายชัดเจนจากรูปแบบแท่งเทียน</li>
        <li><strong>ความเสถียร:</strong> มีระบบตรวจสอบและเชื่อมต่อใหม่อัตโนมัติหากการเชื่อมต่อหลุด</li>
      </ul>

      <p><br></p><p><br></p>

      <ul>
        <li><strong>ฟีเจอร์หลัก</strong>: เทรดอัตโนมัติ</li>
        <li><strong>เทคโนโลยีที่ใช้</strong>: Python, IQ Option API</li>
        <li><a href="https://github.com" target="_blank">ดูบน GitHub -ยังไม่ได้ใส่-</a></li>
      </ul>
    </div>
  </section>

  <footer>
    <p>Shoya Portfolio © 2025</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
