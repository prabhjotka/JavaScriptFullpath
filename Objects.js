

const key1=Symbol();
const user1={
    name:"Raman",
    userid:45,
    [key1]:"abc"
}
// console.log(user1.name)
// console.log(user1["userid"]);
// console.log(user1[key1]);

// Object.freeze(user1);
// user1.userid=67;
// console.log(user1);
user1.greeting=function()
{
    console.log(`Hello hi ${this.name}`)
}
console.log(user1.greeting());