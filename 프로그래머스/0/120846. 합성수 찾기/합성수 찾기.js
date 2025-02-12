function solution(n) {
    var answer = 0;
    let count
    for(let i = n; i> 0; i--){
        count=0
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count++
            }
            if(count >= 3){
                answer++
                break;
            }
        }
    }
    return answer;
}