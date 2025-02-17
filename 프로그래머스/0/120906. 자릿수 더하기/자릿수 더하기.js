function solution(n) {
    var answer = 0
    let str = n+""
    str.split("").forEach((e)=> answer+= Number(e))
    return answer;
}