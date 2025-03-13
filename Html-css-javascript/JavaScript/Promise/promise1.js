// let firstPromise = new Promise( (resolve,reject) =>{
//     console.log("Ranjan");

//     resolve(1001);
// })
// let secondPromise = new Promise( (resolve,reject) =>{
//     console.log("Ranjan");

//     reject(new Error("Internal Server Error"));
// })


//asynco function

function sayMyName() {
    console.log("My name is Ranjan kumar");
}

setTimeout(sayMyName,10000);

let thirdExample = new Promise((resolve, reject) => {
    setTimeout(function MarcoGroup(){
        console.log("Hey!");
    },10000)
    resolve(1);
});

console.log(thirdExample); // Promise-> full-filled