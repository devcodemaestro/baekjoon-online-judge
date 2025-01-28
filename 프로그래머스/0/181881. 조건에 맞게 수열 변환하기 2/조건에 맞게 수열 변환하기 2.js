function solution(arr) {
    var answer = []
    let count = 0
    let equals = (a,b)=> JSON.stringify(a) === JSON.stringify(b)
    while(!equals(answer, arr)){
        answer = arr.slice()
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 50 && arr[i] % 2 === 0){
                arr[i]/=2
            }else if(arr[i] < 50 && arr[i] % 2 === 1){
                arr[i] = (arr[i] *2) +1
            }
        }
        if(!equals(answer, arr)){
            count++
        }
    }
    return count;
}