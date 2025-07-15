var a=20;
var b=30
console.log("-------Arithmetic Operators-------");
console.log("Addition ",a+b)
console.log("Subtraction ",a-b)
console.log("Multiplication ",a*b)
console.log("Division ",a/b)
console.log("Modulas ",a%b)
console.log("Power ",a**2)
console.log()
console.log("-------Assignement Operators-------");
console.log("Addition ",a+=b)
console.log("Subtraction ",a-=b)
console.log("Multiplication ",a*=b)
console.log("Division ",a/=b)
console.log("Modulas ",a%=b)
console.log("Power ",a**=2)
console.log()
console.log("-------Unary Operators-------")
console.log("Post Increment ",a++)
console.log("Pre Increment ",++a)
console.log("Post Decrement ",a--)
console.log("Pre Decrement ",--a)
console.log()
console.log("-------Comparison Operators-------")
console.log("Less Than",a>b)
console.log("Greater Than",a<b)
console.log("Less Than Or Equal To ",a<=b)
console.log("Greater Than Or Equal To ",a>=b)
console.log("Loose Equality to ",1==true) // Checks Values Only
console.log("Strict Equality to ",1===true) // Checks Data Type Also
console.log("Not Equals To ",a!=b)
console.log()
console.log("-------Bitwise Operators-------")
console.log("And Bitwise Operator ",a&b)
console.log("Or Bitwise Operator ",a|b)
console.log("Ex-or Bitwise Operator ",a^b)
console.log("Zero fill left shift Shift  Bitwise Operator",a<<2)
console.log("Signed right shiftBitwise Operator",b>>2)
console.log("Zero fill right shift Bitwise Operator",b>>>2)
console.log("NOT Bitwise Operator",~b)
console.log()
console.log("-------Logical Operators-------")
console.log("AND Operator",true && false)
console.log(true&& true)
console.log("OR Operator",true || false)
console.log(false||false)
console.log("NOT Operator",!true)
console.log(!false)
console.log("-------Ternary Operator")
var result=10>20?"10 Is Big":"20 Is Big"
console.log(result)
console.log()
console.log("-------Type Conversions-------")

var a=10;
console.log(typeof(a))
var b=20.98;
console.log(typeof(b))
var c="String"
console.log(typeof(c))
var d='String'
console.log(typeof(d))
var e=null
console.log(typeof(e))
var f=undefined
console.log(typeof(f))
var g=true
console.log(typeof(g))
var h='abs1237686^%62'
console.log(typeof(h))
var i='a'
console.log(typeof(i))
var j="'string'"
var j='"string"'
console.log(j)
console.log(typeof(j))
console.log(k)
console.log(typeof(k))

var k={"one":1,"two":2}
console.log(k)
console.log(typeof(k))
var l=[10,20,30,40,50]
console.log(l)
console.log(typeof(l))
var m=[{A:100,B:200},{A:100,B:200}]
console.log(m)
console.log(typeof(m))
console.log(typeof(null))
console.log(typeof(0))
console.log(typeof(true))
console.log(typeof(""))
console.log(typeof(undefined))
console.log(typeof(true))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(""))
console.log(Number(0))
console.log(Number(true))
console.log(Number(false))
console.log(String(null),"---------------")
console.log(String(undefined))
console.log(String(true))
console.log(String(false))
console.log(parseInt("876876srh"))
console.log(typeof(parseInt("876876srh")))
console.log(parseFloat("876876.87636srh"))
console.log(typeof(parseFloat("876876.87636srh")))
var n= Boolean("hai");
console.log(n)
var o= Boolean("");
console.log(o)
var p= Boolean(null);
console.log(p)
var q= Boolean(undefined);
console.log(q)
var r= Boolean(0);
console.log(r)
var s= Boolean(-10);
console.log(s)
var t= Boolean(10);
console.log(t)
console.log( "1" - - "2")
console.log(10+'10')
console.log('10'+ +'10')
console.log(10+ +'10')
console.log(+'10'+ +'10')
console.log(10- '2')
console.log(10 + '2'- '2')
console.log(10>9>2)// 10>9 true   true ==1 1>2 false
console.log(10*'10') //100
console.log(10/'10') //1
console.log(10/'0') //infinity
console.log(10/'-0') //-infinity
console.log(100+'100'-100*'100') //100100 -10000 =90100
console.log(100+ +'100'-100*'100') 
console.log(`hello ${10+20}`)
console.log(typeof(`hello ${10+20}`))
console.log(true>false)