// stack을 이용해서 shift를 사용하면 시간 초과가 발생함.
function solution(sequence, k) {
    let answer = [];
    
    let sumValue = 0;
    let [start, end] = [0, 0];
    for (let i = 0; i < sequence.length; i++) {
        sumValue += sequence[i]
        
        while (sumValue > k) {
            sumValue -= sequence[start];
            start += 1;
        }
        
        if (sumValue === k) {
            end = i;
            answer.push([start, end]);
        }
    }
    
    answer = answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
    
    return answer[0];
}