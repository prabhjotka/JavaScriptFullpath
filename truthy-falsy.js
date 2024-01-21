

//false values = false,0,-0,0n,"",null,undefined,NaN

//truthy values= true,1,"0","false"," ",[],{},function(){}

let user="Admin"
if(user)
{
    console.log("Admin logged in")
}
else{
    console.log("Not a current user")
}

const emptyObj={}

if(Object.keys(emptyObj).length===0)
{
    console.log("empty opbject")
}

// Nullish Coalescing operator (??): null undefined
let var1;
// var1= 5 ?? 10
//  var1=null ?? 20;
// var1=undefined ?? 30;
var1=null ?? 20 ?? 40;
console.log(var1);

// Ternary operator

const coffee="french vanilla";

coffee ==="french vanilla" ?  console.log("I will take it"): console.log('I did not like to place order');