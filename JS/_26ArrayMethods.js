// arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.push(4)) // add element and returns new length
// console.log(arr)
// console.log(arr.unshift(0)) // add element at first and returns new length
// console.log(arr)
// console.log(arr.shift())  // returns first element in array and removes first element
// console.log(arr)
// console.log(arr.pop()) // returns last elemtn in array and removes last element
// console.log(arr)
// arr.length=0 // removing all elements
// console.log(arr) 
// arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.slice(2))
// console.log(arr)
// console.log(arr.slice(2,7))
// console.log(arr)
// console.log(arr.splice(5))
// console.log(arr)
// console.log(arr.splice(3,5))
// console.log(arr)
// arr.reverse()
// console.log(arr)
// console.log(arr.reverse())
arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(element => {
//     console.log(element)
// });
// arr.forEach((element,index) => {
//     console.log(element,index)
// });
// arr.forEach((element,index,arr) => {
//     console.log(element,index,arr)
// });
// arr.forEach((element,index) => {
//     if(index%2==0){
//         console.log(element,arr[index])
//     }
// });
// arr.map(element=>element+10)
// console.log(newarr)
// arr.map((element,index)=>{
//     console.log(element,index)
// })
// arr.map((element,index,arr)=>{
//     console.log(element,index,arr)
// })
// var newarr=arr.map(element=>element*2)
// console.log(newarr)
// var newarr=arr.map((element,index)=>element%2)
// console.log(newarr)
// arr.filter(element=>console.log(element))
// arr.filter((element,index)=>console.log(element,index))
// arr.filter((element,index,arr)=>console.log(element,index,arr))
// var res=arr.filter(element=>element%3)
// console.log(res)
// var res=arr.filter(element=>element%3==0)
// console.log(res)
// var res=arr.filter(element=>element%3==0+1)
// console.log(res)
var sum=arr.reduce((accumalator,element)=>accumalator+element,0)
console.log(sum)
var sum=arr.reduce((accumalator,element)=>accumalator+element)
console.log(sum)
var sum=arr.reduce((accumalator,element)=>accumalator+element,10)
console.log(sum)
var sum=arr.reduceRight((accumalator,element)=>accumalator+element)
console.log(sum)
var sum=arr.reduceRight((accumalator,element)=>accumalator+element,0)
console.log(sum)
var sum=arr.reduceRight((accumalator,element)=>accumalator+element,10)
console.log(sum)