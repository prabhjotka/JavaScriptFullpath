const user={
    email:"sam@gmail.com",
    fullname:{
        first_name:"ram",
        last_name:"sinha"
    }

}

// console.log(user.fullname?.first_name);

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

const finalOb=Object.assign({},ob1,ob2);
console.log(finalOb);

const ob3={...ob1,...ob2};
console.log(ob3);
console.log(Object.keys(ob1));
console.log(Object.values(ob2));
console.log(ob2.hasOwnProperty(3));

