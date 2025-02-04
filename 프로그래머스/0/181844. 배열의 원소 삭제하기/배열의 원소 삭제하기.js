function solution(arr, delete_list) {
    for(let val of delete_list){
        let idx = arr.indexOf(val)
        if(idx !== -1){
            arr.splice(idx, 1)
        }
    }
    return arr;
}