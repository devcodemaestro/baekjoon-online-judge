function solution(money) {
    var answer = [];
    let count = 0
    while(money >= 5500){
        money-= 5500
        count++
    }
    answer.push(count)
    answer.push(money)
    return answer;
}