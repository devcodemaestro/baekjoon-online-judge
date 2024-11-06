function solution(arr, queries) {
    var answer = [];
    for(let start = 0; start < queries.length; start++){
        let [s, e, k] = queries[start]
        for(let i = s; i <= e; i++){
            if(i % k === 0){
                arr[i] += 1
            }
        }
    }
    answer = arr
    return answer;
}