

function solution(balls, share) {
    var answer = 0;
     const factorial = function fact(n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);
    };   
    answer = factorial(balls) / (factorial((balls-share)) * factorial(share))
    
    return Math.round(answer);
}