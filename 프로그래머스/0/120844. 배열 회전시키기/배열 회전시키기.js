function solution(numbers, direction) {
    var answer = [];
    if (direction === "right") {
        const lastNum = numbers.pop();
        return [lastNum, ...numbers]
    } 
    const firstNum = numbers.splice(0, 1)[0];
    return [...numbers, firstNum]
}