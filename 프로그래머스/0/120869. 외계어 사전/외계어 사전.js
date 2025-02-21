function solution(spell, dic) {
    var answer = 2;

    let target = spell.sort().join("")
    
    for(let el of dic){
        let element = el.split("").sort().join("")
        if(element === target){
            return 1
        }
    }
    return answer
}