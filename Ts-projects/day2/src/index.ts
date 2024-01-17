// started  with functions 

// function with parameters

function greet(name :string,id:number){
    console.log(`Hi ${name},your id is ${id}`)
}

greet('Ahil',1)

// arrow function

const Show = (name :string , id:number):string=>{
    return (`Hi ${name},your id is ${id}`)
}


let show = (Show('Abdullah',4))
console.log(show)

// function to check  palindrome 

const isPalindrome = (palin:string):boolean=>{
    let rev = palin.split('').reverse().join("");
    console.log(rev,palin)
    // return rev === palin? true:false;
    return rev === palin
}


console.log(isPalindrome('151'))
console.log(isPalindrome('ABABABABA'))

// functions to calculate average 

const calAvg=(arr:number[])=>{
    console.log(arr)
    let avg = arr.reduce((prev,next,i)=>{
        console.log(`iteration ${i} ,prev : ${prev} , next : ${next}`)
        return prev+next
    })
    console.log(avg)
    return avg
}

console.log(calAvg([1,2,3,4,5,6,7,8,9,0]))

// functions to find MAx value 

const Max=(arr:number[])=>{
    console.log(arr)
    // let max = ()=>{
    //     for(let i = 0;i<arr.length;i++){
    //         console.log(arr[i])
    //         if(arr[i]>arr[i+1]){

    //             return arr[i] 
    //         }
    //         else{
    //             return arr[i+1]
    //         }

    //         // console.log('max',arr)
    //         }}
    return Math.max(...arr)
    // console.log(max)

}

const Max2 = (arr:number[])=>{
    let maxval = -Infinity

    arr.forEach(element => {
        if(element>maxval){
            maxval = element
        }
    });
return maxval}




console.log(Max([10,30,60,0,98,1]))
console.log(Max2([10,30,600,0,98,1]))

