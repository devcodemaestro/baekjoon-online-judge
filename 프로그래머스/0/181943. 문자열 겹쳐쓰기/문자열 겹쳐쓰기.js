function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let test = my_string.split("")
    test.splice(s, overwrite_string.length, overwrite_string)
    answer = test.join("")
    return answer;
}