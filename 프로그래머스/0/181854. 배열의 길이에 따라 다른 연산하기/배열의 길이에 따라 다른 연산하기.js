function solution(arr, n) {
    if(arr.length % 2 === 1){
        for(let i = 0; i < arr.length; i+=2){
            arr[i] += n
        }
    }
    if(arr.length % 2 === 0){
        for(let i = 1; i < arr.length; i+=2){
            arr[i] += n
        }
    }
    return arr;
}