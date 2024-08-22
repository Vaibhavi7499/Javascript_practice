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
console.log(productList);
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
console.log(arr);
