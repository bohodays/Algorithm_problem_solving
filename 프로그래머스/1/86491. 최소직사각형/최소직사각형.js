function solution(sizes) {
    let width = 0, height = 0;
    
    sizes.forEach((size) => size.sort((a, b) => a - b));
    sizes.forEach(([crrWidth, crrHeight]) => {
        width = Math.max(width, crrWidth);
        height = Math.max(height, crrHeight);
    })
    
    return width * height;
}