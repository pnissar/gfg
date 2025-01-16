let a = [1, 2, 3, 4, 5, 6]
const ar=a.map((it) => {
    return it * 3
})
console.log(ar);
const arr = a.filter((i) => { return i % 2 })
console.log(arr);
const arr1 = a.reduce((acc, it) => {
    return acc + it
})
console.log(arr1);
let b = "Hello World";
let c = b.split(" ");
const rt = c.map((it) => {
    return (it[0].toUpperCase())+it.slice(1,it.length);
}
)
console.log(rt);
const art = rt.reduce
((acc, it) => {
    return acc+" " + it
})
console.log(art);