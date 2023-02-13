function solution(X, Y) {
    let ans = '';
    const XArray = X.split("");
    const YArray = Y.split("");
    
    for (let i = 0; i < 10; i++) {
        const targetX = XArray.filter((item) => Number(item) === i).length;
        const targetY = YArray.filter((item) => Number(item) === i).length;
        ans += String(i).repeat(Math.min(targetX, targetY))
    }
    
    if (ans.length === 0) return "-1";
    else if (Number(ans) === 0) return "0";
    return ans.split('').sort((a, b) => b - a).join("")
}