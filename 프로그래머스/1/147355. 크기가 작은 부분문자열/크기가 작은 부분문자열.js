function solution(t, p) {
    var answer = 0;
    let target = Number(p)

    for(let i = 0 ; i < t.length - p.length + 1; i++){
        let num = Number(t.slice(i,i+p.length))
        if(num <= target){
            answer++
        }
    }
    return answer;
}