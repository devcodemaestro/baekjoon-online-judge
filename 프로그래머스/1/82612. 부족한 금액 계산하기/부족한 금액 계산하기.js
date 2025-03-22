function solution(price, money, count) {
    var answer
    let result = 0
    let sumPrice = price
    
    while(count !== 0){
        result += sumPrice
        sumPrice += price        
        count--
    }
    answer = result - money
    
    if(answer < 0){
        return 0
    }else{
        return answer
    }
}