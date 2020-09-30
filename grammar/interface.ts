"use strict"

// you can define the same interface twice
interface DudeInterface {
  name: string;
}

interface DudeInterface {
  age: number;
}

const pawel: DudeInterface = {
  name: "Pawel Grzybek",
  age: 31
};

console.log(pawel);

interface either = name | title;

interface Either {
    [key in either]: string;
}

let a: Either = {name: "name"};

console.log(a);
