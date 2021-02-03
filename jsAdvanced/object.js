// How to create object in javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak

/*
let Person1 = {
    name: "Muhammad Ramadhan",
    energy: 10,

    makan: function(porsi) {
        this.energy += porsi
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }
} 

let Person2 = {
    name: "Bunga Dwitamala",
    energy: 8,

    makan: function(porsi) {
        this.energy += porsi
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }
}
*/









// 2. Function Declaration

/*
function Person(name, energy) {
    let person = {};
    person.name = name;
    person.energy = energy;

    person.eat = function(portion) {
        this.energy += portion;
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }

    person.play = function(hours) {
        this.energy -= hours;
        console.log(`Hai ${this.name}, Have a nice play`)
    }

    return person;
}

let madan = Person("Madan", 10);
let bunga = Person("Bunga", 8);
*/







// 3. Constructor Function
// keyword new

/*
function Person(name, energy) {
    this.name = name;
    this.energy = energy;

    this.eat = function(portion) {
        this.energy += portion;
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }

    this.play = function(hours) {
        this.energy -= hours;
        console.log(`Hai ${this.name}, Have a nice play`)
    }
}

let madan = new Person("Madan", 10)
*/

// 4. Object.create 

function Person(name, energy) {
    this.name = name;
    this.energy = energy;
    }

    Person.prototype.eat = function(portion) {
        this.energy += portion;
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }
    
    Person.prototype.sleep = function(hours) {
        this.energy += hours * 2;
        console.log(`Hai ${this.name}, Good Night`)
    }

    Person.prototype.play = function(hours) {
        this.energy -= hours;
        console.log(`Hai ${this.name}, Have a nice play`)
    }

let madan = new Person("Madan", 10);
let bunga = new Person("Bunga", 8);

    // Versi Class

/*
class Person {
    constructor ( name, energy ) {
        this.name = name;
        this.energy = energy;
    }

    eat(portion) {
        this.energy += portion;
        console.log(`Hai ${this.name}, Enjoy your meal`)
    }

    play(hours) {
        this.energy -= hours;
        console.log(`Hai ${this.name}, Have a nice play`)
    }

    sleep(hours) {
        this.energy += hours * 2;
        console.log(`Hai ${this.name}, Good Night`)
    }
}

let madan = new Person("Madan", 10);
let bunga = new Person("Bunga", 8);
*/