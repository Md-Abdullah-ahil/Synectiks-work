// starting with typescript
// using differentt types of data types
// string type
var name1 = 'ahil';
console.log('hi', name1);
// name1 = 2
console.log(typeof name1);
// type any
var js = JSON.parse('55');
console.log(typeof js);
console.log(js);
var val = 'abc';
console.log(typeof val);
console.log(val);
console.log(Math.round(val));
// unknown type
var val2 = 'abc';
console.log(typeof val2);
console.log(val2);
// console.log(Math.round(val2))
// never type
// let val3:never = 'abc'
// console.log(typeof val3)
// console.log(val3)
// array type in ts
// variouse operations in array
var names = ['ahil'];
console.log(names);
names.push('abdullah');
names.push('abdullah ahil');
names.push('abdullah ahil');
console.log(names);
names.unshift('md');
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.splice(1, 1, 'ahmed');
console.log(names);
console.log('slice:', names.slice(1));
console.log(names);
// tuple types array 
var arr;
arr = [1, 2];
console.log(arr);
console.log(typeof arr);
arr.push(5);
console.log(arr);
// arr.push('hi')
console.log(arr);
// named tuple
var tup1;
tup1 = [1, "ahil"];
console.log(tup1);
// destructering tuples
var tupl2 = [34, 1];
var x = tupl2[0], y = tupl2[1];
console.log(tupl2);
console.log(x, y);
console.log(0 /* Size.Small */, 1 /* Size.Medium */, 2 /* Size.Large */);
var mySize = 1 /* Size.Medium */;
console.log(mySize);
