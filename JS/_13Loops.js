var table=function(num){
    for (var a=1;  a<=10; a++) {
        console.log(`${num} * ${a} = ${num*a}`)
    }
}
table(2)
console.log()
table(5)

var a=521
var res=0;
while(a!=0){
    res=res*10+(a%10)
    a=Math.floor(a/10)
}
console.log(a)
console.log(res)

var b=1;
do{
    console.log("Java Script",b)
    b++
}
while(b<10);


