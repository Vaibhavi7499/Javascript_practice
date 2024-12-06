//Using object literal
// let Student={
//     name:"Vaibhavi",
//     age:21,

//     printName:function(){
//         console.log(`My name is ${this.name} and age is ${this.age}`)
//     }
// }
// console.log(Student)

//By using constructor
// class Employee{
//     constructor(name,city){
//         this.name=name,
//         this.city=city
//     }

//     printName(){
// console.log(`Name is ${this.name} and city is ${this.city}`)
//     }
// }

// let obj = new Employee("kishor" , "Pune");
// console.log(obj.printName())

//by using new keyword
// function Car(model,color){
//     this.model=model,
//     this.color=color,

//     this.carDetails=function(){
// console.log(`${this.model} ${this.color}`)
//     }
// }

// let c= new Car("TATA PUNCH" , "White")
// console.log(c)

let abc = {
  name: "vaibhavi",
  age: 21,
  city: "Kanheri",
};
//let a = Object.create(abc)
let a = Object.keys(abc);
let b = Object.values(abc);
let c = Object.entries(abc);
let newObj = Object.assign({}, abc);
Object.freeze(abc);
abc.name = "kishor";
// console.log(newObj)
console.log(abc);
