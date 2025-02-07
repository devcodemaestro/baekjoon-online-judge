function solution(picture, k) {
    var answer = [];
    for(let i = 0; i < picture.length; i++){
        let arr = picture[i].split("")
        
        for(let j = 0; j < arr.length; j++){
            let str = arr[j]
            let count = 0
            let result = ""
            
            while(count < k){
                result += str
                count++
            }
            arr[j] = result
        }
        
        let pushCount = 0
        while(pushCount < k){
            answer.push(arr.join(""))
            pushCount++
        }

    }
    return answer;
}