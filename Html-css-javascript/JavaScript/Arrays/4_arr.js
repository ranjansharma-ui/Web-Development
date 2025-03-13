// Reduce:

let arr = [10,20,30,40];

let ans = arr.reduce((acc,curr) => {
    return acc + curr;

},0)

console.log(ans);

let arr3 = [4,3,5,8,7,2];

arr3.sort();
//HW: how to do sort in descending order?

console.log(arr3);
console.log(arr3.indexOf(2));


