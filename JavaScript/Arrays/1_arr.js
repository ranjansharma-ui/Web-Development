// creation of Array

// let arr = [1,2,3,4,5];
// console.log(arr);

//array-constructor
// let brr = new Array('love',1,true)
// console.log(brr);

//check-types
// console.log(typeof(arr));
// console.log(typeof(brr));


// console.log(brr[0]); // access

/*
  Build-in methods
  -> push
  -> pop
  -> shift : remove first items
  -> unshift : add at first
  -> slice : 
  -> map
  -> filter
  -> reduce
  -> sort
  -> indexof
  -> find

*/

let arr = new Array(1,'love',false);

arr.push('ranjan'); // insert at end
arr.pop(); // remove 
console.log(arr);

arr.shift();
arr.unshift('Rnajan');

arr.push(20);
arr.push(30);

arr.slice(2,4);
console.log(arr.slice(2,4));

//splice :- Content change,replace

arr.splice(1,2,'kunal');
arr.splice(1,0,'price')
console.log(arr);






