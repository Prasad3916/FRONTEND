let obj1={
    name:"Prasad",
    desg:"student",
    age:21,
    role:"JFSD",
    institute:"10KC",
    place:"Kukatpally",
    fee:"30K"
};
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// for(let ele of Object.entries(obj1)){
//     console.log(ele);
// }
// for(let [key,value] of Object.entries(obj1)){
//     console.log(key,value);
// }
// let obj2=obj1; // shallow copy
// console.log(obj2);
// obj2.country="India";
// console.log(obj2);
// console.log(obj1);
// let obj3={...obj1}; // deep copy
// console.log(obj3);
// obj3.state="Andhra Pradesh";
// console.log(obj1)
// console.log(obj3);
// let obj4={};
// let obj5=Object.assign(obj4,obj1); // deep copy obj1!=obj4 but obj4==obj5
// obj1.religion="Hindu";
// obj4.dob="14-01-2004";
// console.log(obj4)
// console.log(obj5)
// console.log(obj1)
// let obj6=Object.create(obj1); // inheritance
// console.log(obj6);
// console.log(obj1);
// obj6.salary=65000;
// console.log(obj6);
// console.log(obj1);
// accessing obj1 keys through the Object.create(obj1) reference
// console.log(obj6.name); 
// console.log(obj6.age)
// console.log(obj6.role);
// console.log(obj6.place);
// console.log(obj6.desg);
// console.log(obj6.institute);
// console.log(obj6.fee);
// let objarr=[[ 'name','venu', 'Prasad'],
// [ 'desg', 'student' ],
// [ 'age', 21 ],
// [ 'role', 'JFSD' ],
// [ 'institute', '10KC' ],
// [ 'place', 'Kukatpally' ],
// [ 'fee', '30K' ]];
// let obj7=Object.fromEntries([[ 'name', 'Prasad','venu'],
// [ 'desg', 'student' ],
// [ 'age', 21 ],
// [ 'role', 'JFSD' ],
// [ 'institute', '10KC' ],
// [ 'place', 'Kukatpally' ],
// [ 'fee', '30K' ]]);
// let obj8=Object.fromEntries(objarr);
// console.log(objarr);
// console.log(obj8);
// console.log(Object.isSealed(obj1));
// console.log(Object.isFrozen(obj1));
// Object.seal(obj1); // Allow Read and Updation Only Cant Add or Delete Properties
// obj1.place="Vijayawada";
// console.log(obj1);
// obj1.religion="Hindu";
// console.log(obj1);
// delete obj1.place; 
// console.log(obj1)
// console.log(Object.isSealed(obj1));
// console.log(Object.isFrozen(obj1));
// Object.freeze(obj1);  // Allow Reading Only
// console.log(obj1);
// obj1.religion="Hindu"; // Cant Adding
// console.log(obj1)
// obj1.place="Vijayawada"; // Cant Update
// console.log(obj1) 
// delete obj1.place; // Cant Delete
// console.log(obj1)
// console.log(Object.isSealed(obj1));
// console.log(Object.isFrozen(obj1));
// let objpropertyDescripter=Object.getOwnPropertyDescriptor(obj1,"name");
// console.log(objpropertyDescripter);
// let objpropertyDescripters=Object.getOwnPropertyDescriptors(obj1);
// console.log(objpropertyDescripters);
// let defineObjProperty=Object.defineProperty(obj1,"place",{
//     value:"Vijayawada",
//     writable:true,
//     enumerable:false,
//     configurable:true
// })
// let objPlaceKeyDescriptor=Object.getOwnPropertyDescriptor(obj1,"place");
// console.log(objPlaceKeyDescriptor);
let defineObjProperties=Object.defineProperties(obj1,{
  name: {
    value: 'Prasad',
    writable: false,
    enumerable: true,
    configurable: true
  },
  desg: {
    value: 'student',
    writable: true,
    enumerable: false,
    configurable: true
  },
  age: { value: 21, writable: true, enumerable: true, configurable: false },
  role: {
    value: 'JFSD',
    writable: false,
    enumerable: true,
    configurable: true
  },
  institute: {
    value: '10KC',
    writable: true,
    enumerable: false,
    configurable: true
  },
  place: {
    value: 'Kukatpally',
    writable: true,
    enumerable: true,
    configurable: false
  },
  fee: {
    value: '30K',
    writable: false,
    enumerable: true,
    configurable: true
  }
});
obj1.name="venu";
obj1.role="SD";
obj1.fee="33K"
console.log(obj1) // No Updating
delete obj1.age;
delete obj1.place;
console.log(obj1)
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.keys(obj1)); // Hiding Keys Here
console.log(obj1.desg); // Getting Values Here
console.log(obj1.institute);