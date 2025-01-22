function solution(my_string, is_suffix) {
    var answer = 0;
    let arr = my_string.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr.slice(i).join("") === is_suffix){
            return 1
        }
    }
    return answer;
}