function solution(id_pw, db) {
    var answer = "fail"
    for(let i = 0 ; i< db.length; i++){
        let [id, pw] = db[i]
        
        if(id_pw[0] === id){
            if(id_pw[1] === pw){
                return "login"
            }
            if(id_pw[1] !== pw){
                return "wrong pw"
            }
        }
    }
    return answer
}