class Human {
    age;
    #wt = 80;
    ht = 180;

    set modifyWT(val){
        this.#wt = val;
    }


    constructor(newAge, newHeight,newWeight){
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }
}

let obj = new Human(50, 190, 101);
console.log(obj.age);
