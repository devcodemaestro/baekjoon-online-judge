function solution(myString, pat) {
    var answer = 0;
    let str = myString.toUpperCase()
    let str2 = pat.toUpperCase()
    if(str.indexOf(str2) !== -1){
        return 1
    }
    return answer;
}