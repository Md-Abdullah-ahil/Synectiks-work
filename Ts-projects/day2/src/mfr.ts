// started with map filter and reduce



let names:string[]=new Array("Md",'ahil','Abdullah')
let numbers:number[] = Array.of(1,2,3,4,5,6,7,8,9)

// iterating on names and numbers 
let upperNames:string[] = names.map((val:string)=>val.toUpperCase())
console.log(upperNames)

let cubes:number[] = numbers.map((val:number)=>val**3) 
console.log(numbers,cubes)

