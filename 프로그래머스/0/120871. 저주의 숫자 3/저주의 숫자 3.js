function solution(n) {
    if(n <= 2){
        return n
    }
    
    var answer = 0;
    let num = 3
    for(let i = 3; i <= n; i++){       
        if(num % 3 === 0){
            num++
            i--
            continue
        }
        if(num.toString().split("").indexOf("3") !== -1){
            num++
            i--
            continue
        }
        num++
    }
    answer = num - 1
    return answer;
}
