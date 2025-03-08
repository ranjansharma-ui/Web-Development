let promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
})
let promise3 = new Promise((resolve,reject) => {
    setTimeout(reject,4000,"Third"); //only one from reject to entire Promise through error.
})

Promise.all([promise1,promise2,promise3]).then((value) =>{
    console.log(value);
})
.catch((error) =>{
    console.error("Error : "+error);
    
})