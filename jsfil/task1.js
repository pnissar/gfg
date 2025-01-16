var a = 20;
if (a % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

b = 20;
c = 30;
if (a >= b && a >= c) {
    console.log(a);
}
else if (b >= a && b >= c) {
    console.log(b);
}
else {
    console.log(c);
}

if (a == 0 && b == 0 && c == 0) {
    console.log("Point");
}
else if (a == 0 && b == 0) {
    console.log("Line");
}
else if (a == 0) {
    console.log("Angle");
}

if (a != 0 || b != 0 || c != 0) {
    if (a == c && b == c) {
        console.log("Equilateral");
    }
    else if ( ((a == c) && (b< (a) )) || ((a == b  ) && (c< a))|| ((c == b )&& (a<b))   ){
        console.log("Isocelos")
    }
    else if (a + b < c && b + c < a && a + c < b) {
        console.log("Scalene")
    }
    else {
        console.log("Not a triangle")
    }

}

var t = true;

for (let i = 2; i < a; i++){
    console.log(a % i);
    if (a % i == 0) {
        t = false;
        break;
    }
}
if (t==true) {
    console.log("Prime");
}
else {
    console.log("Composite");
}
