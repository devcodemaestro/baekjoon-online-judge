function solution(n) {
    var answer = 2;
    let target = n/3
    for(let i = 0; i < target; i++){
        if(i **2 === n){
            return 1
        }
    }
    return answer;
}

72