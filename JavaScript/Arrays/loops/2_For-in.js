// For-In :- enumerables properties through the object;

obj = {
    name : "Ranjan",
    age : 25,
    weight: 65,
    height : "6fit 1 inch",

    greet: function(){
        console.log("hello jee kaise ho saare");
        
    }
};

for(let key in obj) {
    console.log(key," ",obj[key]);
    
}
