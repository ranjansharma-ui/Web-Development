let obj = {
    name: "Ranjan",
    // "full name" :"Ranjan sharma"
    age : 19,
    weight:56,
    height: "6fit 1in",
    greet: function(){
        console.log("hello ji kaise ho sare");
        
    }

};

console.log(obj);
obj.greet();
console.log(typeof(obj));


let obj2 = obj; // this is shallow copy to point same  address in heap;



// h.w difference between shallow-copy and deep-copy (interview point)
