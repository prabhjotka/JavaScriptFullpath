// //const coding=["c","c++","java","ruby"];

const marks=[45,67,56,23,67];



// const marksList=marks.filter((mark)=>{
//    return  mark>=50 

// });

// console.log(marksList);
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

const usersList=users.filter((user)=>{ return user.name ==="sam"})

console.log(usersList);


const newMarks=marks.map((mark)=>{

    return mark+10;
});

console.log(newMarks);