function solution(keyinput, board) {
    const answer = [0, 0];
    const xLimit = parseInt(board[0] / 2);
    const yLimit = parseInt(board[1] / 2);
    
    keyinput.forEach((item) => {
        if (item === "left") answer[0] = Math.max(answer[0] - 1, -xLimit);
        if (item === "right") answer[0] = Math.min(answer[0] + 1, xLimit);
        if (item === "up") answer[1] = Math.min(answer[1] + 1, yLimit);
        if (item === "down") answer[1] = Math.max(answer[1] - 1, -yLimit);
        console.log(answer)
    })

    return answer;
}