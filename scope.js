

var a=10

const printValue=function()
{

    let b=20;
    const c=30;
    var a=40;
}

console.log(a);               // has global scope  
// console.log(b);          //Cannot acscess due to local scope in function
//console.log(c);           //Cannot acscess due to local scope in function


function first()
{

let iceCream="vanilla";
    function inner()
    {

        console.log(iceCream);          // inner function can user parent function variable
    }
    inner();
}

first();


//  +++++++++++++++ hoisting++++++++++++


console.log(subtractValues(9,5));
function subtractValues(c,d)
{
    return c-d;
}

// console.log(addvalues(5,6));             //will give error if using function expression
const addvalues=function(a,b)
{
    return a+b;
}

