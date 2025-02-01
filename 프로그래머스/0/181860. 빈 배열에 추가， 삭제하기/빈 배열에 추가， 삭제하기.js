function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        for(let j = 0; j < num; j++){
            if(flag[i] === true){
                answer.push(num)
                answer.push(num)
            }else{
                answer.pop()
            }
        }
    }
    return answer;
}