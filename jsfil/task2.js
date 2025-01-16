let a = "Hello World";
let vel = "aeiouAEIOU"
a= a.split('');
let b = a.filter((i) => {
    return vel.includes(i);
})
console.log(b);
a = "Nissar Hello World";
a = a.split(" ");
let c = a.map((i) => {
    return i[0];
})
c = c.reduce((i, j) => {
    return i + j;
})
console.log(c); 

