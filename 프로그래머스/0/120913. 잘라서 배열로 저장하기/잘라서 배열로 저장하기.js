function solution(my_str, n) {
    var answer = [];
    let arr = my_str.split("")
    for(let i = 0; i < arr.length; i+=n){
        answer.push(arr.slice(i,i+n).join(""))
    }
    return answer;
}