// function-hoisting

{

getRollNo()
function getRollNo(){
    console.log("RollNO: ", 34);
    
}

// getRollNo()

}


//function-expression

myName('ranjan'); // error - reference 
let myName = function(name){
    console.log("Name:",name);
    
}

// myName('Ranjan');



//arrow function

marks(); // error
let marks = ()=> {
    console.log("Marks:",89);
    
}
// marks();