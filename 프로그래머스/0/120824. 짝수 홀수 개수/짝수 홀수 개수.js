function solution(num_list) {
    let even = 0
    let odd = 0
    for(let el of num_list){
        el % 2 ? odd++ : even++
    }
    return [even, odd];
}