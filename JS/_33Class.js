class Phone{
    type="LandLine"
    speaker;
    camera;
    mic;
    color;
    chargingType;
    constructor(speaker,camera,mic,color,chargingType){
        this.speaker=speaker;
        this.camera=camera;
        this.mic=mic;
        this.color=color;
        this.chargingType=chargingType;
    }
    Phone(){
        console.log("Buying Phone...")
    }
    calling(){
        console.log("Calling Avalable...")
    }
    sendMessage(){
        console.log("Message Sending...")
    }
    sumofTwoNumbers=function(a,b){
        return a+b
    }
    getMessage(){
        return "Message Delivered..."
    }
}
let phone=new Phone("Dual Speaker","4Mega Pixel","Available","White","B");
console.log(phone)
phone.Phone()
phone.calling()
phone.sendMessage()
console.log(phone.speaker)
console.log(phone.camera)
console.log(phone.mic)
console.log(phone.color)
console.log(phone.chargingType)
console.log(phone.type)
console.log(phone.sumofTwoNumbers(10,20))
console.log(phone.getMessage())