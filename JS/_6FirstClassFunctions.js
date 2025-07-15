var fun=function printData(){
    console.log("HELLO WORLD")
}
//console.log(printData()) ReferenceError: printData is not defined
console.log(fun) // [Function: printData]
fun() // HELLO WORLD
console.log()
var fun2=function printData1(fun1){
    console.log(fun1)
    fun1()
}
fun2(fun)
console.log()
var sum=function operation(a,b){
    console.log(a+b)
}
sum(10,32)
console.log(sum)


