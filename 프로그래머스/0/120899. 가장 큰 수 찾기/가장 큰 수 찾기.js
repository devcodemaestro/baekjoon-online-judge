function solution(array) {
    var answer = [];
    let idx = 0
    let num = 0
    for(let i = 0; i < array.length; i++)
        if(array[i]> num){
            num = array[i]
            idx = i
        }
    answer.push(num)
    answer.push(idx)
    
    return answer;
}