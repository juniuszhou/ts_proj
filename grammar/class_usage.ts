class Person {
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    printName() {
        console.log(this.name)
    }
}

let person = new Person("Junius");
console.log(person.name);

class Man extends Person {

}

let man = new Man("Zhou")
man.printName()
console.log(man.name)


