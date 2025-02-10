function solution(numbers, direction) {
    let prev
    if(direction === "right"){
        prev = numbers.pop()
        numbers.unshift(prev)
        return numbers
    }
    if(direction === "left"){
        prev = numbers.shift()
        numbers.push(prev)
        return numbers
    }
}