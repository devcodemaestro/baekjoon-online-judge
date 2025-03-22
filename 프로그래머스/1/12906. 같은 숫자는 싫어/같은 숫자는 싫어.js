function solution(arr){
    if(arr.length === 0){
        return []
    }
    var answer = [];
    let prev = arr[0]
    answer.push(arr[0])
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== prev){
            prev = arr[i]
            answer.push(arr[i])
        }
    }
    return answer;
}