let arr=[1,2,3,4,5,6,7,8,9,10]
let [a,b,c,d,e,f,g,h,i,j]=arr
let [a1,,c1,,e1,,g1,,i1,]=arr
//rest operator
let [a2,...rest1]=arr
console.log(a,b,c,d,e,f,g,h,i,j)
console.log(a,c,d,e,f,h,i,j)
console.log(a1,c1,e1,g1,i1)
console.log(a2,rest1)
let [ele1=10,ele2,ele3,ele4,ele5]=arr
console.log(ele1,ele5)
let arr2=[undefined,2,3,4,5]
let [element1=10,...element2]=arr2
console.log(element1)
console.log(element2)

function getSum(...array){
    let sum=array.reduce((acc,sum)=>acc+sum)
    console.log(sum)
}
getSum(1,2,3,4,5,6,7,8,9,10)

let obj={
    "name":"Prasad",
    "age":21,
    "address":"vijayawada"
}
console.log(obj)
let {name,age,state="Andhra Pradesh",address}=obj
console.log(name,age,address)
console.log(state)
let {name:Name,age:Age,address:Address}=obj
console.log(Name,Age,Address)
let {name:studentName,age:studentAge,address:studentAddress,state:studentState="Andra Pradesh"}=obj 
console.log(studentName,studentAge,studentAddress,studentState)
let{name:sName,...remainingData}=obj
console.log(sName,remainingData)  
let object={"name":"P Bhavani Prasad","age":21,"address":"Vijayawada"}
let {name:uName,age:uAge,address:uAddress,state:uState="Andhra",...rest}=object 
console.log(uName,uAge,uAddress,uState,rest) 


function fun({name,age,address,state="Andhra Pradesh"}){
    console.log(name,age,address,state)
}
fun(object)

function fun({name,...rem}){
    console.log(name,rem)
}
fun(object)


var arr3=[1,2,3,4,5,6,7,8,9,10]
let arr5=arr3   //Shallow Copy
arr5.push(11)
console.log(arr3)
console.log(arr5) 
console.log(arr3)
console.log(...arr3)
let [a12,b12,...c12]=arr3
console.log(a12,b12)
console.log(c12)
let arr4=[...arr3]  // Deep Copy
arr4.push(12)
console.log(arr3)
console.log(arr4) 

let info={"state":"Andhra Pradesh","Capital":"Amaravathi","Country":"India"}
let info2={"District":"NTR","CM":"NTR","ItMinister":"Lokesh"}
let {Country,...res}=info
let {District,...res1}=info2
console.log(res)
console.log(res1)
console.log(Country)
let info3={...res,...res1}
console.log(info3)


let str="Prasad"
console.log(str)
console.log(...str)
console.log([...str])
function fun3([...str]){
    console.log(...str)
}
fun3(str)

