let v = "https://jsonplaceholder.typicode.com/users";
let a = [];
const fet = async()=>{
    const data = await fetch(v);
    const res = await data.json();
    const usname = res.map((item)=>{
        return item.username;
    });
    const li = document.createElement('ul');
    for(let i of usname){
        let ch = document.createElement('li');
        ch.textContent = i;
        li.appendChild(ch);
        
    }
    document.getElementById('body').appendChild(li);
}
fet();
console.log(a);


