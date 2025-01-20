function solution(my_string, queries) {
    var answer = '';
    let arr = []
    let str = my_string
    for(let i = 0; i < queries.length; i ++){
        let [s, e] = queries[i]
        arr = str.split("")
        let reverse = arr.slice(s,e+1).reverse()
        arr.splice(s,(e - s + 1), ...reverse)
        str = arr.join("")
    }        
    return str;
}