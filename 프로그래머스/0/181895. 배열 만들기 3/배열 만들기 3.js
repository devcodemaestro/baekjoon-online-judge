function solution(arr, intervals) {
    var answer = [];
    for (let i =0; i < intervals.length; i++){
        let [s,e] = intervals[i]
        answer.push(...(arr.slice(s,e+1)))
    }
    return answer;
}