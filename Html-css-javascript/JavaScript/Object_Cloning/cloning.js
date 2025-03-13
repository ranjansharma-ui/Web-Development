let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {...src}; // using spread Operator for cloning

src.age = 45; // for checking that is cloning or not

console.log('src: ',src);
console.log('dest: ',dest);


// Assign-methods


let src1 = {
    age:23,
    wt:68,
    ht:300
}

let dest1 = Object.assign({},src1)

console.log(src1);
console.log(dest);

let finaldest = Object.assign({},src,src1)
console.log(finaldest);


// iteration

let dest3 = {};

for(let key in src){
    let newKey = key;
    let newValue = src[key];

    //insert newKey and value in dest and create a clone
    dest3[newKey] = newValue;


}

src.age = 4;

console.log('src: ',src);
console.log('dest: ',dest3);
