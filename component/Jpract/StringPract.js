function reverseString(str) {
  let a = str.split("");
  let arr = [];
  for (i = a.length - 1; i >= 0; i--) {
    arr.push(a[i]);
  }
  console.log(arr.join(""));
}

function sumOfDigit(str) {
  let a = str.split("");
  //console.log(a)
  a = a.reduce((accumulator, current) => {
    return accumulator + Number(current);
  }, 0);
  console.log(a);
}

function findOutNumber(str) {
  let a = str.split("");
  let arr = [];
  let strArr = [];
  a.forEach((e) => {
    if (Number(e)) {
      arr.push(e);
    } else {
      strArr.push(e);
    }
  });
  console.log(Number(arr.join("")));
  console.log(strArr.join(""));
}

let str = "kishor";
//console.log(str.slice(3,5))

let name1 = "Peter";
let name2 = "Jack";
//console.log("Names are",name1 +" and "+ name2)
//console.log(`Names are ${name1} and ${name2}`)

function demo() {
  let arr = [1, 2, 3, 4];
  let arr1 = ["ram", "shyam", "sita", "gita"];
  let obj = {};

  arr.forEach((e, i) => {
    obj[e] = arr1[i];
  });
  console.log(obj);
}

//reverseString("vaibhavi")
//sumOfDigit("12345678910")
//findOutNumber("123Kishor12")
demo();
