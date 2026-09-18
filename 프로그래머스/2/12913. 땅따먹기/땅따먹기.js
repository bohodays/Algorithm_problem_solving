function solution(land) {
    var answer = 0;

    for (let i = 1; i < land.length; i++) {
        const prev = land[i - 1];
        for (let j = 0; j < land[0].length; j++) {
            const targetArr = prev.slice(0, j).concat(prev.slice(j + 1));
            land[i][j] += Math.max(...targetArr);
        }
    }
    
    return Math.max(...land[land.length - 1]);
}