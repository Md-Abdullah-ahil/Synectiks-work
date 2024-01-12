function Show(name:string){
    console.log("Hi",name)
    return name
}
Show('Ahil')

function Show1(name:string){
    console.log("Hi",name)
    return name
}
Show1('Ahil1')

function Show2(name:string):string{
    console.log("Hi",name)
    return name
}
Show2('Ahil2')

function Show4(num:number,TaxYear=2022){
    console.log("num=",num)
    // let x=10
    if(TaxYear >=2020){
        console.log('true',num)
        return num
    }
    console.log('false')
    return num
}
Show4(30,2000)

// objects in ts

let obj = {id:1}
console.log(obj)

let obj2 :{
    id:number,
    name:string

}
obj2={id:1,name:"Ahil"}

console.log(obj2)

// union and narrowing


function KgToLbs(weight :number | string){
    if(typeof weight === "number"){
        return console.log('number:',weight*8)
    }
    else
        return console.log('string:',weight)
}
KgToLbs(10)
KgToLbs('10kg')


// INTERSECTION
function KgToLbs2(weight :number & string){
    if(typeof weight === "number"){
        return console.log('number:',weight*8)
    }
    else
        return console.log('string:',weight)
}
// KgToLbs2(10)
// KgToLbs2('10kg')

// optional chaining

type cust = {birthday :Date}

function getCustomer(id : number) :cust | null{
    return id === 0 ? null : {birthday :new Date()}
}

// if element is not null and not undefined 
let customer = getCustomer(2)
console.log(customer?.birthday)
console.log(customer?.birthday.getFullYear())
