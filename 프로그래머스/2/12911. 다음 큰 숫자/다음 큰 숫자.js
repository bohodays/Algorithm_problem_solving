function solution(n) {
    const originOneCount = n.toString(2).split("").filter((item) => item === "1").length;
    let checkValue = n + 1;
    while (true) {
        const binaryNumber = checkValue.toString(2);
        const oneCount = binaryNumber.split("").filter((item) => item === "1").length;
        if (originOneCount === oneCount) {
            break;
        }
        
        checkValue++;
    }
    return checkValue;
}