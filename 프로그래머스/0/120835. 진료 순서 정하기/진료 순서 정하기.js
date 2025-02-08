function solution(emergency) {
    let answer = []
    let arr = [...emergency].sort((a,b)=>b-a)
    for(let el of emergency){
        answer.push(arr.indexOf(el)+1)
        
    }
    return answer;
}