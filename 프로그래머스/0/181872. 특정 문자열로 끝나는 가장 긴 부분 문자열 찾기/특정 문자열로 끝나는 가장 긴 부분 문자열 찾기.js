function solution(myString, pat) {
    var answer = '';
    let idx = myString.lastIndexOf(pat)
    let length = pat.length;
    answer = myString.split("").slice(0, idx+length).join("")
    return answer;
}