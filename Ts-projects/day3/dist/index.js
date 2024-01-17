"use strict";
// classess in typescript
class Person {
    // name:string ;
    // age:number;
    // city:string;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        // this.name = name;
        // this.age = age;
        // this.city = city;
        // console.log(name)
    }
    show() {
        console.log(`i am ${this.name} , age ${this.age} of  ${this.city}`);
    }
}
const obj = new Person('Ahil', 21, 'hyderabad');
obj.show();
// OOPS concept in Typescript
// inheritance    acquiring properties of parent class
// class Student extends Person{
//     grade:string;
//     constructor(grade:string){
//         super(name:name)
//     }
// }
