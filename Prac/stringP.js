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
// sumOfDigit("12345")
findOutSN("123Kishor12")