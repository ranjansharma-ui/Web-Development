// normal-function
function getExp(x,y){
    let ans = x**y;
    return ans;
}

console.log(getExp(2,10));

// function-Expression
const getMul = function (a,b){
    return a*b;
}

console.log(getMul(2,10));

//Arrow-function
const getAdd = (r,p) => {
    return r+p;
}
console.log(getAdd(2,4));


