# LINE Notify
---- 
- สร้าง Line notify-bot ได้ง่ายๆ ผ่าน 3 รูปแบบการส่งข้อความ ทั้งข้อความตัวอักษร รูปภาพ หรือสติ๊กเกอร์
ติดตั้ง และใช้งานได้เลย

## เตรียมพร้อม
---- 
- สร้าง Token ของคุณได้ที่ https://notify-bot.line.me

## ติดตั้งและใช้งาน

```bash
$ npm install
```

## Usage

```javascript
const config = require('./config/config')
const { sendText, sendPicture, sendSticker } = require('./lineNotify/lineNotify')

// ======================== Test send Text ===========================
let msgText = `\nทะเบียน ฮ 999\nผู้ขับ. รวดเร็ว ปราดเปรี่ยว\nความเร็ว 93 กม./ชม.\nวันเวลา ${new Date()}\nโทร 089-9999999`
// ==== > normal call < ====
sendText(msgText)
// ==== > call with callback < ====
sendText(msgText).then(result => {
    console.log('Result = ', result)
}, err => {
    console.log('sendText err ', err)
})
// ======================== End Test send Text =======================

// ======================== Test send Image ===========================
let msgImage = 'image test'
let imageThumbnail = 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'
let imageFullsize = 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'
sendPicture(msgImage,imageThumbnail,imageFullsize)
// ======================== End Test send Image =======================

// ======================== Test send Sticker =========================
let msgSticker = 'sticker test'
let stickerPackageId = 1
let stickerId = 113
sendSticker(msgSticker, stickerPackageId, stickerId)
// ======================== End Test send Sticker =====================
```

## อ้างอิง
- [LINE Notify API Document](https://notify-bot.line.me/doc/)

**Code by NIZE => more on https://github.com/winaibuttasart**