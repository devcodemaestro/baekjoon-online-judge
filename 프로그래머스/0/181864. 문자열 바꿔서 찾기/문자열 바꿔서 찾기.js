function solution(myString, pat) {
    var answer = 0;
    let arr = myString.split("")
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === "A"){
            arr[i] = "B"
        }else {
            arr[i] = "A"
        }
    }
    let str = arr.join("")
    for(let j = 0; j <str.length; j++){
        if(str.slice(j, j+pat.length) === pat){
            return 1
        }
    }
    return answer;
}