function solution(n) {
    var answer = [[]];
    answer = Array.from({ length: n }, () => Array.from({length:n}, ()=> 0));
    for(let i = 0; i < n ; i++){
        answer[i][i] = 1        
    }
    return answer;
}