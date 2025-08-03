const { type } = require("@testing-library/user-event/dist/type")

console.log(typeof({}+[])) // object + anything returns String
console.log(typeof({}-[])) // object + anything returns number
if([1,2]){
    console.log("HELLO")
}
console.log(typeof({}+1))

const obj={
    fullname:{
        firstname:"Bhavani Prasad",
        lastname:"Pambi"
    },
    age:21,
    gender:"Male",
    address:{
        street:"Road No 3",
        area : "KPHB",
        pincode:521229

    }
}

let {fullname:{firstname,lastname},age,gender,address:{street,area,pincode}}=obj
console.log(`Name : ${lastname} ${firstname} \nAge : ${age} \nGender : ${gender} \nAddress : ${street} , ${area} , ${pincode}`);

console.log(typeof typeof 3);