function solution(my_string) {
    let arr = my_string.split(" ")
    let answer = arr[0] * 1
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === "+"){
            answer += arr[i+1] *1
            i++
        }else{
            answer -= arr[i+1] * 1
            i++
        }
    }
    return answer
}