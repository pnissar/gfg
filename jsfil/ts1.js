let a = "Hello wolrds";
let b = a.split(" ");
let c = b.map((it) => {
    return it.length;
})
let d = Math.max(...c);
console.log(b[c.indexOf(d)]);
b = "aa bcb bd ff fcf gh fhg"
b=b.split(" ");

let pal = b.filter((it) => {
    return it == it.split("").reverse().join("");  
})
console.log(pal);

b = "The cat and the act are related However the dog and god have no connection";
b = b.split(" ");
let ama = b.map((it) => {
    return it.split("").sort().join("");
}
)
let anna = b.filter((it) => {
    let a=ama.filter((i) => {
        return i == it.split("").sort().join("");
    }
    )
    return a.length > 1;
}
)
console.log(anna);
let arr = "Hello".split("");
let dup = arr.filter((it, index) => {
    return arr.indexOf(it) == index;
}
)
console.log(dup.join(""));
