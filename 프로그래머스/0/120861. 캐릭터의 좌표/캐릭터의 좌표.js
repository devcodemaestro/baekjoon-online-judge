function solution(keyinput, board) {  
    var answer = [];
    
    let dori = 0
    let kduc = 0
    let doriMax = Math.floor(board[0]/2)
    let kducMax = Math.floor(board[1]/2)
    
    for(let i = 0; i < keyinput.length; i++){
        let str = keyinput[i]
        if(str === "left" && dori > - doriMax){
            dori-=1
        }
        if(str === "right" && dori < doriMax){
            dori+=1
        }
        if(str === "up" && kduc < kducMax){
            kduc+=1
        }
        if(str === "down" && kduc > -kducMax){
            kduc-=1
        }
    }
    answer = [dori, kduc]
    return answer;
}