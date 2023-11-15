const prompt = require ('prompt-sync') ()
let passwordchaeck = parseFloat(prompt ('รหัสผ่านถูกต้อง'))
correctpassword = 1234
var passwordresult
if (passwordchaeck = realpassword){
    passwordresult = ("password ไม่ถูกต้อง")
}else {
    passwordresult = ("password ถูกต้อง")
}
console.log(passwordresult)