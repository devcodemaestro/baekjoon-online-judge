function solution(rny_string) {
    var answer = '';
    let arr = rny_string.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "m"){
            arr[i] = "rn"
        }
    }
    answer = arr.join("")
    return answer;
}