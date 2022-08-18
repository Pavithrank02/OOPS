const Person = function(firstName , birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear)
}
// pavi.calcage(); 

// const pavi = new Person('Pavi', 1997 );
// console.log(pavi); 
// Person.prototype.species = " Homo Sapiens";
// console.log(pavi.species);

// console.log(pavi.__proto__);

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};
//linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const pavi = new Student('Pavi', 1997, 'Computer' );
console.log(pavi); 
pavi.introduce();
pavi.calcAge();
console.log(pavi.__proto__)
// const Car = function(speed) {
//     this.CurrentSpeed = speed;
// }
// Car.prototype.Accelerate =  function(make) {
//     console.log(this.CurrentSpeed + make)
// }
// Car.prototype.Brake = function(make) {
//     console.log(this.CurrentSpeed - make)
// }
// const BMW = new Car(120);
// BMW.Accelerate(10);
// BMW.Accelerate(10);
// BMW.Accelerate(10);
// BMW.Brake(5);
// BMW.Accelerate(10);
// const Mercedes = new Car(95);
// Mercedes.Accelerate(10);
// Mercedes.Brake(5);

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    //methods
calcAge() {
    console.log(2022 - this.birthYear)
}

greet() {
    console.log(`hey ${this.firstName}`);
}
set fullName(name) {
    console.log(name);

    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`)
}
get fullName() {
    return this._fullName;
}
}

class StudentsCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear)
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
}
calcAge() {
    console/log(`I'm $`)
}
}
const martha = new StudentsCl('Martha Jones', 2012, 'CS');
martha.introduce();
martha.calcAge();

const jessica = new PersonCl('Jessica Davis', 1991);
console.log(jessica);
jessica.calcAge();

jessica.greet(); 



const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {


    }
};

console.log(account.latest);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
}
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__)

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


