function solution(my_string, s, e) {
    var answer = '';
    let arr = my_string.split("")
    let str = arr.slice(s,e+1).reverse()
    arr.splice(s,e-s+1, ...str)
    answer = arr.join("")
    return answer;
}