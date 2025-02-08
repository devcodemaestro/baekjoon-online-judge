function solution(age) {
    var answer = '';
    let str = String(age)
    for(let e of str){
        let num = Number(e)+97
        answer+= String.fromCharCode(num)
    }
    return answer;
}