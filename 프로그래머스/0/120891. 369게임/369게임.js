function solution(order) {
    var answer = 0;
    let str = String(order).split("")
    let count = str.filter((e)=> e === "3" || e === "6" || e === "9").length
    answer = count
    return answer;
}