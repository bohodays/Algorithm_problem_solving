function solution(num) {
    if (num === 1) {
        return 0;
    } else {
        let count = 0;
        while (true) {
            // 짝수라면
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = num * 3 + 1;
            }
            count++;
            
            if (num === 1) {
                return count;
            } else if (count === 500) {
                return -1;
            }
            
        }
    }
}