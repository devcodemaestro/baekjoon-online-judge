function solution(myString) {
    var answer = '';
    for (e of myString){
        if (e < "l"){
            answer += "l"
        }else{
            answer += e
        }
    }
    return answer;
}