const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printEven(checkEven, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (checkEven(arr[i])) {
            console.log(arr[i], "is even");;
        }
        else {
            console.log(arr[i], "is not even");
        }
    }
}


const isEven = function(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}
printEven(isEven, arr);