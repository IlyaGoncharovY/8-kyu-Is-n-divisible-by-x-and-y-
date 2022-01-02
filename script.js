function isDivisible(n, x, y) {
    let numX = n % x == 0;
    let numY = n % y == 0;
    return numX && numY ;
}
