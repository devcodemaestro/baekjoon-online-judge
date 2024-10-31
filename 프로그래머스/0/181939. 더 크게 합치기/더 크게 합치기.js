function solution(a, b) {
    let str1 = String(a)
    let str2 = String(b)
    let result1 = Number(str1+ str2)
    let result2 = Number(str2 + str1)
    
    
    var answer = result1 > result2 ? result1 : result2
    return answer;
}