const  calculateCart=function(...num) { //rest operator in function parameter
    return num;

}
console.log(calculateCart(10,20,30));

const user={
    username:"prab",
    userID:45
}
const printUser=function(anyObject)
{
    console.log(anyObject);
console.log(` Username is ${anyObject.username} and userId is ${anyObject.userID}`)
}

printUser(user);