class Student {
    rollNo = 120;
    Name = 'Ranjan';
    #DOB = 2006;


    get fetchDOB() {
        return this.#DOB;
    }

    set modifyDOB(val) {
        this.#DOB = val;
    }
}

let obj = new Student();
let DOB = obj.fetchDOB;
console.log(DOB);
