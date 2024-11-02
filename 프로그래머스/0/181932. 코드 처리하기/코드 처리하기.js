function solution(code) {
    let mode = "0"
    var answer = '';
    for(let idx = 0; idx <= code.length-1; idx++){
        if(mode === "0"){
            if(code[idx] === "1"){
                mode = "1"
                }else{
                  if(idx % 2 === 0){
                    answer += code[idx]
                }
            }
        }else if(mode === "1"){
            if(code[idx]=== "1"){
                mode = "0"
                }else{
                  if(idx % 2 === 1){
                    answer += code[idx]
                }
            }
        }
    }
    if(answer !== ""){
        return answer;   
    }else{
        return "EMPTY"
    }

}