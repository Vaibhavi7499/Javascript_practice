function useFetch(){
    return fetch("https://jsonplaceholder.typicode.com/users");
}

async function CompA(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((r)=> r.json())
    // .then((res)=>{console.log(res)})
let data = await useFetch();
let d1 = await data.json();
console.log(d1);
}

async function CompB(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((r)=> r.json())
    // .then((res)=>{console.log(res)})
   let data1 = await useFetch();
   let d2 = await data1.json();
console.log(d2);

}

CompA();
CompB();