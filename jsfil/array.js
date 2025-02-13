a = [1, 2, 3, 4, 5, 5, 6, 677, 6, 7, 34, 5667, 567];
console.log(a.splice(1, 2));
console.log(a);
a.splice(2, 0, "a", "b", "c");
console.log(a);
console.log(a.indexOf(4));
a.splice(0, 2, "A", "B");
console.log(a);
