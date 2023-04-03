function solution(s) {
    let ans = '';
    const sToArray = s.split(" ");
    for (const item of sToArray) {
        for (let i = 0; i < item.length; i++) {
            // 홀수이면
            if (i % 2) {
                ans += item[i].toLowerCase();
            // 짝수이면
            } else {
                ans += item[i].toUpperCase();
            }
        }
        ans += ' '
    }
    return ans.slice(0, s.length);
}