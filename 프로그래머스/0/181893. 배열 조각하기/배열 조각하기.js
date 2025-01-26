function solution(arr, query) {
    var answer = []
    for(let i = 0; i < query.length; i++){
        let idx = query[i]
        if(i % 2 === 0){
            arr = arr.splice(0, idx+1)
        }else {
            arr = arr.splice(idx, arr.length)
        }
    }
    answer = arr
    return answer;
}