function solution(arr1, arr2) {
    var answer = 0;

    if(arr1.length < arr2.length){
        return -1
    }
    if (arr1.length > arr2.length){
        return 1
    }
    if (arr1.length === arr2.length){
        
        for(let i = 0 ; i < arr1.length; i++){
            answer = answer+ (arr1[i] - arr2[i])
        }
        
        if(answer === 0){
            return 0
        }
        else if(answer < 1){
            return -1
        }else{
            return 1
        }
    }
    return answer;
}