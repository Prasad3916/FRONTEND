import validationModule from './Modules.js'
let username=document.getElementById("username");
let password=document.getElementById("password");
let cpassword=document.getElementById("cpassword")
let preferredlanguage=document.getElementById("preferredlanguage")
let form=document.querySelector("form")
let userspan=document.getElementById("userspan")
let pwdspan=document.getElementById("pwdspan")
let cpwdspan=document.getElementById("cpwdspan")
let plgspan=document.getElementById("plgspan")
console.log(username,password,cpassword,preferredlanguage,form)
console.log(userspan,pwdspan,cpwdspan,plgspan)
validationModule(username,password,cpassword,preferredlanguage,form,userspan
    ,pwdspan,cpwdspan,plgspan)