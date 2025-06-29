function solution(n) {
    let target = n;
    while (true) {
        // 조건 1;
        target++;
        
        // 조건 2
        const nOneCount = n.toString(2).split("").filter((i) => i === "1").length;
        const targetOneCount = target.toString(2).split("").filter((i) => i === "1").length;
        
        if (nOneCount === targetOneCount) return target;
    }
}