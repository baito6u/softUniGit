class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetingByName() {
        return `Hello i am ${this.name}!`;
    }
}
let myPerson = new Person('Todor', 43);
let myPerson2 = new Person('Svetlana', 38);


console.log(myPerson);
console.log(myPerson.greetingByName());
console.log(myPerson.name);
console.log(myPerson.age);
console.log(myPerson2);
console.log('-------------------');
console.log(myPerson2.greetingByName());
console.log(myPerson2.name);
console.log(myPerson2.age);