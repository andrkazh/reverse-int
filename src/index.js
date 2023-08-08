module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
    return n.split('').reverse().join('');
    console.log(Number(reverse()));
}