function solution(array, n) {
    var answer = 0;
    array.push(n)
    let arr = array.sort((a,b)=>a-b)
    let idx = arr.indexOf(n)
    let prev = Math.abs(arr[idx] - arr[idx-1])
    let next = Math.abs(arr[idx] - arr[idx+1])
    
    if(prev > next || arr[idx-1] === undefined){
        answer = arr[idx+1]
    }else if(prev < next || arr[idx+1] === undefined){
        answer = arr[idx-1]
    }else if (prev === next){
        answer = arr[idx-1]
    }
    return answer;
}