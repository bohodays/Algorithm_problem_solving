function solution(s) {
    let transCount = 0;
    let removeCount = 0;
    
    while (s !== "1") {
        transCount++;
        const removeZeroS = s.split("").filter((i) => i !== "0");
        removeCount += s.length - removeZeroS.length;
        s = removeZeroS.length.toString(2);
    }
    
    return [transCount, removeCount];
}