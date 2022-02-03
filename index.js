//! OOP 
 
// ! Class 
// - format PascalCase
//   Vehicle, Cat, Animal, SuperPower, MineGame.
// - Singular
// - Kata benda
// - declare property selalu di constructor

// new Phone() --> Instanstiate
// let phoneAyu = new Phone()
// phoneAyu --> Instance 
// this --> Instance di dalam class 
// Person { firstName: 'ayu', lastName: 'sudi' }

// ! Method 
// - Instance Method
//   instance.method()
// - Static Method
//   ClassName.method()
// - Factory Method 
//   ClassFactory.method()


// ! Characteristic OOP 
// - Abstraction
// - Encapsulation
//   getter setter untuk private #.
//   define terlebih dahulu diatas constructor.
//    dari luar class => instance.getter / instance.setter = value
//    dari child => this.getter / this.setter = value
//
// - Inheritance 
//   extends super 
//   property, private, method, getter. 
//
// - Polymorphism (Override)
//   ada inheritance dengan method yang sama 

// ! Composition
// Anime : Naruto - [ Characters :  Naruto Sakura Sasuke ]
// Makanan - [ protein karbohidrat gula ]
// Manusia - Jantung
// ? Tehnical
// - instansiate di dalam class itu sendiri
// constructor / instance method.


// ! Aggregation
// Office 
// Employee : Staff, CEO, Manager, etc.
// ? Tehnical 
// - instansiate di luar class itu sendiri 





class Person {
    #phoneNumber
    constructor(firstName, lastName, phoneNumber, gender) {
        this.firstName = firstName
        this.lastName = lastName
        this.#phoneNumber = phoneNumber
        this.gender = gender
        this.favoriteNumber = this.randomFavoriteNumber()
    }

    get phoneNumber(){
        return this.#phoneNumber
    }
    set phoneNumber(string){
        this.#phoneNumber = string
    }

    get fullName(){ // Getter -> instance.fullName
        if (this.gender == "F") {
            return "Ms. " + this.firstName + " " + this.lastName
        } else {
            return "Mr. " + this.firstName + " " + this.lastName
        }
    }
    greeting(){
        console.log("HAI");
    }
    randomFavoriteNumber(){
        return Math.floor(Math.random() * 100)
    }
}

class Actor extends Person {
    constructor(firstName, lastName, phoneNumber, gender){
        super(firstName, lastName, phoneNumber, gender)
        this.job = "Actor"
        this.achievements = []
    }

    greeting(){
        console.log("Hai semua~");
    }

    randomFavoriteNumber(){
        return Math.floor(Math.random() * 10)
    }
}

class Singer extends Person {
    constructor(firstName, lastName, phoneNumber, gender){
        super(firstName, lastName, phoneNumber, gender)
        this.job = "Singer"
        this.achievements = []
    }
}


class Achievement {
    constructor(name, year){
        this.name = name 
        this.year = year
    }
}



// Actor { firstName: 'ayu', lastName: 'sudi', gender: 'F', job: 'Actor' }
// phone number
// no ktp
// kartu credit 


// Student 
// Lesson
// Teacher 


// "ayu", "sudi", "123456789" // input 
let achievements = [
    {name : "Grammy", year : 2000},
    {name : "Grammy", year : 2005},
    {name : "Grammy", year : 2007}
] // input 


const fs = require("fs")

class Factory {
    static create(fName, lName, phoneNumber, gender, job, arrayAchievement) {
        let person
        if (job === "Actor"){
            person = new Actor(fName, lName, phoneNumber, gender)
        } else if (job === "Singer") {
            person = new Singer(fName, lName, phoneNumber, gender)
        }

        // Aggregation
        arrayAchievement.forEach(e => {
            let instance = new Achievement(e.name, e.year)
            person.achievements.push(instance)
        })
        return person
    }

    static createBulkFromJSON(){
        let data = JSON.parse(fs.readFileSync("./data.json", "utf8"))
        let output = data.map(el => {
            return Factory.create(el.firstName, el.lastName, el.phoneNumber, el.gender, el.job, el.achievements)
        })
       return output
    }
}


// // // Pemanggilan static method
// let output = Factory.create("Ayu", "Dwi", "2345678", "F", "Singer", achievements)
// console.log(output);

let resultJSON = Factory.createBulkFromJSON()
console.log(resultJSON);

class Cookie {
    constructor(ingredients){
        this.ingredients = this.generateIngredient(ingredients)
    }

    generateIngredient(){
        // return  Array of Instance Ingredient
    }
}

class Ingredient {
    constructor(name, weight){
        this.name = name 
        this.weight = weight
    }
}


