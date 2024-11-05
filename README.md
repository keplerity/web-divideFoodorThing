# Sharing Calculator

โปรเจค Sharing Calculator เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย React เพื่อช่วยคำนวณและหารค่าใช้จ่ายอาหารระหว่างผู้ใช้หลายคน เหมาะสำหรับการศึกษาและสามารถนำไปต่อยอดได้ตามความต้องการ

### 🛠 เทคโนโลยีที่ใช้
- React - สำหรับโครงสร้างและการจัดการ UI
- Material UI - สำหรับการตกแต่ง UI ให้มีความสวยงามและเป็นมืออาชีพ
- CSS-in-JS - ใช้ร่วมกับ Material UI ในการกำหนดสไตล์
 
### 🚀 การติดตั้งและการใช้งาน
1. Clone Repo นี้ลงในโปรเจคของคุณ
```
git clone https://github.com/username/food-sharing-calculator.git
cd food-sharing-calculator
```

2. ติดตั้ง npm ใน Dependencies
```
npm install
```

3. เริ่มต้นการใช้งาน
```
npm run dev
```

### 🧩 โครงสร้างโปรเจ็คนี้่
```
sharing-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js           # ส่วนหัวของแอป เช่น จำนวนคนและปุ่มเพิ่มรายการ
│   │   ├── ItemTable.js        # ตารางแสดงรายการอาหารทั้งหมด
│   │   ├── ItemDetail.js       # แสดงรายละเอียดของแต่ละรายการ
│   │   └── AddItemModal.js     # Modal สำหรับเพิ่มรายการอาหารใหม่
│   ├── App.js                  # ไฟล์หลักที่รวม Components ต่าง ๆ
│   ├── index.js
│   └── App.css                 # สไตล์ css พื้นฐานของแอป
└── package.json
```

สามารถ Fork โปรเจคนี้และพัฒนาเพิ่มเติมได้ หากต้องการส่ง Pull Request เพื่อแก้ไขหรือเพิ่มฟีเจอร์ใหม่ ๆ ยินดีต้อนรับนะครับ!
