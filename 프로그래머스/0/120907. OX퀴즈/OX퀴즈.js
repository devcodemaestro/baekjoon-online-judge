function solution(quiz) {
    var answer = [];
    for(let i = 0; i < quiz.length; i++){
        let [num1, type, num2, equal, result] = quiz[i].split(" ")
        if(type === "+"){
            Number(num1) + Number(num2) === Number(result) ? answer.push("O") : answer.push("X")
        }else{
            Number(num1) - Number(num2) === Number(result) ? answer.push("O") : answer.push("X")
            
        }
    }
    return answer;
}