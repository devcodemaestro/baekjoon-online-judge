function solution(my_strings, parts) {
    var answer = '';
    for(let i =0; i < my_strings.length; i++){
        let arr = my_strings[i].split("")
        let [s,e] = parts[i]
        answer += arr.slice(s,e+1).join("")
    }
    return answer;
}