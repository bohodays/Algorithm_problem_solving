function solution(brown, yellow) {
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        const width = yellow / i;
        const height = i;
        
        if (brown === width * 2 + height * 2 + 4) {
            return [width + 2, height + 2];
        }
    }
}