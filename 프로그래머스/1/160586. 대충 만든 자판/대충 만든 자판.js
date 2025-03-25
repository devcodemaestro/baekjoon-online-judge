function solution(keymap, targets) {
    var answer = [];
    for(let i = 0; i < targets.length; i++){

        let target = targets[i].split("")
        let sum = 0
        let isPossible = true
        
        for(let j = 0; j < target.length; j++){
            let char = target[j]
            let num = Infinity
            
            for(let k = 0 ; k < keymap.length; k++){
                let idx = keymap[k].indexOf(char)
                if(idx !== -1){
                    num = Math.min(num, idx+1)
                }
            }
            if(num === Infinity){
                isPossible = false
                break;
            }else{
                sum += num                            
            }
        }
        answer.push(isPossible ? sum : -1);
    }
    return answer
    }
        