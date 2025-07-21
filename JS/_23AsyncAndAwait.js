function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order Placed Successfully")
        },1000)})
}
function checkingStock(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Stock is Available")
        },2000)})
}
function confirmPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Payment Done Successfully")
            // reject("Payment Failed")
        },3000)})
}
function confirmingOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order Placed Successfully")
        },4000)})
}
function delivaringProduct(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Item Delivared Successfully")
        },5000)})
}

// placeOrder()
//     .then((res)=>{
//         console.log(res)
//         return checkingStock()
//     })
//     .then(res=>{
//         console.log(res)
//         return confirmPayment()
//     })
//     .then(res=>{
//         console.log(res)
//         return confirmingOrder()
//     })
//     .then(res=>{
//         console.log(res)
//         return delivaringProduct()
//     })
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))



async function getData(){
    try{
        let po=await placeOrder()
        console.log(po)
        let cs=await checkingStock()
        console.log(cs)
        let cp=await confirmPayment()
        console.log(cp)
        let co=await confirmingOrder()
        console.log(co)
        let dp=await delivaringProduct()
        console.log(dp)
    }
    catch(err){
        console.log(err)
    }
}
getData()
// getData().catch(err=>console.log(err))