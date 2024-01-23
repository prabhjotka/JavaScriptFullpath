// // for of
const arr=[4,5,6,7,8,4]

for(let index of arr)
{
    console.log(index);
}

const greeting="Hello How are You!";

for(const i of greeting)
{
    console.log(i);
}

//Maps

const map=new Map();

map.set("IN","INDIA");
map.set("Fr","France");
for(const [key,value] of map)
{
    console.log(key,":",value);
}


const games={
    'game1':"Basketball",
    'game2':"Cricket"

}


for(const key in games)
{
    console.log(games[key]);
}

const coding=["c","c++","java","ruby"]

// coding.forEach((values)=>{
// console.log(values);
// })

function printME(value)
{
    console.log(value)
}
coding.forEach(printME)

coding.forEach((values,index,array)=>{
console.log(values,index,array);
})


const users=[
    {
    name:"sam",
    userid:35,
    },

    {
        name:"simmi",
        userid:36,
    },
    {
        name:"rimi",
        userid:37,
    }
]


users.forEach((user)=>{

console.log(` Name is ${user.name} and user id is ${user.userid}`);


})