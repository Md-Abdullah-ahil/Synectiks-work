// started with Generics

import { Circle } from "./Shapes"
import { CalcTax } from "./Tax"

// generic classes

class KeyValues<K,V>{          //declaring the types using generic using K, V
    constructor(public key:K,public value:V){}
    show():void{
        console.log(`${this.key} : ${this.value}`)
    }
}

// we can change and use many types of data byt specifying them
let pair1 = new KeyValues<number,string>(1,'ahil')
let pair2 = new KeyValues<string,string>('one','abdullah')
pair1.show()
pair2.show()

// generic functions


class Arrays{
    show<T>(value :T){
        return value;
    }
}
let num1 = new Arrays();
let nums = num1.show(1) 
console.log(nums)


// generic function using static
class Arrays2{
    static show<T>(value :T){
        return value;
    }
}
let num2 = Arrays2.show(2);
// let nums = num1.show(1) 
console.log(num2)


// contstraints on generics

// here T can be either string ,number or object  
class Bye <T extends number | string | {}>{

    constructor(public value : T){}
}
let hi = new Bye<string>('hello')
console.log(hi.value)


// modules import and export in TS

let name1 = new Circle('ahil');
name1.show();


let netIncome = CalcTax(10_000);
console.log("salary",netIncome)