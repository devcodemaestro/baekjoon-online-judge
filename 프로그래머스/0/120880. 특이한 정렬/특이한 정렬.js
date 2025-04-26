function solution(numlist, n) {
    var answer = [];
    numlist.sort((a,b)=> a-b)
    let obj = {}
    for(let i = 0 ; i < numlist.length; i++){
        let num = Math.abs(numlist[i] - n)
        if(obj[num] !== undefined){
            obj[num].push(numlist[i])
        }else{
            obj[num] =[numlist[i]]
            }
    }
    for(let key in obj){
        answer = [...answer,...obj[key].sort((a,b)=>(b-a))]
    }
    
    return answer;
}