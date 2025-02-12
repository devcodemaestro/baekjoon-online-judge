function solution(numbers) {
    var answer = 0;
    let nums = numbers.sort((a,b)=> b-a)
    let [num1, num2] = nums 
    answer = num1 * num2
    return answer;
}