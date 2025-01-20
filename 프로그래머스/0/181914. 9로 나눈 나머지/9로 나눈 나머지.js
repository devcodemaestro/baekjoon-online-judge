function solution(number) {
    var answer = 0;
    let arr = number.split("")
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        sum+= Number(arr[i])
    }
    answer = sum %9
    return answer;
}