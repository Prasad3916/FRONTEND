function validationModule(username,password,cpassword,preferredlanguage,form,userspan
    ,pwdspan,cpwdspan,plgspan
){
    // let username=document.getElementById("username");
    // let password=document.getElementById("password");
    // let cpassword=document.getElementById("cpassword")
    // let preferredlanguage=document.getElementById("preferredlanguage")
    // let form=document.querySelector("form")
    // let userspan=document.getElementById("userspan")
    // let pwdspan=document.getElementById("pwdspan")
    // let cpwdspan=document.getElementById("cpwdspan")
    // let plgspan=document.getElementById("plgspan")
    // console.log(username,password,cpassword,preferredlanguage,form)
    // console.log(userspan,pwdspan,cpwdspan,plgspan)
    form.addEventListener("submit",function(event){
        if(!username.value || !password.value || !cpassword.value || !preferredlanguage.value){
            event.preventDefault()
        }
        if (password.value !== cpassword.value) {
            cpwdspan.textContent = "Passwords do not match"
            cpwdspan.className = "invalid"
            event.preventDefault()
        }
    })

    function fieldValidation(field,fieldspan){
    field.addEventListener("input",()=>{
        if(field.value.length<1){
            field.classList.remove("success")
        }
        if(field.value.length>0 && field.value.length<5){
            fieldspan.innerHTML=`${field.id} contains atleast 5 characters`
            field.className="invalid"
            fieldspan.className="invalid"
        }
        else{
            
            fieldspan.innerHTML=``
            field.className="success"
            // fieldspan.classList.remove("invalid")
            fieldspan.classList.remove = "invalid"
            return true
        }
    })
    }
    fieldValidation(username,userspan)
    fieldValidation(password,pwdspan)
    fieldValidation(cpassword,cpwdspan)
    fieldValidation(preferredlanguage,plgspan)


    function blurValidation(field){
    field.addEventListener("blur",()=>{
    if (!field.value || field.value.length < 5) {
        field.style.backgroundColor = "black"
        field.style.color = "white"
    }

    })
    }
    blurValidation(username,userspan)
    blurValidation(password,pwdspan)
    blurValidation(cpassword,cpwdspan)
    blurValidation(preferredlanguage,plgspan)
    function focusValidation(field,fieldspan){
    field.addEventListener("focus",()=>{
        field.style.backgroundColor = ""
        field.style.color = "black"
    })
    }
    focusValidation(username,userspan)
    focusValidation(password,pwdspan)
    focusValidation(cpassword,cpwdspan)
    focusValidation(preferredlanguage,plgspan)


}

export default validationModule