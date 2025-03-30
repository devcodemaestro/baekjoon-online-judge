function solution(a, b, n) {
    var answer = 0
    let result
    while(n >= a){
        result = Math.floor(n/a) * b
        answer+= result
        n = result + (n % a)
    }
    
    return answer;
}