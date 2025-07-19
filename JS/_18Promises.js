var a=new Promise((resolve,reject)=>{
    reject("Hello2");
    resolve("Hello1")
})
a.then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})
console.log(a)
Promise
    .resolve("Hello123")
    .then(res=>res)
    .then(res=>res)
    .then(res=>console.log(res))


console.log()
function promise(){return new Promise((resolve,reject)=>{resolve("Prasad")})}
promise().then(res=>console.log(res))
console.log()
function fun(){
    console.log("Hello World")
}
var a=new Promise((res,rej)=>res(fun))
a.then((res)=>res())



console.log()
console.log("Customer Ordering")
function orderPlaced(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Order Placed Successfully")
        }, 1000);
    })
}
function checkingStock(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Stock Available")
        }, 2000);
    })
}
function confirmPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Payment Done Successfully")
        }, 3000);
    })
}
function outForDelivary(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Out Of Delivary")
        }, 4000);
    })
}
function itemDelivered(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Item Delivered Successfully")
        }, 5000);
    })
}


orderPlaced()
    .then(res=>{
        console.log(res)
        return checkingStock()
    })
    .then(res=>{
        console.log(res)
        return confirmPayment()
    })
    .then(res=>{
        console.log(res)
        return outForDelivary()
    })
    .then(res=>{
        console.log(res)
        return itemDelivered()
    })
    .then((res)=>console.log(res))
    .catch(()=>console.log("Delivary Failed Due To Technical Issue"))

