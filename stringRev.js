
const str="This is coding problem to solve";
const finalStr=strReverse(str);
console.log(finalStr);
function strReverse(str)
{
    let revStr=[];

    for(let i=str.length;i>=0;i--)
    {
       
    // revStr=str[i];
    revStr.push(str[i]);
    }
     const finalStr=revStr.join("");
   return finalStr;
}

