function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length;i++){
        let arr = my_string.split("").slice(i).join("")
        answer.push(arr)
    }
    return answer.sort()
}