function solution(num_list) {
    var answer = 0;
    let num = 0;
    let mul = 1;
    
    for(let i = 0; i < num_list.length; i++){
        num += num_list[i]
        mul *= num_list[i]
    }
    num**2 > mul ? answer = 1 : answer = 0
    return answer;
}