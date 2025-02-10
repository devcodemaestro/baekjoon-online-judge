function solution(numbers, k) {
    var answer = 0;
    let count = 1
    let prev
    while(count !== k){
        prev = numbers.shift()
        numbers.push(prev)
        prev = numbers.shift()
        numbers.push(prev)
        count++     
    }
    
    return numbers[0];
}