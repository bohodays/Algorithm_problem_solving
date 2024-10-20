function solution(num, total) {
    const answer = [];
    let current = 1000;
    while (true) {
        const temp = Array(num).fill().map((item, index) => current - index);
        if (temp.reduce((sum, num) => sum + num) === total) return temp.sort((a, b) => a - b);
        current--;
    }
}