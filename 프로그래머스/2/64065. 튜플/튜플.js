function solution(s) {
    const answer = [];
    
    s = s.slice(0, s.length - 1);
    
    const result = [];
    let stack = [];
    let num = "";
    for (const item of s) {
        if (isNaN(item)) {
            if (item === "}") {
                stack.push(Number(num));
                result.push([...stack]);
                stack = [];
                num = "";
            } else if (num && item === ",") {
                stack.push(Number(num));
                num = "";
            }
        } else {
            num += item;
        }
    }
        
    result.sort((a, b) => a.length - b.length);
    result.forEach((row) => {
        row.forEach((num) => {
            if (!answer.includes(num)) {
                answer.push(num);
            }
        })
    })
    
    return answer;
}