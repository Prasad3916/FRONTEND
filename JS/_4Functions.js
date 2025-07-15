function printData1(a,b){
    console.log(a+b)
}
printData1()
printData1(10)
printData1(10,undefined)
printData1(undefined,20)
printData1(10,20)
printData1(undefined,undefined)
console.log()
function printData2(a=1,b=1){
    console.log(a+b)
}
printData2()
printData2(10)
printData2(10,undefined)
printData2(undefined,20)
printData2(10,20)
printData2(undefined,undefined)
console.log()
function addition(a,b){
    console.log("Addition of ",a,b,a+b)
    subtraction(a,b)
}
function subtraction(a,b){
    console.log("Subtraction of ",a,"minus",b,a-b)
    multiplication(a,b,2)
}
function multiplication(a,b,c){
    console.log("Multiplication of ",a,b,a*b*c)
    division(a,b)
}
function division(a,b){
    console.log("Division of ",a,b,a/b)
    modulas(a,b)
}
function modulas(a,b){
    console.log("Modulas of ",a,b,a%b)
    power(a,b)
}
function power(a,b){
    console.log(a," Square of ",a**2)
    console.log(b," Square of ",b**2)
}
addition(10,20)
