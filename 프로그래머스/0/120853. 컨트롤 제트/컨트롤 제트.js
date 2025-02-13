function solution(s) {
    var answer = 0;
    let arr = s.split(" ").map((e)=>Number(e))
    
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            answer -= arr[i-1]
        }else{
            answer+= arr[i]
        }
    }
    return answer;
}