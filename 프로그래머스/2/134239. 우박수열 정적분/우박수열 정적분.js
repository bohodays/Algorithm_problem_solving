function solution(k, ranges) {
    const answer = [];
    
    const area = [];
    const nums = [k];
    while (k > 1) {
        if (k % 2 === 0) k /= 2;
        else k = k * 3 + 1;
        nums.push(k)
    }
    
    const getArea = (x1, y1, x2, y2) => {
        const triangle = (x2 - x1) * Math.abs(y2 - y1) / 2
        const square = (x2 - x1) * Math.min(y1, y2)
        return triangle + square;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        const [x1, y1, x2, y2] = [i, nums[i], i + 1, nums[i + 1]];
        area.push(getArea(x1, y1, x2, y2));
    }
    
    ranges.forEach((range) => {
        const n1 = range[0];
        const n2 = (nums.length - 1) - Math.abs(range[1]);
        
        if (n1 === n2) answer.push(0)
        else if (n1 > n2) answer.push(-1)
        else {
            let total = 0;
            for (let i = n1; i < n2; i++) {
                total += area[i];
            }
            answer.push(total);
        }
    })
    
    return answer;
}