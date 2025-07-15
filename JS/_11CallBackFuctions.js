function processOrder(orderId,callBack){
    if(orderId==""){
        callBack(false,"Order Failed......")
    }
    else{
        callBack(true,"Order Placed Successfully.....")
    }
}

function shipOrder(orderId,callBack){
    if(orderId==""){
        callBack(false,"Shipping Failed......")
    }
    else{
        callBack(true,"Order Shipped With Tracking xy123.....")
    }
}

function dispatchOrder(orderId,callBack){
    if(orderId==""){
        callBack(false,"Dispatch Failed......")
    }
    else{
        callBack(true,"Order Dispatched With Vehicle 1.....")
    }
}

function outForDelivary(orderId,callBack){
    if(orderId==""){
        callBack(false,"Delivary Failed......")
    }
    else{
        callBack(true,"Order Is Out For Delivary.....")
    }
}

processOrder("valid",(status,msg)=>{
    if(status){
        console.log(msg)
        shipOrder("PASS",(status,msg)=>{
            if(status){
                console.log(msg)
                dispatchOrder("Tracking",(status,msg)=>{
                    if(status){
                        console.log(msg)
                        outForDelivary("Ready To Delivar",(status,msg)=>{
                            if(status){
                                console.log(msg)
                            }
                            else{
                                console.log(msg)
                            }
                        })
                    }
                    else{
                        console.log(msg)
                    }
                })
            }
            else{
                console.log(msg)
            }
        })
    }
    else{
        console.log(msg)
    }
})