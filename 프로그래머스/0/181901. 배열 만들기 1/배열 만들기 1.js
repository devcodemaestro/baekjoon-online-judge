function solution(n, k) {
    var answer = [];
    let num = k
    while(n >= num){
        answer.push(num)
        num += k
    }
    return answer;
}