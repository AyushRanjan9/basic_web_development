// var x=10;

// function getName(){
//     console.log("this is Ayush");
//     // document.getElementById("Ayush").style.backgroundColor="red";

// }
function x(){
    var a =12;
    function y(){
        console.log(a)
    }
}
function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('red') })
var z=x();
console.log(z);
console.log(x);
// getName();
// console.log('getName');
// x();
function Ayush(){
    for(let i=1;i<=10;i++){
        setTimeout(function(){
            console.log(Ayush);
        },1000);
    }
}
Ayush();



