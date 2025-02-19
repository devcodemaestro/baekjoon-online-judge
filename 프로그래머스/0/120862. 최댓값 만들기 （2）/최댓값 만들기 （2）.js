function solution(numbers) {
    var answer = 0;
    let [num1, num2] = numbers.sort((a,b)=> b-a)
    let [num3, num4] = numbers.sort((a,b)=> a-b)

    answer = num1 * num2 > num3 * num4 ? num1 * num2 : num3 * num4
    return answer;
}