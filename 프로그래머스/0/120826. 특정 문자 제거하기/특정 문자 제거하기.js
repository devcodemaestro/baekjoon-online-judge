function solution(my_string, letter) {
    var answer = '';
    let arr =  my_string.split("")
    while(arr.indexOf(letter) !== -1){   
    let idx = arr.indexOf(letter)
    arr.splice(idx, 1)
        }
    return arr.join("")
}