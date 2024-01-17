// classess in typescript

class Person{
    // name:string ;
    // age:number;
    // city:string;

    constructor(public name:string , public age :number,protected city:string){
        // this.name = name;
        // this.age = age;
        // this.city = city;
        // console.log(name)
    }

    show():void{
        console.log(`i am ${this.name} , age ${this.age} of  ${this.city}`)
    }
}

const obj = new Person('Ahil',21,'hyderabad')
obj.show()



// OOPS concept in Typescript

// inheritance    acquiring properties of parent class

// class Student extends Person{
//     grade:string;
//     constructor(grade:string){
//         super(name:name)
//     }
// }
