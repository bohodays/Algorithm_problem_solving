function solution(s) {
    const sToArray = s.split(" ").map(Number);
    const maxValue = Math.max(...sToArray);
    const minValue = Math.min(...sToArray);
    
    return `${minValue} ${maxValue}`;
}