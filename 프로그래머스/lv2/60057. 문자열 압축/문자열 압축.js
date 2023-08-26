function solution(s) {
    s = s.split("");

    let count = 0;
    let ans = s.length;

    while (true) {
        let tmp = "";
        let stack = [];
        if (count === s.length) break;

        for (let i = 0; i < s.length; i += (1 + count)) {
            const item = s.slice(i, i + count + 1).join("");
            if (!stack.length) stack.push(item);
            else {
                if (stack[stack.length - 1] === item) stack.push(item);
                else {
                    if (stack.length === 1) {
                        tmp += stack[stack.length - 1] + "";
                        stack = [item]; 
                    } else {
                        tmp += stack.length + stack[stack.length - 1] + "";
                        stack = [item];  
                    }
                }
            }
        }
        
        if (stack.length === 1) {
            tmp += stack[stack.length - 1] + "";
        } else {
            tmp += stack.length + stack[stack.length - 1] + "";
        }
        
        ans = Math.min(ans, tmp.length);
        count++;
    }
    return ans;
}