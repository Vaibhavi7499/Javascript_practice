/** capitalize first letter in word of string */

function camelCase(str) {
   let a = str.split(' ');
   console.log(a);
   a = a.map((ele) => {
       return ele.split('')[0].toUpperCase() + ele.slice(1)
   })

   console.log(a.join(' '))
}


/** capitalize last letter in word of string */

function capLastWord(str) {
 let a = str.split(' ')
//  console.log(a);
 a = a.map((ele) => {
    let b = ele.split('').length-1
    let c = ele.split('')
    let l =c[b].toUpperCase()
    return c.join('').slice(0,c.length-1)+l
    
 })
  console.log(a.join(' '));
}


/** change name for id 2 in array */

function changeName(arr) {
    arr = arr.map((ele) => {
        if(ele.id === 2) {
            return {
                ...ele,
                name : 'Vaibhavi Bodke'
            }
        } else {
            return ele
        }
    })
    console.log(arr);
}

function addNewObj(arr, obj) {
    arr = [...arr,obj]
    console.log(arr);
}

function getName(obj) {
let {name} = obj
console.log(name);
}

function alpahbaticalOrder(str) {
    let a = str.split('')
    console.log(a.sort().join(''));
   
    
}

function largestWord(str) {
let a = str.split(' ')
let b;
    a.forEach((ele,index,a) => {
        if(ele.length < a[index+1]?.length) {
            b = a[index+1]
        }
    })
    console.log(b);
}


function vowelCount(str) {
let a = str.split('');
a = a.filter((ele) => {
    if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u'){
        return ele
    }
})
console.log(a, a.length);
}


let arr = [
    {id :1 ,name : "Kishor"},
    {id :2 ,name : "Vaibhavi"},
    {id :3 ,name : "Sama"},
    {id :4 ,name : "Piyush"},
]

let obj = {id:5, name : 'Harshad'}
let str = "i am from india"
// camelCase(str)
// capLastWord(str)
// changeName(arr)
// addNewObj(arr, obj)
// getName(obj)
// alpahbaticalOrder('webmaster')
// largestWord('Web Development Tutorial');
vowelCount('The quick brown fox')

