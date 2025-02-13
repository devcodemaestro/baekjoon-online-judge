function solution(my_string) {
    let answer = my_string.split("").filter((e)=>
        e !== "a"
    ).filter((e)=>
        e !== "e"
    ).filter((e)=>
        e !== "i"
    ).filter((e)=>
        e !== "o"
    ).filter((e)=>
        e !== "u"
    ).join("")
    return answer
}