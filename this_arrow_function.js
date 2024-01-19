const user={
    userName:"Prabh",
    userID:45,
    printValues:function()
    {
console.log(this.userName);
    }

}
user.printValues();


const addTwo=(num1,num2)=>  (num1+num2);

console.log(addTwo(3,4));

const returnObject=()=>({key:"hi"})


console.log(returnObject());


// immediately invoked function expression   (IIFE)


(function print()
{
    console.log("hello making coding fun place");
})();

( (name)=>{
    console.log(name);

})("Prabh");
