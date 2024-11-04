function solution(num_list) {
    let endNum = num_list[num_list.length-1]
    let prevNum = num_list[num_list.length-2]
    if(endNum > prevNum){
        num_list.push(endNum - prevNum)
    }else{
        num_list.push(endNum*2)
    }
    var answer = num_list;
    return answer;
}