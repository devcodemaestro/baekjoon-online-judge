function solution(n) {
    var answer = [];
    let arr = []
    let idx = 0
    
    for(let i = 2 ; i < n; i++){
        if(n % i === 0){
            arr.push(i)
        }
    }    
    
    for(let j = 0; j < arr.length; j++){
        if(n % arr[j] === 0){
            n /= arr[j]
            answer.push(arr[j])
            j--
        }
    }
    
    if(answer.length === 0){
        answer.push(n)
    }
    let result = [...new Set(answer)]
    return result
}