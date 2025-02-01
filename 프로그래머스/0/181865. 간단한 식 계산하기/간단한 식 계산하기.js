function solution(binomial) {
    let [a, op, b] = binomial.split(" ")
    
    if(op === "+"){
        return Number(a) + Number(b)
    }
    if(op === "-"){
        return Number(a) - Number(b)
    }
    if(op === "*"){
        return Number(a) * Number(b)
    }
}