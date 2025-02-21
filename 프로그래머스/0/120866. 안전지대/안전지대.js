function solution(board) {
    var answer = 0;
    let n = board.length;
    
    let arr = Array.from({length:board.length}, ()=> Array.from({length: board.length}, ()=> 0 ))

    let directions = [
        [-1,-1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0],  [1, 1] 
    ]
    for(let i = 0; i < n; i++){
        for(let j = 0; j <n; j++){
            if(board[i][j] === 1){
                arr[i][j] = 1
            
                for (let [dx, dy] of directions) {
                    let nx = i + dx;
                    let ny = j + dy;
                    
                    if(nx >= 0 && nx < n && ny >= 0 && ny < n){
                        arr[nx][ny] = 1
                    }
                }
            }
        }
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j <n; j++){
            if(arr[i][j] === 0){
                answer++
            }
        }
    }
    return answer;
}