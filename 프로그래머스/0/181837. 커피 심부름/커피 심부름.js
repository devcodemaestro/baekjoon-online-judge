function solution(order) {
    var answer = 0;
    for(el of order){
        if(el.indexOf("cafelatte") !== -1){
            answer += 5000
        }else{
            answer += 4500
        }
    }
    return answer;
}