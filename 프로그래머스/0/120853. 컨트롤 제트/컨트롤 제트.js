function solution(s) {
    var answer = 0;
    let arr = []
    s.split(" ").map((e)=>Number(e)).forEach((e)=>{
        isNaN(e) ? arr.pop() : arr.push(e)
    })

    arr.forEach((e)=> answer+=e)
  
    return answer;
}