function solution(s) {
    let idx = s.length
    if(idx % 2 === 1){
        idx = Math.floor((idx / 2))
        return s[idx]
    }else{
        let str = ""
        idx = idx / 2
        str += s[idx-1]
        str += s[idx]
        return str
    }
}