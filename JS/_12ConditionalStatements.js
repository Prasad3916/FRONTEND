var a=20
var b=30
//Simple if
if(a==b){
    console.log("Both Are Equal")
}
if(a<b){
    console.log("B is Bigger")
}
if(a>b){
    console.log("A is Bigger")
}
//if else
if(a>b){
    console.log("A is Bigger")
}
else{
    console.log("B is Bigger")
}

// ladder if
if(a>b){
    console.log("A is Bigger")
}
else if(a<b){
    console.log("B is Bigger")
}
else{
    console.log("Both Are Equal")
}

//nested if
if(a<b){
    console.log("B is Bigger")
}
else{
    if(a>b){
        console.log("A is Bigger")
    }
    else{
        console.log("Both Are Equal")
    }
}


function largestNumber(num1,num2,callBack){

    console.log(callBack(num1,num2))
    
}
largestNumber(30,30,(num1,num2)=>{
    if(num1>num2){
        return `${num1} "is Big`
    }
    else if(num1<num2){
        return `${num2} is Big`
    }
    else{
        return "Both Are Equal" 
    }
})