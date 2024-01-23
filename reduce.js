const myNums=[1,2,3,4,5,6];


const total=myNums.reduce((acc,cu)=>{
console.log(`acc ${acc} and current value is ${cu}`)
return acc+cu;
},2);

console.log(total);

const shppoingcart=[
    {
        itemName:"Js course",
        price:400,

    },

    {
        itemName:"C++ course",
        price:800,

    },

    {
        itemName:"python course",
        price:900,

    },

]

  

const totalCost=shppoingcart.reduce((acc,item)=> {
    return acc+item.price
},0);

console.log("total price is",totalCost);