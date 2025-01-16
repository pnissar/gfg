let v = document.getElementsByClassName("he");
v[0].style.textAlign = "center";
let b = document.getElementsByClassName("contain");
b[0].style.width = "80%";
b[0].style.margin = " 30px auto";
b[0].style.display = 'flex';
b[0].style.justifyContent = "space-between";
let i = document.getElementsByClassName('input');
i[0].style.width = "70%";
i[0].style.height = "40px";
i[0].style.backgroundColor = "aqua";
i[0].style.border = "2px solid brown";
let s = document.getElementsByClassName('sub');
s[0].style.color = "white";
s[0].style.backgroundColor = "Green";
s[0].style.width = "20%";
s[0].style.height = "40px"
let lbd = document.getElementsByClassName("ldb");
lbd[0].style.margin = "2px auto";
lbd[0].style.width = "80%";

let lb = document.getElementsByClassName("lb");
lb[0].style.width = "100%"
lb[0].style.height = "50px"
lb[0].style.textAlign = "center";

i[0].oninput = function ff() {
    lb[0].textContent = i[0].value;
}

function f() {
    console.log(i[0].value);
}