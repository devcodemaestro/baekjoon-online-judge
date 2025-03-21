function solution(n) {
    let pattern = ["수","박"]
    let answer = ""
    
    for(let i = 0; i < n; i++){
        answer+= pattern[i%2]
    }
    
    return answer
}