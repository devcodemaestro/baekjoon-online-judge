function solution(arr) {
    let arrLength = arr.length
    let arrElLength = arr[0].length
    
    if(arrLength === arrElLength){
        return arr
    }
    // [[57, 192, 534, 2], [9, 345, 192, 999]]
    if(arrLength < arrElLength){
        for(let i = 0; i < arrElLength; i++){
            for(let j = arrLength; j < arrElLength; j++){
                let newArr = Array.from({length: arrElLength}, () => 0)
                arr[j]=newArr
            }
        }
    }
    if(arrLength > arrElLength){
        for(let i = 0; i < arrLength; i++){
            for(let j = arrElLength; j < arrLength; j++){
                arr[i][j] = 0                
            }
        }
    }
    var answer = [[]];
    return arr;
}