function fun1(callBack){
    callBack()
}
var fun2=function (){
    console.log("Function1......................")
}
fun1(fun2)


function fun3(callBack){
    console.log(callBack)
    console.log(callBack())
}
var fun4=function(){
    console.log("Function4.....")
    return "Function four Sir..........1"
}
fun3(fun4)
fun3(function(){
    console.log("Function4.....")
    return "Function four Sir..........2"
})
fun3(()=> "Function four Sir..........3")

function fun5(callBack){
    console.log("Function 5..............")
    console.log(callBack("Hello JS"))
    console.log("Function 5 Closed")
}
fun5((name)=>{console.log("Arrow Function..........");return name})


function funcA(callBack1,callBack2){
    callBack1()
    console.log("A1")
    callBack2()
    console.log("A2")
}
function funcB(callBack){
    console.log("B1")
    callBack()
    console.log("B2")
}
funcA(()=>funcB(()=>console.log("Inside B")),()=>console.log("End Of A"))
//B1
//Inside B
//B2
//A1
//End Of A
//A2



function alpha(callBack1,callBack2,callBack3){
    console.log("Alpha Start")  
    //Alpha Start 
    //Beta Start 
    //Alpha Mid 
    //Beta Start 
    //Alpha End 
    //Gamma Start
    //Gamma End
    //Beta End 
    //Beta End
    callBack1(()=>{
        console.log("Alpha Mid")
        callBack2(()=>{
            console.log("Alpha End")
            callBack3()
        })
    })
}
function beta(callBack){
    console.log("Beta Start")
    callBack()
    console.log("Beta End")
}
function gamma(){
    console.log("Gamma Start")
    console.log("Gamma End")
}
alpha((innerCallBack)=>beta(innerCallBack),(innerCallBack)=>beta(innerCallBack),gamma)