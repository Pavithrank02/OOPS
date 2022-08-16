const Person = function(firstName , birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
}

const pavi = new Person('Pavi', 1997 );
console.log(pavi); 


Person.prototype.calcage = function () {
    console.log(2022 - this.birthYear)
}
pavi.calcage(); 
Person.prototype.species = " Homo Sapiens";
console.log(pavi.species);

console.log(pavi.__proto__);
