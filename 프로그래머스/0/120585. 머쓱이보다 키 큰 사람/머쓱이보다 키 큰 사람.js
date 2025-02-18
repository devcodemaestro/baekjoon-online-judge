function solution(array, height) {
    var answer = 0;
    let arr = [...array, height].sort((a,b)=> b-a)
    answer = arr.indexOf(height)
    return answer;
}