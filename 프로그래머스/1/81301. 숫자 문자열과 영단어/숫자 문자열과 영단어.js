function solution(s) {
    var answer = s
    let patterns = {
        0:"zero",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine"
    }
    for(let pattern in patterns){ 
        answer = answer.replaceAll(patterns[pattern], pattern)
        
    }
    return Number(answer);
}