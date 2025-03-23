function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a,b)=>a-b)
    let i = 0;
    while(budget > 0){
        if((budget - arr[i]) >= 0){
            budget -= arr[i]    
            answer++
            i++
        }else{
            break;
        }

    }
    return answer
}