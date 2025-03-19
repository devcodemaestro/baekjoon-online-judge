function solution(i, j, k) {
    var answer = 0;
    for(; i <= j; i++){
        let str = i.toString()
        for(let x = 0; x < str.length; x++){
            if(str[x].includes(String(k))){
                answer++
            }
        }
    }
    return answer;
}