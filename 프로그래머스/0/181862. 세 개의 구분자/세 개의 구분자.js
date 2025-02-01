function solution(myStr) {
    var answer = [];
    let arr = []
    let str= ""
    for(let i = 0; i < myStr.length; i++){
        if(myStr[i] !== "a" && myStr[i] !== "b" && myStr[i] !== "c"){
            str+=myStr[i]
        }else if(str !== undefined){
            arr.push(str)
            str=""
        }
        if(i === myStr.length-1 && str !== undefined){
            arr.push(str)
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== ""){
            answer.push(arr[j])
        }
    }
    return answer.length === 0 ? ["EMPTY"] : answer
}