function solution(n) {
    const reversedN = String(n.toString(3)).split('').reverse().join('');
    const ans = parseInt(reversedN, 3)
    return ans;
}