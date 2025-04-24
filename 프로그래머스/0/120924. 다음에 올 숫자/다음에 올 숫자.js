function solution(common) {
    var answer = 0;
    let prev = common[1] - common[0]
    let next = common[common.length-1] - common[common.length-2]
    if(prev === next){
        return common[common.length-1] + prev
    }else{
        return (common[1] / common[0]) * common[common.length-1]
    }
}