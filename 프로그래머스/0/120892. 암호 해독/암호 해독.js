function solution(cipher, code) {
    var answer = '';
    for(let i = 0; i <= cipher.length; i +=code){
        if(cipher[i-1] !== undefined){
            answer+= cipher[i-1]            
        }
    }
    return answer;
}