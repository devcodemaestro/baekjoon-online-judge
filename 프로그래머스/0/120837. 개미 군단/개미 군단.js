function solution(hp) {
    var answer = 0;
    let num1 = Math.floor(hp / 5)
        hp %= 5
        answer+= num1
    
    let num2 = Math.floor(hp / 3)
        hp %= 3
        answer += num2
    
    let num3 = Math.floor(hp / 1)
        answer+= num3
    
    return answer;
}