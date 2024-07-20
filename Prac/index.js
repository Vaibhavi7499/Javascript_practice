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

let str = "i am from india"
// camelCase(str)
capLastWord(str)