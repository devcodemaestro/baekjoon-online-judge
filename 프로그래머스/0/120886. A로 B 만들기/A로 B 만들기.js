function solution(before, after) {
    var answer
    let a = before.split("").sort().join()
    let b = after.split("").sort().join()

    answer = (a === b) + 0
    
    return answer;
}