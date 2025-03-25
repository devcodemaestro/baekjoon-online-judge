function solution(food) {
    var answer
    let str
    let frontStr =[]
    let backStr = []
    for(let i = 1; i < food.length; i++){
        str = ''
        rep = Math.floor(food[i]/2)
        str = String(i).repeat(rep)
        frontStr.push(str)
        backStr.unshift(str)                              
    }
    answer = [...frontStr, 0, ...backStr].join("")
    return answer;
}