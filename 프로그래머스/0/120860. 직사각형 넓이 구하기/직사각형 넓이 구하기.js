function solution(dots) {
    var answer = 0;
    let xs = []
    let ys = []
    let x
    let y
    
    for(let i = 0 ; i < dots.length; i++){
        let [left, right] = dots[i]
        xs.push(left)
        ys.push(right)
    }
    
    x = Math.max(...xs) - Math.min(...xs)
    y = Math.max(...ys) - Math.min(...ys)
    answer = x*y
    
    return answer;
    
}