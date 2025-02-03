function solution(strArr) {
    var answer = 0;
    let obj = {}
    for(let i = 0; i <strArr.length; i++){
        if(obj[strArr[i].length] === undefined){
            obj[strArr[i].length] = 1
        }else{
            obj[strArr[i].length]++
        }
    }
    let arr = Object.values(obj)
    for(let j = 0; j <= arr.length; j++){
        if(answer <= arr[j]){
            answer = arr[j]            
        }
    }
    return answer;
}