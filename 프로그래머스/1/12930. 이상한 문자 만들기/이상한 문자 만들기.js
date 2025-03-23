function solution(s) {
    var answer
    let arr = s.split(" ")
    
    for(let i = 0; i < arr.length; i++){
        let target = arr[i]
        let str = ""
        
        for(let j = 0; j < target.length; j++){
            if(j % 2 === 0){
                str += target[j].toUpperCase()
            }else {
                str+= target[j].toLowerCase()
            }
        }
        arr[i] = str
    }
    answer = arr.join(" ")
    return answer;
}