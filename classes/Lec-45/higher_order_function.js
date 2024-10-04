// higher order function

// print name 20 times

function printName(func, num) {
    for (let index = 0; index <= num; index++) {
        func();
    }
}

let myName = function() {
    console.log("Acer swift 3 go");
};
printName(myName, 20);