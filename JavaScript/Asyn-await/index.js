/// creation of async function 

async function getData() {
    setTimeout(function() {
        console.log("I am inside set Timeout block");
    }, 3000);
};

getData(); // call the function

let output = getData(); // always return promise 

/// await -?

/// fetch API


