function solution(num_list) {
    let 홀수 = "";
    let 짝수 = "";
    var answer
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            짝수 += String(num_list[i])
        }else{
            홀수 += String(num_list[i])
        }
    }
    answer = Number(홀수) + Number(짝수)
    return answer;
}