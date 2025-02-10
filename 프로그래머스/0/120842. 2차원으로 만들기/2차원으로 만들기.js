function solution(num_list, n) {
    let length = num_list.length/n
    var answer = Array.from({length:length},()=>Array.from({length:n},()=>0))
    let arr = [... num_list]
    for(let i = 0; i < length; i++){
        for(let j = 0; j < n; j++){
            answer[i][j] = arr.shift()
        }   
    }
    return answer;
}