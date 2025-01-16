

console.log(typeof (typeof 10));

function xyz(){
    console.log("Hello");
        
}
xyz();
const abc = function xy(){
    console.log("World");
        
}
abc();

(function fu(params) {
    console.log("Google");
})()


function out() {
    function inn (){
        console.log(a);
    }
    var a = 420;
    inn();
}
out();


function one() {
    var a = 100;
    function two() {
        var b = 10;
        function three() {
            var c = 100;
        }
        three();
        
        
        
    }
    two();
}
one();

const a = []
for (var i = 1; i < 11; i++){
    a.push(i);
}
console.log(a);