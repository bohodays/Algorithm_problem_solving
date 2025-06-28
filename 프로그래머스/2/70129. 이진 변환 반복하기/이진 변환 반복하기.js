function solution(s) {
    let computeCount = 0;
    let zeroRemoveCount = 0;
    
    while (s !== "1") {
        computeCount++;
        const zeroRemoveS = s.split("").filter((item) => item !== "0");
        zeroRemoveCount += s.length - zeroRemoveS.length;
        s = zeroRemoveS.length.toString(2);
    }
    
    return [computeCount, zeroRemoveCount];
}