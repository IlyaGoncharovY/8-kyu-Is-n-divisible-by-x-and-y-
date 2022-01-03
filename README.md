# 8-kyu-Is-n-divisible-by-x-and-y-

    // Create a function that checks if a number n is divisible 
    // by two numbers x AND y All inputs are positive, non-zero digits.
solution:
function isDivisible(n, x, y) {
    let numX = n % x == 0;
    let numY = n % y == 0;
    return numX && numY ;
}
