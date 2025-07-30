// import {getProduct, getStringArray, getSum} from './module.js'
// console.log(getSum(1,2,3,4,5,6,7,8,9,10))
// console.log(getProduct(1,2,3,4,5,6,7,8,9,10))
// console.log(getStringArray("Hello World"))
// console.log(getStringArray("87346834"))
// console.log(getStringArray(1234567890))

// import {getProduct as product, getStringArray as array, getSum as sum} from './module.js'
// console.log(sum(1,2,3,4,5,6,7,8,9,10))
// console.log(product(1,2,3,4,5,6,7,8,9,10))
// console.log(array("Hello World"))
// console.log(array("87346834"))
// console.log(array(1234567890))

// import * as myMethods from "./module.js";
// console.log(myMethods)
// console.log(myMethods.getSum())
// console.log(myMethods.getProduct(1,2,3,4,5,6,7,8,9,10))
// console.log(myMethods.getStringArray("Hello World"))
// console.log(myMethods.getStringArray(1234567890))
// for(let key in myMethods){
//     console.log(key,myMethods[key]())
// }

// import("./module.js") // return promise object
// .then(response=>{
//     for(let key in response){
//         console.log(key,response[key]())
//     }
// })

// let modules=await import("./module.js") // returns promise object
// for(let key in modules){
//     console.log(key,modules[key]())
// }

// import trimSpac from "./module.js"
// import trimSpac,* as myMethodss from "./module.js";
// console.log(myMethodss.getStringArray(trimSpac("            Bhavani Prasad")))
import("./module.js") // Type Error Because No Parameters Are Passed To The trimspaces method default undefined parameter not works on trim and to uppercase method results error 
.then(response=>{
    for(let key in response){
        console.log(key,response[key]()) 
    }
})