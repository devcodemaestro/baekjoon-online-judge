function solution(slice, n) {
    let count = 1
    let num = slice
    while(num - n < 0){
        count++
        num += slice
    }
    var answer = count;
    return answer;
}