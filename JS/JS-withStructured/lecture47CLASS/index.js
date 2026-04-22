function getAge() {
    return 190;
}

function utility(name = "Love", age = getAge()) {
    console.log(name, " ", age);
}

utility();

function solve(value = "Rahul") {
    console.log("HELLO JII -> ", value);
}
solve(undefined); // NO VALUE SENT so value is default value
solve(null) // null is sent so value is null
function sayName(fName = "Uday", lName = fName.toUpperCase()) {
    console.log("My Name is: ", fName," ", lName);
}

sayName(lName = "Love");

class Human {
    //properties
    age; // public
    #wt = 80; //private
    ht = 180;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    //behaviour

    #walking(){
        console.log("I am Walking ", this.#wt);
    }

    running() {
        console.log("I am running")
    }

    get fetchWeight() {
        return this.#wt;
    }

    set modifyWeight(val) {
        this.#wt = val;
    }
    showdetails(){
        console.log(`${this.ht}`);
    }
}

class Student extends Human{
    constructor(age,height,weight,marks){
        super(age,height,weight)
        this.marks=marks;
    }
}
let s1 = new Student(21,100,200,90)
console.log(s1.marks);
s1.showdetails()


//it is less better than cosntructor
Human.prototype.talk = ()=>{
    console.log("this is human talk");
    
}
let obj = new Human(50, 190,101);
console.log(obj.fetchWeight);
obj.talk()
// obj.walking(); cant access as it private
