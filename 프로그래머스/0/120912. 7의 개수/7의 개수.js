function solution(array) {
    var answer = 0;
    for(let i = 0; i < array.length; i++){
        let arr = array[i].toString().split("")
        answer+= arr.filter((e)=> e === "7").length
    }
    return answer;
}