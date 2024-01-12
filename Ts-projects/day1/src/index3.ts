// started with classes
class Person {
    private name: string;
    public age : number;
  
    public constructor(name: string ,age : number) {
      this.name = name;
      this.age = age;
    }
  
    public getName(): string | number {
      return ( this.age,this.name);
    }
  }
  
  const person = new Person("Jane",30);
  console.log(person.getName());