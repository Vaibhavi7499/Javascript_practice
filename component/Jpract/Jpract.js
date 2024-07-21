function Jpract() {
  let str = "i am from india";
  let a = str.split(" ");
  let b = a.map((e) => {
    let c = e.split("").length - 1;
    let d = e.split("");
    let u = d[c].toUpperCase();
    return d.join("").slice(0, c) + u;
  });
  console.log(b.join(" "));
}

function demo() {
  let arr = [
    { id: 1, name: "Kishor" },
    { id: 2, name: "Vaibhavi" },
    { id: 3, name: "Sama", address: "latur" },
    { id: 4, name: "Piyush" },
  ];
  arr = arr.map((e) => {
    if (e.id == 2) {
      return {
        ...e,
        name: "Vaibhavi Phawade",
      };
    } else if (e.id == 3) {
      return {
        ...e,
        address: "kanheri",
      };
    } else {
      return e;
    }
  });
  console.log(arr);
}

function addObj() {
  let arr = [
    { id: 1, name: "Kishor" },
    { id: 2, name: "Vaibhavi" },
    { id: 3, name: "Sama", address: "latur" },
    { id: 4, name: "Piyush" },
  ];

  let obj = { id: 5, name: "Harshad" };
  arr = [...arr, obj];
  console.log(arr);
}

function getName() {
  let obj = { id: 5, name: "Harshad" };
  let { name } = obj;
  console.log(name);
}

function getCash() {
  backPack = {
    color: "black",
    straps: 4,
    isHeavy: true,
    wallet: {
      cash: "$10,000",
      creditCards: 6,
    },
  };

  let {
    color,
    wallet: { cash, creditCards },
  } = backPack;
  console.log(color, cash, creditCards);
}

function merdgeArr() {
  let arr = [1, 2, 3];
  let arr1 = [4, 5, 6];
  let a = [...arr, ...arr1];
  console.log(a);
}

function alphabetOrder() {
  let str = "webmaster";
  let b = str.split("");
  console.log(b.sort().join(""));

  let a;

  //   for(i=0 ; i<b.length ; i++){
  //     for(j=i+1 ; j<b.length;j++){
  //       if(b[i] > b[j]){
  //         a=b[i];
  //         b[i]=b[j];
  //         b[j]=a
  //       }

  //     }
  //   }
  //   console.log(b.join(""))
}

function largestString() {
  let str = "Web Development Tutorial";
  let a = str.split(" ");
  //let max=a[0];

  // for(i=0 ; i<a?.length ; i++)
  // {
  //   if(a[i]?.length > max?.length)
  //   {
  //     max=a[i]
  //   }
  // }
  // console.log("Largest string is ", max)
  let max = a[0];

  a.forEach((e) => {
    if (e?.length > max?.length) {
      max = e;
    }
  });
  console.log(max);
}

function countVowelFunc(){
let str='The quick brown fox';
let a=str.split("")
let arr=[]
let arr1=[]
a.forEach((e)=>{
  if(e=='a' || e=='e' || e=="i" || e=="o" || e=="u"){
    arr1.push(e)
  }
  else{
    arr.push(e)
  }

})
console.log(arr.join(""),arr1)
}

function sortArray(){
  let arr= [5,4,3,2,1]
  let a;
  for(i=0 ; i<=arr.length ;i++){
    for(j=i+1 ; j<=arr.length ; j++){
      if(arr[i] > arr[j]){
a=arr[i];
arr[i]=arr[j];
arr[j]=a
      }
    }
  }
  console.log("second lowest number is ",arr[1])
  console.log("second greatest number is ",arr[arr.length-2])
}

function factorial(){
  let fact=1
for(i=1;i<=6;i++){
fact=fact*i
}
console.log(fact)
}

function valueDoubleFunc(){
  let a=[10,20,30,5,10]
  for(i=0 ; i<a.length ; i++){
    if(a[i] >=10){
      console.log(a[i]*5)
    }else{
      console.log(a[i]*10)
    }
  }
}
//Jpract();
//demo();
//addObj();
//getName();
//getCash()
//merdgeArr();
//alphabetOrder()
//largestString();
//countVowelFunc()
//sortArray()
//factorial()
valueDoubleFunc()
