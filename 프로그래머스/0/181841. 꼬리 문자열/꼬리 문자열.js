function solution(str_list, ex) {
    var answer = '';
    for(let el of str_list){
        if(el.indexOf(ex) === -1){
            answer+= el
        }
    }
    return answer;
}