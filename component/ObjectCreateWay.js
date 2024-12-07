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

// let str = "aabbcc";
// let a = str.split("");
// let b = a.filter((e, i) => {
//   return a.indexOf(e) != i;
// });
// console.log(b.join(""));

//length , push,pop,unshift,shift,map,forEach,filter,reduce,some,every,includes,sort,join,slice,splice,indexOf,flat,reverse,array.from,isArray,concat

//let arr=["vaibhavi","kishor","rutuja","sama"]
//console.log(arr.join())
// let arr1=[...arr]
// let a=arr1.splice(1,1,"kishor phawade")
// console.log(arr)
// console.log(arr1)

// let arr=[
//   {name:"vaibhavi" , age:21},
//   {name:"kishor" , age:30},
//   {name:"sama" , age:17},
//   {name:"rutu" , age:19},
// ]

// let a=arr.filter((e)=>{
// if(e.age >=20){
//   return e.name
// }

// })
// let b = a.map((e)=>{
//   return e.name
// })
// console.log(b)

// let arr = [10, 20, 30];
// let a = arr.reduce((a,current)=>{
//   return a+current
// },0)
// console.log(a)

// let arr = [5, 10, 15, 20]
// let max=arr[0]
// arr.forEach((e)=>{
//   if(max < e){
//     max=e;
//   }
// })
// console.log(max)

// let arr= [1, 2, 2, 3, 4, 4]
// let a = arr.filter((e,i)=>{
//   return arr.indexOf(e) == i
// })
// console.log(a)

// let arr = [1,2,3,4]
// console.log(arr.includes(3))

// let arr =  [1, [2, 3], [4, [5, 6]]]
// let a =arr.flat()
// console.log(a.flat())

// let arr = [10,20,30]
// console.log(arr.indexOf(20))

let arr = [1, 2, 2, 3, 2];
let sum = 0;
arr.forEach((e) => {
  if (e === 2) {
    sum++;
  }
});
console.log(sum);
