function solution(my_string) {
    var answer = 0;
    let str = ""

    for(let i = 0; i < my_string.length; i++){
        let target = my_string[i]
        if(!isNaN(Number(target))){
            str+= target
        }else{
            answer+= Number(str)
            str=""
        }
    }
    if(str !== ""){
        answer+= Number(str)
    }
    return answer;
}