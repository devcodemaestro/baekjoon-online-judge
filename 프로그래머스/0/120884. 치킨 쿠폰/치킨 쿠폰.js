function solution(chicken) {
    if(chicken < 10){
        return 0
    }
    var answer = 0;
    let serviceChicken
    let coupon = chicken

    while(coupon >= 10){
        serviceChicken = 0
        serviceChicken = Math.floor((coupon / 10))
        answer = answer + serviceChicken
        coupon = (coupon % 10) + serviceChicken
    }
    
    
    return answer;
}