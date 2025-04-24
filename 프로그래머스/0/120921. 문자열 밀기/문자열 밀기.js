function solution(A, B) {
    var answer = 0;
    if(A === B){
        return 0
    }
    let result1 = 0
    let result2 = 0
    let str1 = A.split("")
    let str2 = A.split("")

    for(let i = 0; i < str1.length; i++){
        let prev = str1[str1.length-1]
        str1.pop()
        str1.unshift(prev)
        result1++
        if(str1.join("") === B){
            return result1
        }
    }
    return -1
}