let body = document.getElementById("body");
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"]
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Mark Twain"]
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea", "Thailand"]
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Horse", "Kangaroo"]
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Cilantro"]
    },
    {
        question: "What is the smallest prime number?",
        options: ["2", "3", "5", "7"]
    }
];
function home() {
    body.innerHTML = "";
    let div = document.createElement("div");
    div.className = "main container-fluid d-flex justify-content-center align-items-center gap-4 w-75 h-75 rounded rounded-5";
    let h2 = document.createElement("h1");
    h2.innerText = "Score : "+sc+"/10";
    let bt = document.createElement("button");
    bt.className = "btn btn-outline-warning btn-lg border-3 fs-3 fw-bolder";
    bt.innerText = "Home >";
    bt.onclick = function () {
        body.innerHTML = "";
        let div1 = document.createElement("div");
        div1.className = "main container-fluid d-flex justify-content-center align-items-center gap-4 w-75 h-75 rounded rounded-5";
        let h21 = document.createElement("h1");
        h21.innerText = "Start The Quize";
        let bt1 = document.createElement("button");
        bt1.className = "btn btn-outline-warning btn-lg border-3 fs-3 fw-bolder";
        bt1.innerText = "Start >";
        bt1.onclick = st; 
        div1.appendChild(h21);
        div1.appendChild(bt1);
        body.appendChild(div1);
    } 
    div.appendChild(h2);
    div.appendChild(bt);
    body.appendChild(div);
}
let it = 0;
let sc = 0;
function st() {
    if (it == questions.length) {
        home();
        it = 0;
    }
    else {
        body.innerHTML = "";
        let pd = document.createElement("div");
        pd.className = "main w-75 h-auto rounded rounded-5 d-flex flex-column justify-content-around gap-5 ";
        let h2 = document.createElement("h2");
        h2.className = "text-center mt-4";
        h2.innerText= "Score : "+sc+"/10";
        let cdr = document.createElement("div");
        cdr.className = "row d-flex justify-content-center gap-2 gap-md-5";
        let q = document.createElement("h4");
        q.className = "text-center text-break col-12";
        q.innerText = questions[it].question;
        cdr.appendChild(q);
        let se = new Set();
        while (se.size < 4) {
            se.add(Math.floor(Math.random() * 4));
        }
        for (let i of se) {
            let bu;
            bu = document.createElement("button");
            bu.className = "btn btn-secondary btn-lg col-10 col-md-5";
            bu.innerText = questions[it].options[i];
            if (i == 0) {
                bu.onclick = function () {
                    bu.classList.remove("btn-secondary");
                    bu.classList.add("btn-success");
                    sc++;
                    h2.innerText = "Score :" + sc + "/10";
                    let ty = cdr.children;
                    for (let j of ty) {
                        j.onclick = null;
                    }
                }
            }
            else {
                bu.onclick = function () {
                    bu.classList.remove("btn-secondary");
                    bu.classList.add("btn-danger");
                     let ty = cdr.children;
                    for (let j of ty) {
                        j.onclick = null;
                    }
                }
            }
            cdr.appendChild(bu);
        }
        let nx = document.createElement("button");
        nx.innerText = "Next >";
        nx.className = "btn btn-outline-warning btn-lg border-3 fs-3 fw-bolder w-50 align-self-center mb-4";
        nx.onclick = st;
        pd.appendChild(h2);
        pd.appendChild(cdr);
        pd.appendChild(nx);
        body.appendChild(pd);
        it++;
    }
}

