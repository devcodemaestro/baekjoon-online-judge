function solution(box, n) {
    var answer = 0;
    let [가로, 세로, 높이] = box

    가로 = Math.floor(가로 / n)
    세로 = Math.floor(세로 / n)
    높이 = Math.floor(높이 / n)
    
    return 가로 * 세로 * 높이
}