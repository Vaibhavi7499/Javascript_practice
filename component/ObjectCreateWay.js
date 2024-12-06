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

// let abc = {
//   name: "vaibhavi",
//   age: 21,
//   city: "Kanheri",
// };
//let a = Object.create(abc)
// let a = Object.keys(abc);
// let b = Object.values(abc);
// let c = Object.entries(abc);
// let newObj = Object.assign({}, abc);
// Object.freeze(abc);
// abc.name = "kishor";
// console.log(newObj)
//console.log(abc);

// let a = 10;
// let b=20;
// b=a;
// b=40;
// console.log(a)
// console.log(b)

//shallow copy
// let obj={
//     name:"vaibhavi",
//     age:21
// }

// let obj1 = obj;

// obj1.name="kishor";

// console.log(obj)
// console.log(obj1)

// let Person = {
//   name: "Kishor",
//   location: {
//     pin: 413520,
//     address: {
//       city: "Latur",
//     },
//   },
// };

// let obj = {
//   ...Person,
//   location: {
//     ...Person.location,
//     address: {
//       city: "Pune",
//     },
//   },
// };

// console.log(obj);
// console.log(Person);

//toUpperCase(),toLowerCase(),trim(),length,split(),indexOf(),slice(),charAt(),replace,replaceAll,includes
// let str ="  vaibhavi  "
// console.log(str.toUpperCase())
// console.log(str.trim())
// console.log(str.length)
// console.log(str.split(" "))
// console.log(str.indexOf("i"))
// console.log(str.slice(1,3))
// console.log(str.charAt(5))

//let str="my name is vaibhavi"
// let a=str.split(" ")
// let b = a.map((e)=>{
//     return e[0] + e[1].toUpperCase() + e.slice(2,e.length)
// })
// console.log(b.join(" "))

// let a=str.split(" ")
// let b = a.map((e)=>{
//     return e.slice(0,e.length-1) + e.slice(e.length-1).toUpperCase()
//  })
//  console.log(b.join(" "))

// let str ="The quick brown fox jumped over the lazy dog"
// let a=str.split(" ")
// let max=a[0]
// a.forEach((e)=>{
//     if(max.length < e.length){
//         max=e
//     }

// })
// console.log(max)

// let str =  "hello world";
// let a=str.split(" ")
// console.log(a.join("-"))

let str = "aabbcc";
let a = str.split("");
let b = a.filter((e, i) => {
  return a.indexOf(e) != i;
});
console.log(b.join(""));
