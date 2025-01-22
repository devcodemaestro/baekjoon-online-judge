function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let num = Number(intStrs[i].split("").slice(s,s+l).join(""))
        if(num > k){
            answer.push(num)
        }
    }
    return answer;
}