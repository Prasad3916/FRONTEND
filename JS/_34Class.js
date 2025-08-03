class Phone{
    color;
    type;
    callAvailable;
    company;
    constructor(color,type,callAvailable,company){
        this.color=color;
        this.type=type;
        this.callAvailable=callAvailable;
        this.company=company;
        console.log("Phone...........")
    }
    getInfo(){
        console.log(this.color)
        console.log(this.company)
        console.log(this.callAvailable)
        console.log(this.type)
    }
}
class KeyPad extends Phone{
    constructor(color,type,callAvailable,company,name){
        super(color,type,callAvailable,company)
        console.log(company,name)
    }
}
let keypad=new KeyPad("White","KeyPad","Yes","OnePlus","Nord Ce 3");
keypad.getInfo()