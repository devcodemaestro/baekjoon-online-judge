function solution(my_string, num1, num2) {
    var answer = '';
        
    let arr = my_string.split("")
    let prev = my_string[num1]
    let next = my_string[num2]
    arr.splice(num1, 1, next)
    arr.splice(num2, 1, prev)
    return arr.join("");
}
