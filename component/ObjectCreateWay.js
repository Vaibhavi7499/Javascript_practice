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

// let arr = [1, 2, 2, 3, 2];
// let sum = 0;
// arr.forEach((e) => {
//   if (e === 2) {
//     sum++;
//   }
// });
// console.log(sum);

//ES6 features
//spread operator, rest operator ,template literal,object destructing , array destructing, promise,async await, default parameter,arrow function,let, const,map,set,reduce,iterator,generator,classes,import,export

// let arr=[1,2,3,4]
// let array=[...arr]
// console.log(array)

// let sum=0;
// function addition(...arr){
// arr.forEach((e)=>{
//   sum=sum+e
// })
// console.log(sum)
// }
// addition(1,2,3,4,5,6,7,8,9,10)

// function addition() {
//   let a = Array.from(arguments);
//   let b = a.reduce((a, current) => {
//     return a + current;
//   }, 0);
//   console.log(b);
// }
// addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function address(){
//   return `At kanheri dist-latur`
// }
// let str=`My name is Vaibhavi bodke and my address is ${address()}`
// console.log(str)

// let Person = {
//     name: "Kishor",
//     location: {
//       pin: 413520,
//       address: {
//         city: "Latur",
//       },
//     },
//   };

//   let {location:{address:{city}}}= Person
//   console.log(city)

//let arr=[1,2,3,4,5]
//let [a,,c] = arr
//let [,,,,c] = arr
//console.log(c)

// function add(a,b,c=20){
//   console.log(a+b+c)
// }
// add(10,5)

//Arrow function
// const demo=a=>10+a
// console.log(demo(10))
// const obj = {
//   name: "kishor",
//   demo: () => {
//     console.log(this);
//   },
// };
// console.log(obj.demo())

// const obj = {
//   name: "kishor",
//   demo: function(){
//     console.log(this);
//   },
// };
// console.log(obj.demo())

//Normal function
// function demo(a){
//   return 10+a
// }
// console.log(demo(10))

//callback
// function userLoggedIn(callback){
//     console.log("userLoggedIn")
//     callback()
// }

// function createPost(callback){
//     console.log("createPost")
//     callback()
// }

// function deletePost(callback){
//     console.log("deletePost")
//     callback()
// }
// userLoggedIn(function(){
//     createPost(function(){
//         deletePost(function(){
//             console.log("callback hell")
//         })
//     })
// });

//Promise
// function userLoggedIn() {
//     return new Promise((resolve,reject)=>{
//         resolve("userLoggedIn")
//     })
// }

// function createPost() {
//     return new Promise((resolve,reject)=>{
//         resolve("createPost")
//     })
// }

// function deletePost() {
//     return new Promise((resolve,reject)=>{
//         resolve("deletePost")
//     })
// }

// userLoggedIn()
// .then((res)=>{
//     console.log(res)
//     return createPost()
//     .then((res)=>{
//         console.log(res)
//         return deletePost()
//         .then((res)=>{
//             console.log(res)
//         })
//     })
// })

// async function awitExample(){
// const loggedin = await userLoggedIn()
// const post = await createPost()
// const delpost = await deletePost()
// console.log(loggedin,post,delpost)
// }
// awitExample()

let url = "https://jsonplaceholder.typicode.com/users";

// function byUsingPromise() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((user) => {
//       console.log(user);
//     });
// }
// byUsingPromise();

// async function byUsingAsyncAwait() {
//   const response = await fetch(url);
//   const user = await response.json();
//   console.log(user);
// }
// byUsingAsyncAwait();

// let arr = ["apple", "banana", "apple", "mango", "banana", "apple"];

// let a = arr.reduce((a, c) => {
//   a[c] = (a[c] || 0) + 1;
//   return a;
// }, {});

// console.log(a);

//Math functions

//abs
//console.log(Math.abs(-10.34))    //10.34
//console.log(Math.abs(10.34))    //10.34

//floor
//console.log(Math.floor(2.3))  //2
//console.log(Math.floor(3.3))  //3

//round
//console.log(Math.round(3.4))  //3
//console.log(Math.round(3.5))  //3
//console.log(Math.round(4.3))  //3

//random
//console.log(Math.random()*10)
//console.log(Math.floor(Math.random()*10))

//max
//let arr = [1, 2, 3, 4];
//console.log(Math.max(...arr));
//console.log(Math.min(...arr));

//Generator

// function* generatorEx() {
//   yield "cocsit";
//   yield "hello";
//   yield "world";
// }

// let gen = generatorEx();
// console.log(gen.next());
// let { value } = gen.next();
// console.log(value);
// console.log(gen.next());

//IIFE
// (function addition(a, b) {
//   console.log("Addition = ", a + b);
// })(10, 10);

//setTimeout
// (function demo() {
//   setTimeout(() => {
//     console.log("function is called after 2 sec");
//   }, 2000);
// })();

//setIntervel
// (function setintervalEx() {
//   setInterval(() => {
//     console.log("function is called after each 2 sec");
//   },2000);
// })();

// let n = 4;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);
