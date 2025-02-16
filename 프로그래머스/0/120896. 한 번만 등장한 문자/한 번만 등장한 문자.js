function solution(s) {
    var answer = '';
    let result = []
    let arr = s.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i],i+1) === -1 || arr.indexOf(arr[i],i+1) === undefined){
            result.push(arr[i])
        }else{
            while(arr.indexOf(arr[i],i+1) !== -1){
                arr.splice(arr.indexOf(arr[i],i+1), 1)
            }
        }
    }
    answer = result.sort().join("")
    return answer
}