function solution(myString) {
    var answer = []
    let arr = myString.split("x").sort()
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ""){
            answer.push(arr[i])
        }
    }
    
    return answer;
}