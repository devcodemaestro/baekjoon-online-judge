function solution(strArr) {
    let arr = Array(31).fill(0)
    
    for(e of strArr){
        arr[e.length]++
    }
    return Math.max(...arr);
}
    
//  let obj = {}
//     for(let i = 0; i <strArr.length; i++){
//         if(obj[strArr[i].length] === undefined){
//             obj[strArr[i].length] = 1
//         }else{
//             obj[strArr[i].length]++
//         }
//     }
//     let arr = Object.values(obj)
//     for(let j = 0; j <= arr.length; j++){
//         if(answer <= arr[j]){
//             answer = arr[j]            
//         }
//     }
//     return answer;
// }