// tranditional array

let arr = [10,20,30,40];

let length =  arr.length;

for(let index = 0; index <length; index++){
    console.log(arr[index]);
}

// for-each loops

arr.forEach((value,index) => {
    console.log("Number: ", value,"Index: ", index);
})

