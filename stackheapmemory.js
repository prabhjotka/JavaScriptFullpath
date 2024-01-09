// primitive=> stack
// non primitive=>heap

let firstName = "sam";
let anothername;

anothername = firstName;
anothername = "prabh"
console.log(firstName);
console.log(anothername);

let user = {
    name: "sam",
    id: 45,
}
console.log(user);
user.name = "neha"

console.log(user);
