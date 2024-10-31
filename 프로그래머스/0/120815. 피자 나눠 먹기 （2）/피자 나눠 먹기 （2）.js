function solution(n) {
    let result = 1
    let count = 6
    var answer = 0;
    while(count % n !== 0){
        count+=6
        result++
    }
    answer = result
    return answer;
}