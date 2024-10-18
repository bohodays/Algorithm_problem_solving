function solution(i, j, k) {
    let answer = 0;
    k = String(k);
    for (let s = i; s <= j; s++) {
        answer += String(s).split("").filter((item) => item === k).length
    }
    return answer;
}