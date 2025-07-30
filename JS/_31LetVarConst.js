function fun1(){
    var a=30;
    console.log(a)
}
fun1()
// console.log(a)

function fun2(){
    let a=30;
    console.log(a)
}
fun2()
// console.log(a)

function fun3(){
    const a=30;
    console.log(a)
}
fun3()
// console.log(a)

for(var b=0;b<10;b++){

}
console.log(b)

for(let c=0;c<10;c++){

}
// console.log(c)

// for(const d=0;d<10;d++){

// }
// console.log(d)


for(var e=1;e<=5;e++){
    setTimeout(()=>{
        console.log(e)
    },1000*e)
}

for(let f=1;f<=5;f++){
    setTimeout(()=>{
        console.log(f)
    },1000*f)
}