function solution(s) {
    const result = s.split(" ").map((num) => +num).sort((a, b) => a - b);
    return `${result[0]} ${result[result.length - 1]}`;
}