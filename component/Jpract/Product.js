let productList = [
  { id: 1, pName: "laptop", price: 1000 },
  { id: 2, pName: "mobile", price: 2000 },
];

function addProduct(obj) {
  // productList = [...productList,obj]
  productList.push(obj);
}

function deleteProduct(id) {
  productList = productList.filter((e) => {
    return e?.id !== id;
  });
}

function updateProduct(id, n, p) {
  productList = productList.map((e) => {
    if (id === e?.id) {
      return { ...e, pName: n, price: p };
    } else {
      return e;
    }
  });
}

addProduct({ id: 3, pName: "bag", price: 200 });
deleteProduct(1);
// console.log(productList);
updateProduct(1, "watch", 3000);

let arr = ["vaibhavi", "kishor"];

function addString(str) {
  return [...arr, str];
}

function deleteString(name) {
  arr = arr.filter((e) => {
    return name !== e;
  });
}

function updateString(name) {
  arr = arr.map((e) => {
    if (name === e) {
      return "kishor phawade";
    } else {
      return e;
    }
  });
}

arr = addString("rutuja");
deleteString("vaibhavi");
updateString("kishor");
// console.log(arr);

//Lexical scope
// function Outer(){

//   let a = 10;

//   function inner(){
//       console.log(a);
//   }

//   inner();
// }

// Outer();

//Closure
// function Outer() {
//   let a = 100;

//   return function inner() {
//     return a;
//   };
// }

// let abc = Outer();
// console.log(abc());

// let emp = [
//   { id: 1, name: "kishor" },
//   { id: 2, name: "Vaibhavi" },
//   { id: 3, name: "Raju" },
// ];

// let a = [...emp, { id: 4, name: "sama" }];
// console.log(a);

// let b = a.map((e) => {
//   if (e.id === 1) {
//     return {
//       ...e,
//       name: "kishor phawade",
//     };
//   } else {
//     return e;
//   }
// });
// console.log(b);

// let c = b.filter((e) => e.id !== 3);
// let d = emp.map((e) => {
//   if (e.id === 2) {
//     return {
//       ...e,
//       name: "vaibhavi bodke",
//       location: "latur",
//     };
//   } else {
//     return e;
//   }
// });
// console.log(d);

let obj = [
  {
    id: 1,
    name: "kishor",
    address: {
      city: "ausa",
    },
  },
  {
    id: 2,
    name: "Vaibhavi",
    address: {
      city: "Latur",
    },
  },
  {
    id: 3,
    name: "Govind",
    address: {
      city: "Pune",
    },
  },
];

// obj = obj.find((e)=>{
// return e.id === 2

// })
// obj = obj.map((e)=>{
// return{
//   ...e,
//   address:{
//     ...e.address,
//     ta:"ausa"
//   }
// }
// })
// console.log(obj)

// obj = obj.map((e)=>{
//   if(e.id === 2){
//     return {
//       ...e,
//       address:{
//         ...e.address,
//         ta:"Ausa"
//       }
//     }
//   }else{
//     return{
//       ...e,
//       address:{
//         ...e.address,
//         ta:"Renapur"
//       }
//     }
//   }
//   })
//  console.log(obj)

// let obj1 =[
//   {
//       "id": 1,
//       "name": "kishor",
//       "address": {
//           "city": "ausa"
//       }
//   },
//   {
//       "id": 2,
//       "name": "Vaibhavi",
//       "address": {
//           "city": "Latur"
//       }
//   },
//   {
//       "id": 3,
//       "name": "Govind",
//       "address": {
//           "city": "Pune"
//       }
//   }
// ]

// let empObj = {};

// obj1.forEach((e)=>{
//  if(e.id ===1){
//    empObj.id =e.id
//  }
//  else if(e.id === 2){
//    empObj.name = e.name
//  }
//  else{
//    empObj.address=e.address
//  }
// })
// console.log(empObj)

// const people = [
//   {
//     name: "John Doe",
//     age: 28,
//     contact: {
//       email: "john.doe@example.com",
//       phone: "555-1234",
//     },
//     skills: [
//       { name: "JavaScript", level: "Intermediate" },
//       { name: "Python", level: "Advanced" },
//     ],
//   },
//   {
//     name: "Jane Smith",
//     age: 34,
//     contact: {
//       email: "jane.smith@example.com",
//       phone: "555-5678",
//     },
//     skills: [
//       { name: "HTML", level: "Advanced" },
//       { name: "CSS", level: "Advanced" },
//     ],
//   },
// ];

// let arr1 = [];
// people.forEach((e) => {
//   e.skills.forEach((ele) => {
//     arr.push(ele.name);
//   });
//   console.log(
//     `My name is ${e.name} and my age is ${e.age} my email address is ${
//       e.contact.email
//     } and my skills are ${arr.join(",")}`
//   );
//   arr1 = [];
// });

// const array1 = [1, 2, 3, 4, 5];

// array1.sort(function(a, b){console.log(a,b)});

//2-1=1  1
//3 -2 = 1  1,2
//4-3=1     1,2,3
//5-4=1     1,2,3,4,5

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];

// function commonFunc(arr1,arr2){
//   return arr1.filter((e)=>{
//     return arr2.includes(e)
//   })
// }
// let common = commonFunc(array1,array2);
// console.log(common)

//let array =['HTML', 'CSS']
// let [a,b] =array;
// arr=[b,a]

//let array = [1,2,3]
//arr=[]
//arr.length=0
//arr.splice()

//Array Method
// let arr =[
//   {id:1,name:"kishor",city:"Pune",age:35},
//   {id:2,name:"vaibhavi",city:"latur",age:21},
//   {id:3,name:"sama",city:"kanheri",age:21}
// ]

//map
//filter
//forEach
//push
//pop
//shift
//unshift
//join
//slice
//splice
//sort
//reverse
//some
//every
//find

//arr.push({id:3,name:"sama",city:"kanheri",age:18})
// arr.pop()
// arr.shift()
// arr.unshift({id:3,name:"sama",city:"kanheri"})
//arr.slice(0,1)
// let name =["banana" , "apple" , "kiwi" , "mango"]
// name.splice(1,1,"grapes")
// console.log(name)
// a = arr.some((e)=>{
//   return e.age < 20
// })
// a = arr.every((e)=>{
//   return e.age > 20
// })
// console.log(a)
//
// a = arr.find((e)=>{
//   return e.age === 21
// })

// a = arr.reduce((a,c)=>{
//   return a+c.age
// },0)

//String Methods
//let str = "Hello COCSIT";

//toLowerCase()
//toUpperCase()
//trim()
//split
//slice
//charAt
//replace
//replaceAll
//length
//concat
//str.charAt(2)

//Check two array is equal or not
// let isEqual;

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 3, 2, 1];

// if (arr1.length !== arr2.length) {
//   isEqual = false;
// } else {
//   isEqual = arr1.every((ele, i) => {
//     return arr2.includes(ele);
//   });
// }

// isEqual ? "Equal" : "Not Equal";

//Generator
// function* simpleGenerator(){
//   yield "kishor";
//   yield "vaibhavi";
//   yield "sama";
//   }

//   const gen = simpleGenerator();
//   console.log(gen.next())
//   console.log(gen.next())
//   console.log(gen.next())
//   console.log(gen.next())

//Event Bubbling
// {
//   <div onclick="divFunc()">
//   <button onclick="btnFunc(event)">click me</button>
// </div>;
// function divFunc() {
//   console.log("div func clicked");
// }

// function btnFunc(event) {
//   console.log("btn func clicked");
//   event.stopPropagation();
// }
// }

//Iterator example
// const fruits = ["apple", "cherry", "banana"];
// const fruitsiterator = fruits[Symbol.iterator]();
// console.log(fruitsiterator.next());
// console.log(123);
// console.log(fruitsiterator.next());
// console.log(fruitsiterator.next());
// console.log(fruitsiterator.next());

//Map
// let map = new Map();
// map;
// map.set("name", "vaibhavi");
// map.set("city", "Latur");
// map.get("city");
// map.has("name");
// map.has("names");
// map.delete("city");
// console.log(map);
// map.clear();
// console.log(map);

//Set in Javascript
let set = new Set([1,2,3,4,1,2,3]);
set.add(10)
set.has(2)
set.size
set.delete(10)
let b = [...set]
console.log(b)
