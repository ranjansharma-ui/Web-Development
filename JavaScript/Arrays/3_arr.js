//filter

let arr = [10,20,22,34,56,,4,5];

let EvenOddNumber = arr.filter((number) => {
    // if(number%2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // } or

    return number%2 === 0;
});

// console.log(EvenOddNumber);

let arr2 = [1,2,3,'ranjan',null,'ku'];

let finalAns = arr2.filter((value) => {
    if(typeof(value) == 'number'){
        return true;
    }
    else{
        return false;
    }
});

console.log(finalAns);

