function solution(wallpaper) {
    const xPositions = [];
    const yPositions = [];
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                xPositions.push(i);
                yPositions.push(j);
            }
        }
    }
    return [Math.min(...xPositions), Math.min(...yPositions), Math.max(...xPositions) + 1, Math.max(...yPositions) + 1];
}