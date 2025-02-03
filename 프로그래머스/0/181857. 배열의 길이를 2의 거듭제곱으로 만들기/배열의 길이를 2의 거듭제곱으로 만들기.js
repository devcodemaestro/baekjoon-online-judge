function solution(arr) {
    var answer = [];
    if(arr.length === 1 && arr.length === 2){
        return arr
    }
    let i = 1;
    let num = arr.length;    
    while(num !== i){
        i *=2
        num = arr.length;
        if(num === i){
            return arr
        }else if (num < i){
            arr.push(0)
            i /= 2
        }
    }    
    return arr;
}