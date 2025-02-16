function solution(numbers) {
    var answer = 0;
    let arr = []
    let str = ""
    let number = ["zero","one","two","three","four","five","six","seven","eight","nine"] 
    let idx = 0
    while(idx !==  numbers.length){
        str += numbers[idx]
        if(number.includes(str)){
            arr.push(number.indexOf(str))
            str=""
            idx++
        }else{
            idx++
        }
    }
    answer = Number(arr.join(""))
    return answer;
}