function solution(str_list) {
    var answer = []
    if(str_list.length===1 && (str_list.indexOf("l") === -1 && str_list.indexOf("r") === -1) ){
        return []
    } else{
        let l = str_list.indexOf("l") === -1 ? 30 : str_list.indexOf("l")        
        let r = str_list.indexOf("r") === -1 ? 30 : str_list.indexOf("r")
        if(l < r){
            return str_list.slice(0, l)
        }else{
            return str_list.slice(r+1)
        }
    }
    return answer
}