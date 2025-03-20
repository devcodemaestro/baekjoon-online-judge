function solution(answers) {
    var result = [0,0,0];
    let patterns = [
        [1,2,3,4,5], 
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    for(const [i, answer] of answers.entries()){
        for(const [j, pattern] of patterns.entries()){
            if(answer === pattern[i % pattern.length]){
                result[j] += 1
            }
        }
    }
    const maxScore = Math.max(...result)

    const answer = []
    for(let i = 0 ; i < result.length; i++){
        if(result[i] === maxScore){
            answer.push(i+1)
        }
    }
    return answer
}