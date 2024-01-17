"use strict";
// started with type assertions
// as const , as any , as type
let value = 'hi hello!';
console.log(typeof value);
let len = value.length;
console.log(typeof value);
console.log(len, typeof len);
// interface 
// interface Person{
//     name:string ;
//     id:number ;
// }
// function print(person:Person){
//     // Person.name = 'ahil'
//     console.log(typeof person.name)
//     console.log( person.name)
// }
// print()
// classes
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    }
}
let obj = new Car('audi', 'v20', 2003);
// console.log(obj.drive())
obj.drive();
let p1 = { x: 10, y: 20 };
let p2 = p1;
console.log('p1:', p1);
console.log('p2:', p2);
//# sourceMappingURL=index2.js.map