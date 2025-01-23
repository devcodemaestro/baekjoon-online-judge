function solution(my_string, indices) {
    var answer = my_string
    let arr = my_string.split("")
    for(let i = 0; i < indices.length; i++){
        arr[indices[i]]=""
    }
    answer = arr.join("")
    return answer
}