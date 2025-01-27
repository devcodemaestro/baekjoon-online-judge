function solution(num_list, n) {
    var answer = num_list.slice(n)
    let answer2 = num_list.slice(0, n)
    return [...answer, ...answer2]
}