function solution(dots) {
    dots = dots.sort((a,b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    })
    const height = Math.abs(dots[1][1] - dots[0][1]);
    const width = Math.abs(dots[3][0] - dots[0][0]);
    return height * width;
}

