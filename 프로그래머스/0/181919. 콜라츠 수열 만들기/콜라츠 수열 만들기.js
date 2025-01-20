function solution(n) {
    var answer = [];
    let i= n;
    while(true){
        answer.push(i)
        if(i === 1){
            return answer
        }else if(i %2 === 0){
            i= i/2
        }else {
            i= (3 * i) + 1
        }
    }
}