// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     if(success) {
//         resolve("Promise Fulfilled");

//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("Then ka message is "+ message);
// }).catch((error) => {
//     console.log("Error: "+ error);
// })

/// multiple then can be

let promise2 = new Promise((resolve,reject) => {
    let success = false;
    if(success) {
        resolve(10);

    }
    else{
        reject("Internal Server Error");
    }
});

promise2.then((message) =>{
    console.log("First msg "+ message);
    return 20;
}).then((message) =>{
    console.log("Second Msg: "+ message);
    return 30
}).then((message) =>{
    console.log("Third Msg: "+message);
}).catch((Error) =>{
    console.error("Error : "+Error);
    
}).finally((message) => {
    console.log("Mai to final hu, chalunga hamesa");
})


