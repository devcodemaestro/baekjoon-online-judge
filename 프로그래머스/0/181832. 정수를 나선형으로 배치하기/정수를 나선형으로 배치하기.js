function solution(n) {
    var answer = Array.from({length:n}, ()=> Array.from({length:n}, ()=> 0))
    
    // 오른쪽, 아래, 왼쪽, 위
    let dx = [0,1, 0, -1]
    let dy = [1,0, -1, 0]
    
    // 시작 위치와 방향
    let x = 0
    let y = 0
    let direction = 0
    
    // 반복하며 값 넣기
    for(let i = 1; i <= n*n ; i++){
        answer [x][y] = i
        
        // 다음 위치 계산
        let nx = x + dx[direction]
        let ny = y + dy[direction]
        
        // 배열 범위를 벗어나거나 이미 숫자가 있으면 방향 바꾸기
        if (ny >= n || nx >= n || ny < 0 || nx < 0 || answer[nx][ny] !== 0){
            direction = (direction + 1) % 4; // 방향 바꾸기 (시계 방향)
            nx = x + dx[direction]
            ny = y + dy[direction]
        }
        
        // 위치 이동
        x = nx
        y = ny
    }
    
    return answer;
}
