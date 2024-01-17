"use strict";
// started with Generics
// generic classes
class KeyValues {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    show() {
        console.log(`${this.key} : ${this.value}`);
    }
}
// we can change and use many types of data byt specifying them
let pair1 = new KeyValues(1, 'ahil');
let pair2 = new KeyValues('one', 'abdullah');
pair1.show();
pair2.show();
// generic functions
class Arrays {
    show(value) {
        return value;
    }
}
let num1 = new Arrays();
let nums = num1.show(1);
console.log(nums);
// generic function using static
class Arrays2 {
    static show(value) {
        return value;
    }
}
let num2 = Arrays2.show(2);
// let nums = num1.show(1) 
console.log(num2);
// contstraints on generics
// here T can be either string ,number or object  
class Bye {
    constructor(value) {
        this.value = value;
    }
}
let hi = new Bye('hello');
console.log(hi.value);
