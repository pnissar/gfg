
const v = "https://jsonplaceholder.typicode.com/users";
let body = document.getElementById("body");

function getRandomNumbersInRange(n, e) {
    let s = new Set();
    while (s.size < n) {
        s.add(Math.floor(Math.random() * (e)));
    }
    return Array.from(s);
}



function abc() {
    let cl = document.getElementsByClassName("card-img-top");
    let h1 = document.getElementsByTagName("h1");
    let l = cl.length;

    for (let i = 0; i < l; i++) {
        let col = getRandomNumbersInRange(2, backgroundColors.length);
        console.log(backgroundColors[col[0]]);
        console.log(backgroundColors[col[1]]);
        cl[i].classList.add(backgroundColors[col[0]]);
        h1[i].classList.add(backgroundColors[col[1]]);
        col = getRandomNumbersInRange(1, roundedProperties.length);
        h1[i].classList.add(roundedProperties[col[0]]);
    }
}
const as = async () => {
    const all = await fetch(v);
    const data = await all.json();

    data.forEach(element => {
       
        let div = document.createElement("div");
        div.className = "card shadow-lg col-11 col-sm-5 col-md-3 p-0";
        let div2 = document.createElement("div");
        div2.className = "card-img-top d-flex justify-content-center align-items-center ";
        div2.style.height = "10rem";
        let h1 = document.createElement("h1");
        h1.className = " rounded rounded rounded-pill h1 ";
        h1.innerText = element.name[0];
        div2.appendChild(h1);

        
        let d1 = document.createElement("div");
        d1.className = "card-body";
        let d2 = document.createElement("h5");
        d2.className = "card-title";
        d2.innerText = element.website;
        d1.appendChild(d2);

        Object.entries(element.address).forEach(([k, v]) => {
            let p = document.createElement("p");
            p.innerText = `${k}: ${v}`;
            d1.appendChild(p);
        });
       

        div.appendChild(div2);
        div.appendChild(d1);

        body.appendChild(div);
    });
    abc();
}
as();