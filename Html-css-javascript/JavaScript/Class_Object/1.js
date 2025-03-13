class Human {
    //properties
    age = 13; // expilicitly (public)
    #wt = 80; // Private
    ht = 180;


    //behavior

    walking(){
        console.log("I am walking", this.#wt);
        
    }
    running(){
        console.log("I am running");
        
    }



}


let obj = new Human();
console.log(obj.age);

// console.log(obj.#wt); // error because instance variable is private

obj.walking();

