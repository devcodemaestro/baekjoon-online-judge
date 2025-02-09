function solution(hp) {
    var answer = 0;
    while(hp >= 5){
        let num = Math.floor(hp / 5)
        hp %= 5
        answer+= num
    }
    while(hp >= 3){
        let num = Math.floor(hp / 3)
        hp %= 3
        answer += num
    }
    while(hp >= 1){
        let num = Math.floor(hp / 1)
        hp %=1
        answer+= num
    }
    return answer;
}