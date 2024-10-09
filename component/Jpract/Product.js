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

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function commonFunc(arr1,arr2){
  return arr1.filter((e)=>{
    return arr2.includes(e)
  })
}
let common = commonFunc(array1,array2);
console.log(common)