function solution(cards) {
    const answer = [];
    
    const visited = Array(Math.max(...cards) + 1).fill(false);
    cards.forEach((card, index) => {
        let result = 0;
        let target = card;
        while (!visited[target]) {
            result++;
            visited[target] = true;
            target = cards[target - 1];
        }
        answer.push(result);
    })
    
    answer.sort((a, b) => b - a);
    
    return answer[0] * answer[1];
}