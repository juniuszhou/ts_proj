class Person {
    name: String;
    constructor(name: String) {
        this.name = name;
    }
}

let person = new Person("Junius");
console.log(person.name);

class Man extends Person {

}

let man = new Man("Zhou")
console.log(man.name)

