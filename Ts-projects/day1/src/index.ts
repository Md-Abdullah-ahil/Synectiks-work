// starting with typescript

// using differentt types of data types

// string type
let name1 : string = 'ahil'
console.log('hi',name1)
// name1 = 2
console.log(typeof name1)

// type any
let js = JSON.parse('55')
console.log(typeof js)
console.log(js)


let val:any = 'abc'
console.log(typeof val)
console.log(val)
console.log(Math.round(val))

// unknown type
let val2:unknown = 'abc'
console.log(typeof val2)
console.log(val2)
// console.log(Math.round(val2))


// never type
// let val3:never = 'abc'
// console.log(typeof val3)
// console.log(val3)

// array type in ts
// variouse operations in array
let names : string[] = ['ahil'] ;
console.log(names)
names.push('abdullah')
names.push('abdullah ahil')
names.push('abdullah ahil')
console.log(names)
names.unshift('md')
console.log(names)
names.pop()
console.log(names)
names.shift()
console.log(names)
names.splice(1,1,'ahmed')
console.log(names)
console.log('slice:',names.slice(1))
console.log(names)

// tuple types array 
let arr:[number ,number];
arr = [1,2]
console.log(arr)
console.log(typeof arr)

arr.push(5)
console.log(arr)

// arr.push('hi')
console.log(arr)

// named tuple

let tup1 : [x:number , y:string];
tup1=[1,"ahil"]
console.log(tup1)

// destructering tuples

let tupl2 :[number,number] =[34,1]

let [x,y] = tupl2;
console.log(tupl2)
console.log(x,y)

// Enums in ts

const enum Size {Small  , Medium ,Large }
console.log(Size.Small,Size.Medium,Size.Large)
let mySize = Size.Medium;
console.log(mySize
    )

    