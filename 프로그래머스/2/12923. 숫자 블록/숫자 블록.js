const getValue = (number) => {
    if (number === 1) return 0;

    let max = 1;

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            const pair = number / i;

            if (pair <= 1e7) {
                return pair; // 더 큰 값이 나왔으니 바로 리턴
            }

            if (i <= 1e7) {
                max = Math.max(max, i); // i도 후보
            }
        }
    }

    return max;
};

function solution(begin, end) {
    const answer = [];
    for (let i = begin; i <= end; i++) {
        answer.push(getValue(i));
    }
    
    return answer;
}