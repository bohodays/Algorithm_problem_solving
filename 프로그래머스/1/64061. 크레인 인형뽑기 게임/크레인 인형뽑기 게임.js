function solution(board, moves) {
    let answer = 0;
    const stack = [];
    const n = board.length;
    moves.forEach((item) => {
        
        for (let i = 0; i < n; i++) {
            const targetItem = board[i][item - 1];
            if (targetItem) {
                if (stack.length) {
                    if (stack[stack.length - 1] === targetItem) {
                        answer += 2;
                        stack.pop();
                    } else {
                        stack.push(targetItem);
                    }
                } else {
                    stack.push(targetItem);
                }
                board[i][item - 1] = 0;
                break;
            }
        }
        
    })
    
    return answer;
}