function solution(a, b) {
    var answer = 0;
    let 최대공약수 = 1;
    
    for(let i =2; i <= a ; i++){
        if(a % i === 0 && b % i === 0){
            최대공약수 = i
        }
    }
    a /= 최대공약수
    b /= 최대공약수

    while(b % 2 === 0){
            b /= 2
        }
    while(b % 5 === 0){
            b /= 5
        }
    answer = b === 1 ? 1 : 2
    return answer;
}