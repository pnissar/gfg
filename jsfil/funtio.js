a = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
const a1 = a.map((it) => it * 2);
console.log(a1);
const a2 = a1.filter((it) => it % 3 == 1);
console.log(a2);
const a3 = a2.reduce((p, it) => (p + it));
console.log(a3);
const f = (...c)=>{
    // console.log(a);
    console.log(c);
}
f(1)
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see rejection

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))  // Runs if resolved
    .catch(error => console.error(error)); // Runs if rejected
