// var a=new Promise((resolve,reject)=>{
//     reject("Hello2");
//     resolve("Hello1")
// })
// a.then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res)
// })
// console.log(a)
// Promise
//     .resolve("Hello123")
//     .then(res=>res)
//     .then(res=>res)
//     .then(res=>console.log(res))


// console.log()
// function promise(){return new Promise((resolve,reject)=>{resolve("Prasad")})}
// promise().then(res=>console.log(res))
// console.log()
// function fun(){
//     console.log("Hello World")
// }
// var a=new Promise((res,rej)=>res(fun))
// a.then((res)=>res())



// console.log()
// console.log("Customer Ordering")
// function orderPlaced(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Order Placed Successfully")
//         }, 1000);
//     })
// }
// function checkingStock(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Stock Available")
//         }, 2000);
//     })
// }
// function confirmPayment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Payment Done Successfully")
//         }, 3000);
//     })
// }
// function outForDelivary(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Out Of Delivary")
//         }, 4000);
//     })
// }
// function itemDelivered(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Item Delivered Successfully")
//         }, 5000);
//     })
// }


// orderPlaced()
//     .then(res=>{
//         console.log(res)
//         return checkingStock()
//     })
//     .then(res=>{
//         console.log(res)
//         return confirmPayment()
//     })
//     .then(res=>{
//         console.log(res)
//         return outForDelivary()
//     })
//     .then(res=>{
//         console.log(res)
//         return itemDelivered()
//     })
//     .then((res)=>console.log(res))
//     .catch(()=>console.log("Delivary Failed Due To Technical Issue"))


// var a=Promise.resolve("Hurry")
// a.then(msg=>console.log(msg+" Hmm"),err=>console.log(err+" phew"))
// a.catch(msg=>console.log(msg))



var promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 fulfilled")
    }, 1000);
})
var promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Promise 2 fulfilled")
    }, 2000);
})
var promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 3 fulfilled")
    }, 3000);
})


var res1=Promise.all([promise1,promise2,promise3])
res1.then(res=>console.log(res))
.catch(res=>console.log(res))
console.log(res1)

var res2=Promise.allSettled([promise1,promise2,promise3])
res2.then(res=>console.log(res))
.catch(res=>console.log(res))
console.log(res2)