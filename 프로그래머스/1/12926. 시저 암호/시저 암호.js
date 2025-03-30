function solution(s, n) {
    var answer = []
    let arr =s.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === " "){
            answer.push(" ")
            continue;
        }
        let str = arr[i].charCodeAt()
        if(str + n > 122){
            answer.push(String.fromCharCode(str +n -26))
        }else if(str < 91 && str + n > 90){
            answer.push(String.fromCharCode(str +n -26))
        }
        else{
            answer.push(String.fromCharCode(str+n))                
        }
    }
    return answer.join("");
}