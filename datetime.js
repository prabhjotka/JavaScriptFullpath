let mydate=new Date();
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toJSON());
console.log(typeof mydate);

let mydate2=new Date(2023,0,23);
// console.log(mydate2.toDateString());
let myTimestamp=Date.now();
// console.log(myTimestamp);
// console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));