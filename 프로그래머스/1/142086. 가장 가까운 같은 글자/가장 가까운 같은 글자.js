function solution(s) {
    var answer = [];
    let arr = s.split("").reverse()
    
    for(let i = 0; i < arr.length; i++){
        let target = arr.indexOf(arr[i],i+1)
        if(target === -1){
            answer.push(-1)
        }else{
            answer.push(target -i)
        }
    }
    return answer.reverse();
}