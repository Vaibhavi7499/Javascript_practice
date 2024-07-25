
// hook

 function useFetch() {
    return fetch("https://jsonplaceholder.typicode.com/users")
}

async function CompA() {
  let data1 =   await useFetch();
  let data2 = await data1.json(); 
  console.log(data2, 'compA');

}

async function CompB() {
    let data1 =   await useFetch();
    let data2 = await data1.json(); 
    console.log(data2, 'compB');
}


CompA()
CompB()






function add(a,b) {
    return a + b
}

let num = add(1,2)