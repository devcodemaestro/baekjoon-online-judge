function solution(n){
    var answer = 0;
    n.toString().split("").forEach((n)=> answer+= Number(n))
    return answer;
}