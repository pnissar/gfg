let h = document.getElementById("hr");
let m = document.getElementById("min");
let s = document.getElementById("sec");
let n = document.getElementById("mill");
let c = 0;
let hr = 0;
let min = 0;
let sec = 0;
let v = false;
let interval;

h.innerText = dec(hr);
m.innerText = dec(min);
s.innerText = dec(sec);
n.innerText = dec(c);

function dec(m) {
    return m < 10 ? "0" + m : m;
}
function rs() {
    c = 0;
    hr = 0;
    min = 0;
    sec = 0;
    h.innerText = dec(hr);
    m.innerText = dec(min);
    s.innerText = dec(sec);
    n.innerText = dec(c);
    v = false;
    clearInterval(interval);
}

function st() {
    if (!v) {
        v = true;
        interval = setInterval(up, 10);
    }
}

function stp() {
    v = false;
    clearInterval(interval);
}

function up() {
    c++;
    if (c == 100) {
        c = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }
    h.innerText = dec(hr);
    m.innerText = dec(min);
    s.innerText = dec(sec);
    n.innerText = dec(c);
}
