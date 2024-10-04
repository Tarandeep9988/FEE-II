// var undefined

// Let and const: temprael dead zone
console.log(a);
myfunc();
var a = 10;

function myfunc() {
    var b = 20;
    console.log(b);
}
