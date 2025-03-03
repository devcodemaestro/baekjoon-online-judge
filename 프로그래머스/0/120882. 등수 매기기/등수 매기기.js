function solution(score) {
    var answer = [];
    let arr = []
    let avgArr = []
    for(let i = 0; i < score.length; i++){
        let [eng, mat] = score[i]
        
        arr.push(avg = (eng + mat) / 2)
        avgArr = [...arr].sort((a,b)=>b-a)
    }
    for(let j = 0; j < arr.length; j++){
        answer.push(avgArr.indexOf(arr[j])+1)
    }
    return answer;
}