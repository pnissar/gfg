
const regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d.-\s]{7,10}$/;

function f() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('phone').value;
    console.log(a);
    console.log(b);
    console.log(c);
    let d = document.getElementById("h");
    let a1 = "";
    let a2 = "";
    let a3 = "";
    console.log(typeof c);
        a1 = "<h1>  Name: " + a+"</h1>";
        a2 = "<h1> Email: " + b + "</h1>";
        a3=  "<h1>Phone: " + c+"</h1>";
    if (a.length < 1 || b.length < 1 || c.length < 1) {
        d.textContent = "Please fill the form";
    }
    else {
        if (a.length < 5) {
            a1 = "<h1>  Name: <span style='background-color:red;'>" + a + "</span></h1>";
        }
        if (!(regx.test(b)) || b.length < 5) {
            a2 = "<h1> Email: <span style='background-color:red;'>" + b + "</span></h1>";
        }
        if (c.length != 10 || !(phoneRegex.test(c))) {
            a3 = "<h1>Phone: <span style='background-color:red;'>" + c + "</span></h1>";
        }

        d.innerHTML = a1 + "<br>" + a2 + "<br>" + a3;
    }
}