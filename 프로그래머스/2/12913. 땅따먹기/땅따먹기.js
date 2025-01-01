function solution(land) {
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            const copyArray = [...land[i - 1]];
            copyArray[j] = 0;
            land[i][j] += Math.max(...copyArray);
        }
    }
    
    return Math.max(...land[land.length - 1]);
}