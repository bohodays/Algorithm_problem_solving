function solution(s, n) {
    let answer = '';
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = lowerAlphabet.toUpperCase();
    for (const item of s) {
        if (lowerAlphabet.includes(item)) {
            answer += lowerAlphabet[(lowerAlphabet.indexOf(item) + n) % 26];
        } else if (upperAlphabet.includes(item)) {
            answer += upperAlphabet[(upperAlphabet.indexOf(item) + n) % 26];
        } else {
            answer += " ";
        }
    }
    return answer;
}