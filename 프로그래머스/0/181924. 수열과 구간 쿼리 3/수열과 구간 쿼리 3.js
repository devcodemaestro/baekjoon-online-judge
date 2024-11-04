function solution(arr, queries) {
    let prev
    let i
    let j
    for(let idx = 0; idx < queries.length; idx++){
        i = queries[idx][0]
        j = queries[idx][1]
        prev = arr[i]
        arr[i] = arr[j]
        arr[j] = prev
    }
    var answer = arr
    return answer;
}