function solution(arr, k) {
    var answer = [];
    let arr2 = [...new Set(arr)]
    let count = 0
    let idx = 0

    while(count !== k){
        if(arr2[idx] === undefined){
            answer.push(-1)
        }else{
            answer.push(arr2[idx])
        }
        count++
        idx++
    }
    return answer;
}