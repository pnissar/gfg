var a = [];
var fs = prompt("Enter Frst number");
var ls = prompt("Enter last Number");
const abc = function ab(fs, ls) {
    const add = function ad(b) {
        var sum = 0;
        let i = 0;
        while (i < b.length) {
            console.log(b[i]);
            sum += b[i];
            i++;
        }

        return sum;
    }

    const add1 = function ad1(b) {
        var sum = 0;
        for (var i in b) {
            sum += i;
       }

        return sum;
    }

    for (var i = 0; i <= ls; i++) {
        a.push(true);
    }
    var b = [];
    a[1] = false;
    for (var i = 2; i <= ls; i++) {
        if (a[i]) {
            if (i >= fs) {
                b.push(i);
            }
            for (var j = i * i; j <= ls; j += i) {
                a[j] = false;
            }
        }
    }
    console.log(b);
    console.log(add(b));
    console.log(add1(b));
}
abc(fs, ls);
