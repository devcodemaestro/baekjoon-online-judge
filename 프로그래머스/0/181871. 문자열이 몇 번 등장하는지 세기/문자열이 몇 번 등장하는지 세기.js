function solution(myString, pat) {
    var answer = 0;
    let idx
    for(let i = 0 ; i <myString.length; i++){
        if(myString.slice(i, i+ pat.length).indexOf(pat) !== -1){
            answer++
        }
    }
    return answer;
}