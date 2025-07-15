var arr=[1.2,2,3,"JAVA SCRIPT",function(){console.log(arr[3])},"JAVA".toLowerCase()]
console.log(arr)
console.log(arr[5])
console.log()
for(var res of arr){
    console.log(res)
}
console.log()
for(var index of arr){
    console.log(index)
}


arr.shift(10)
console.log(arr)
arr.unshift(10)
console.log(arr)
arr.push(45)
console.log(arr)
arr.pop()
console.log(arr)

console.log(arr.splice(2,1))
console.log(arr)
console.log(arr.slice(2,4))

console.log()
var array=[1,23,4,5,22,12,3,4,564,63,34,13,65,65,23,45,64,34,348,232,32,76,32,32,32,456,3,2,64,53]
var index=0;
while(index<array.length){
    if(array[index]%2!=0 && index%2!=0){
        console.log(array[index])
    }
    index++;
}

console.log(array.pop())
console.log(array)