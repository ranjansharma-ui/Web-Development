// function :- function is block of code to performe specific task and used for maintanability and readlibity of code.

// console.log("Functions");
//function definations
// function SimpleSulation() {
//     console.log("Ranjan kumar");

// }
// // function call
// SimpleSulation();


// function printCounting() {
//     for(let i=1; i<=100; i++){
//         console.log(i);
        
//     }
// }

// printCounting();

// function printNumber(num){
//     console.log("Printing Number:", num);
    
// }

// printNumber(5);

// function getAvg(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log("Average:",avg);
    
// }

// getAvg(4,60);


//return function

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let value = getSum(1,2,3);

// console.log(value);

// function getMyName(firstName, lastName){
//     let fullName = firstName +" "+ lastName;
//     return fullName;
// }


// // let ans = getMyName(7,'ranjan');
// // let ans = getMyName(7,7);
// let ans = getMyName("Ranjan","Sharma");
// console.log(ans);


// function getMultiplication(a,b){
//     return a*b;
// }

// console.log(getMultiplication(2,10));

const getMultiplication = function(a,b){
    return a*b;
}

let ans = getMultiplication(2,3);
console.log(ans);

let squareNumber = function(num){
    let ans = num**2;
    return ans;
}
let fianalAns = squareNumber(6);
console.log(fianalAns);




