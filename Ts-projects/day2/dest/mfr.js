"use strict";
// started with map filter and reduce
let names = new Array("Md", 'ahil', 'Abdullah');
let numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
// iterating on names and numbers 
let upperNames = names.map((val) => val.toUpperCase());
console.log(upperNames);
let cubes = numbers.map((val) => val ** 3);
console.log(numbers, cubes);
//# sourceMappingURL=mfr.js.map