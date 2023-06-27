function solution(s) {
    const answer = [];
    
    let countTrans = 0;
    let countZero = 0;
    
    while (s.length !== 1) {
        countTrans++;
        countZero += s.split("").filter((item) => item === '0').length;
        s = s.replace(/0/g, "")
        s= s.length.toString(2);
    }
    
    answer.push(countTrans);
    answer.push(countZero);
    
    return answer;
}