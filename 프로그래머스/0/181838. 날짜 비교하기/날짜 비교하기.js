function solution(date1, date2) {
    var answer = 0;
    let answer2=0
    date1.map((e)=> answer+=String(e))
    date2.map((i)=> answer2+=String(i))
    return Number(answer) < Number(answer2) ? 1 : 0
}