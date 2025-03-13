// Default-parameter -> allow to we function with default values


// function sayName(myName) {
//     console.log("my name is :",myName);
// }

// sayName("Ranjan");


function sayName(myName = "Prabhu Deva") {
    console.log("My name is : ", myName);
    
}

sayName('ranjan'); // -> My name is : ranjan
sayName(); // My name is : Prabhu Deva


// function Names(fName,lName){
//     console.log("My name is:",fName," ", lName);
    

// }

// Names('RAnjan','sharma');

function Names(fName = "chhatterpati", lName = "sivaji"){
    console.log("My name is: ", fName," ",lName);

}

Names();  // -> chhatterpati sivaji
Names("Ranjan");  // -> Ranjan sivaji
Names("Ranjan","Sharma"); // Ranjan sharma


function solve(value  = {age:15,wt:56,ht:180}){

    console.log("Value :",value);

}

solve(17); // Value : 17
solve();   // Value : { age: 15, wt: 56, ht: 180 }


//Array

function ArrDefaul(num = [1,64,7]){
    console.log("Number :",num);
    

}

ArrDefaul(23); // Number : 23
ArrDefaul(); // Number : [ 1, 64, 7 ]


// null and undefined

function keys(value = "Ranjan"){
    console.log("Name :",value);

}

keys(null); // Name : null
keys(undefined); // Name : Ranajan


// function


function getAge() {
    return 190;
}

function utility(name = "Ranjan",age = getAge()){
    console.log(name," ",age);
    
}

utility();
utility("krishna",300);
utility(34);