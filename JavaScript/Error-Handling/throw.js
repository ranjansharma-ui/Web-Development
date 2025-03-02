//throw : custome error

//let's create a custom error

try{
    //Reference-error
    console.log(x);
}
catch(e){
    throw new Error("Bhai pehle declare kro, fer print karna")

}

let errorCode = 100;

if(errorCode == 100){
    throw new Error("Invalid Json");
}