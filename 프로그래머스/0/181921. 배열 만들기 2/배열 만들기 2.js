function solution(l, r) {
    let zero = "0"
    let five = "5"
    var answer = [];
    for(let i = l; i <=r ; i++){
        let str = String(i).split("")
        let length = str.length;
        let flag= true;
        for(let j = 0; j<length; j++){
            if(str[j] % 5 !==0){
                flag = false
                break;
            }
        }
        if(flag){
            answer.push(Number(str.join("")))
        }
    }   
    if(answer.length < 1){
        answer.push(-1)
    }
    return answer;
}