var fun=function(funn){
    funn()
    console.log(funn)
}
var fun1=function(){
    console.log("Function 1")
}
var fun2=function(){
    console.log("Function 2")
}
var fun3=function(){
    console.log("Function 3")
}
var fun4=function(){
    console.log("Function 4")
}
var fun5=function(){
    console.log("Function 5")
}
fun(fun1)
fun(fun2)
fun(fun3)
fun(fun4)
fun(fun5)
console.log()
var operation=function(operationn){
    operationn(300,200)
    console.log(operationn)
}
var addition=function(a,b){
    console.log("Addition of ",a,b,"is",a+b)
}
var subtraction=function(a,b){
    console.log("Subtraction of ",a,b,"is",a-b)
}
var multiplication=function(a,b){
    console.log("Multiplication of ",a,b,"is",a*b)
}
var division=function(a,b){
    console.log("Division of ",a,b,"is",a/b)
}
var modulas=function(a,b){
    console.log("Modulas of ",a,b,"is",a%b)
}
operation(addition)
operation(subtraction)
operation(multiplication)
operation(division)
operation(modulas)


console.log()
function caller(funnnn1,funnnn2){
    console.log(funnnn1)
    funnnn1()
    console.log(funnnn2)
    funnnn2("XYZ")
}
caller(function(){console.log("ABC")},function(name){console.log(name)})

function getLowerCase(meth){
    console.log(meth)
    console.log(meth("JAVA SCRIPT IS AWESOME"))
}

getLowerCase(function(name){
    return name.toLowerCase()
})