// RECURCIVIDADE
function factorial(n) {
    if (n ==1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))

/*

5! = 5 x 4 x 3 x 2 x1
5! = 5 x 4!

x! = n x (0-1)!
1! = 1

*/

