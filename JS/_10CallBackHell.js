function add(val,callBack){
    callBack(val+10,true)
}
function sub(val,callBack){
    callBack(val-20,true)
}
function mul(val,callBack){
    callBack(val*5,true)
}
function div(val,callBack){
    callBack(val/5,true)
}

add(20,(res)=>{
    console.log(res)
})
sub(15,(res)=>{
    console.log(res)
})
mul(35,(res)=>{
    console.log(res)
})
div(65,(res)=>{
    console.log(res)
})

console.log()
add(20,(res)=>{
    sub(res,(res)=>{
        mul(res,(res)=>{
            div(res,(res)=>{
                console.log(res)
            })
        })
    })
})

console.log()
console.log("Call Back Hell")
add(30,(res,status)=>{
    if(status){
        sub(res,(res,status)=>{
            if(status){
                mul(res,(res,status)=>{
                    if(status){
                        div(res,(res,status)=>{
                            if(status){
                                console.log(res)
                            }
                            else{
                                console.error("Division Failed")
                            }
                        })
                    }
                    else{
                        console.error("Multiplication Failed")
                    }
                })
            }
            else{
                console.error("Subtraction Failed")
            }
        })
    }
    else{
        console.error("Addition Failed")
    }
})

   
