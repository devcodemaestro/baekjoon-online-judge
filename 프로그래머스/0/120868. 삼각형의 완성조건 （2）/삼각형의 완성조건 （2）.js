function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides)
    let min = Math.min(...sides)

    for(let i = (max - min)+1; i < max; i++){
        answer++
    }
    for(let i = max; i < max+min; i++){
        answer++
    }
    return answer;
}


