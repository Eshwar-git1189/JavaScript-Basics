const sample = (x) => {
    return x;
}
const fib = (y) => {
    if(y <=1) return y;
    return fib(y-1) + fib(y-2);
}

module.exports = {
    sample,
    fib,
};