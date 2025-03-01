/*

  Function :- First class citizens

      -> Assign to Variable
      -> As an arrgument
      -> return function
      -> use in data-structure
      -> as properties
*/

let greet = function(){
    console.log("Greeting for the day");
    
}

// greet();

function greetMe(greet,fullName){
    console.log("hello",fullName);
    greet();
}

// greetMe(greet,'Ranjan');


function solve(number) {
    return function(number) {
        return number*number;

    }
}

let ans = solve(5);

let finalAns = ans(10);
// console.log(finalAns);



//use in data structure

const arr = [
    function(a,b){
        return a+b;

    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }

];

let First = arr[0]

let ansfinal = First(10,2);
console.log(ansfinal);

let second = arr[1];
let ansfinal2 = second(39,2);
console.log(ansfinal2);


let third = arr[2];
let ansfinal3 = third(2,4);
console.log(ansfinal3);


