function solution(my_string, is_prefix) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        let str = my_string.split("").slice(0,i).join("")
        if(str === is_prefix){
            return 1
        }
    }
    return answer;
}