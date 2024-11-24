function solution(s) {
    let count = 0;
    let removeZeroCount = 0;
    
    while (s !== "1") {
        count += 1;
        removeZeroCount += s.split("").filter((item) => item === "0").length;
        s = s.replace(/0/g, "").length.toString(2);
    }
    return [count, removeZeroCount];
}