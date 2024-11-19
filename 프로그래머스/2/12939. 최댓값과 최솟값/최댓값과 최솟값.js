function solution(s) {
    s = s.split(" ").map((item) => +item);
    return `${Math.min(...s)} ${Math.max(...s)}`;
}