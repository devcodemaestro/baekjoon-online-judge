function solution(my_string) {
    let answer = my_string.split("").filter((e)=>
        e !== "a" && e !== "e" && e !== "i" && e !== "o" && e !== "u"
    ).join("")
    return answer
}