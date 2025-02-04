function solution(rank, attendance) {
    var answer = 0;
    
    let rank2 = []
    for(att in attendance){
        if(attendance[att] === true){
            rank2.push(rank[att])
        }
    }
    let arr = rank2.sort((a,b)=> a-b).slice(0, 3)
    let one = rank.indexOf(arr[0]) * 10000
    let two = rank.indexOf(arr[1]) * 100
    let three = rank.indexOf(arr[2])
    answer += one + two + three
    
    return answer;
}