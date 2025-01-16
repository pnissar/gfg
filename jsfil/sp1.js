console.log(1);
console.log(2);
setTimeout(() => { console.log(5) }, 3000);
new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log(3);
});
setTimeout(() => {
    console.log(7);
}, 0);
console.log(6);

