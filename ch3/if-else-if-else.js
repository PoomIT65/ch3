const prompt = require ('prompt-sync') ()
let size= parseFloat(prompt ('ขนาดของไฟร์ (ไบต์) >>'))
var unit
if (size >= 1099511627776) {
    size /= 1099511627776
    unit = "TB"
}else if (size >= 1083741824) {
    size /= 1083741824
    unit = "GB"
}else if (size >= 1048576) {
    size /= 1048576
    unit = "MB"
}else if (size >= 1024) {
    size /= 1024
    unit = "KB"
}else {
    unit = "Byte"
}
console.log(`ของไฟล์ที่เหมาะสมคือ :)
${size.toFixed(2)} ${unit} `)