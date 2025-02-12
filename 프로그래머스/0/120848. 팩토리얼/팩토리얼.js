function solution(n) {
    if(n <= 2){
        return n
    }
    var answer = 2
    let num = 2
    
    for(let i = 3; num < n; i++){
        num *= i
        if(num > n){
            return answer
        }else{
            answer++
        }
    }
    return answer;
}