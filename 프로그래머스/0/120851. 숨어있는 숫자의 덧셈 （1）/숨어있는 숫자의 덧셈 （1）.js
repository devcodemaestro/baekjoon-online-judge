function solution(my_string) {
    var answer = 0;
    my_string.split("").filter((e)=>!isNaN(e)).forEach((e)=> answer+= e*1)
    return answer;
}