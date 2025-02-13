function solution(sides) {
    var answer = 1
    let arr = sides.sort((a,b)=>(b-a))
    let [num1, num2, num3] = arr
    if(num1 >= (num2 + num3)){
        answer = 2
    }
    return answer;
}