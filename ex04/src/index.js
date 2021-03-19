// Only change code below this line
function sumFibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var fib = 0;
    var sol = 0;
    if (num === 1) {
        return 1;
    }
    if (num < 1) {
        return 0;
    }
    for (var i = 2; i <= num; i++) {
        fib = num1 + num2;
        if (fib % 2 !== 0 && fib <= num) {
            sol += fib;
        }
        num1 = num2;
        num2 = fib;
    }
    return sol + 1;
}    
// Only change code above this line
console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;
