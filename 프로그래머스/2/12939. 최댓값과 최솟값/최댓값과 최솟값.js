function solution(s) {
    const nums = s.split(" ").map((n) => Number(n));
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return `${min} ${max}`;
}