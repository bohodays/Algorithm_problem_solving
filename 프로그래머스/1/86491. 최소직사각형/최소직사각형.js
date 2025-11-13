function solution(sizes) {
    let width = 0, height = 0;
    
    sizes.forEach((size) => size.sort((a, b) => a - b));
    sizes.forEach(([currentWidth, currentHeight]) => {
        width = Math.max(currentWidth, width);
        height = Math.max(currentHeight, height);
    })
    
    return width * height;
}