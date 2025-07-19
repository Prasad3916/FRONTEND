// var a=Promise.reject("Hurry")
// a.then(msg=>console.log(msg+" Hmm"),err=>console.log(err+" phew"))
// a.catch(msg=>console.log(msg))

var promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Promise 1 rejected")
    }, 1000);
})
var promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Promise 2 rejected")
    }, 200);
})
var promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 3 fulfilled")
    }, 100);
})

// promise1.then((res)=>{
//     console.log(res)
//     promise2.then((res)=>{
//         console.log(res)
//         promise3.then(res=>{
//             console.log(res)
//         })
//     })
// })

// promise1
//     .then(res=>{
//         console.log(res)
//         return promise2
//     })
//     .then(res=>{
//         console.log(res)
//         return promise3
//     })
//     .then(res=>{
//         console.log(res)
//     })


var res1=Promise.all([promise1,promise2,promise3])
res1.then(res=>console.log(res))
.catch(res=>console.log("all method result "+res))

var res2=Promise.allSettled([promise1,promise2,promise3])
res2.then(res=>console.log(res))

var res3=Promise.race([promise1,promise2,promise3])
res3.then(res=>console.log("race method result "+res))
.catch(res=>console.log(res))

var res4=Promise.any([promise1,promise2,promise3])
res4.then(res=>console.log("any method result "+res))
.catch(res=>console.log("any method result "+res))  //error if all promises were rejected