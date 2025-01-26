function solution(arr) {
    var answer = [];
    let s = null
    let e = null
    let result = [-1]
    for(let i = 0; i < arr.length; i++){
        if(s !== null && arr[i] === 2){
            e = i
        }else if(s === null && arr[i] === 2){
            s = i
            e = i
        }
    }
    if(s === null){
        return result
    }else {
        answer.push(...(arr.slice(s,e+1)))
    }
    return answer;
}