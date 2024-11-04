function solution(arr, queries) {
    var answer = [];
    let num
    let fixNum = 1000000
    let newArr
    queries.forEach(([s,e,k])=> {
        newArr = arr.slice(s,e+1).sort((a,b)=>(a-b))

        for(let i = 0; i <=newArr.length; i++){
            if(newArr[i] >k){
                answer.push(newArr[i])
                i = newArr.length+1
            }else if(i === newArr.length-1){
                answer.push(-1)
            }
        }
    })
    return answer;
}


