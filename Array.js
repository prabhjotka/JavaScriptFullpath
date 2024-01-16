const myArr=[3,4,5,6];
const first_name=new Array("sam","ram","resi");
first_name.push("raman");
// console.log(first_name);
first_name.pop();

// console.log(first_name);
// console.log(myArr.shift());
// console.log(myArr.unshift(4));
// console.log(myArr);

console.log(myArr.slice(0,3));
console.log("original array",myArr);
myArr.splice(1,1,45);
console.log("original array",myArr);