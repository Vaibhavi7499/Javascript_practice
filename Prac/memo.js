// Implement Memoization in Javascript
// Memoization is an optimization technique that can be use to reduce
// time-consuming calculations by saving previous input to something called cache
// and returning the result from it.

function sum2() {
    const obj = {};
    
    return function(a,b) {
      
      if(!obj[`${a},${b}`]) {
        console.log("inside if");
        obj[`${a},${b}`] = a+b;
      }
      return obj[`${a},${b}`]
    }
  }
  
  const memo = sum2();
  console.time();
  console.log(memo(5,4))
  console.log(memo(5,4))
  console.timeEnd()