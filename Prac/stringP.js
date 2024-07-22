function sumOfDigit(a) {
    let total = 0;
a.split("").forEach((ele) => {
    total = total + Number(ele)
})
console.log(total);
}

function findOutSN(a) {
    let str=[];
    let num = [];
    a.split('').forEach((ele) => {
        if(Number(ele)) {
            num.push(ele)
        } else {
            str.push(ele)
        }
    })
    console.log(str.join(''));
    console.log(Number(num.join('')));
}

function convertToObj() {
    let a = [1, 2, 3, 4];
    let  b = ["ram", "shyam", "sita", "gita"]
    let c ={};
        a.forEach((ele,index) => {
            c[ele] = b[index]
    })
    console.log(c);
}
// sumOfDigit("12345")
// findOutSN("123Kishor12")
convertToObj()