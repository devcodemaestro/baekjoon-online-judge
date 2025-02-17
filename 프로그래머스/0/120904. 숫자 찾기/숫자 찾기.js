function solution(num, k) {
    var answer = 0 
    let arr = String(num).split("")
    let target = String(k)
    answer = arr.indexOf(target)
    if(answer !== -1){
        return answer+1
    }
    return answer;
}