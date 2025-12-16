function solution(sequence, k) {
    const answer = [];
    
    let start = 0;
    let total = 0;
    for (let i = 0; i < sequence.length; i++) {
        total += sequence[i];
        
        while (total > k) {
            total -= sequence[start];
            start++;
        }
        
        if (total === k) {
            answer.push([start, i]);
        }
    }
    
    answer.sort((a, b) => {
        if (b[1] - b[0] === a[1] - a[0]) {
            return a[0] - b[0];
        } else {
            return (a[1] - a[0]) - (b[1] - b[0]);
        }
    })
    
    return answer[0];
}