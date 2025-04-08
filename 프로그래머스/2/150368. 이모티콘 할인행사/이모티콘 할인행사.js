function solution(users, emoticons) {
    const answer = [];
    
    const ref = [40, 30, 20, 10];
    const discounts = [];
    
    const dfs = (arr) => {
        if (arr.length === emoticons.length) {
            discounts.push([...arr]);
            return;
        }
        
        for (let i = 0; i < ref.length; i++) {
            arr.push(ref[i]);
            dfs(arr);
            arr.pop();
        }
    }
    
    dfs([]);
    
    discounts.forEach((row, i) => {
        let emoticonsPlus = 0;
        let emoticonsPrice = 0;
        
        users.forEach((user, j) => {
            const [userDiscount, userPrice] = user;
            let total = 0;
            row.forEach((discount, k) => {
                if (userDiscount <= discount) {
                    total += emoticons[k] * (100- discount) * 0.01;
                }
            })
            
            if (total >= userPrice) {
                emoticonsPlus++;
            } else {
                emoticonsPrice += total;
            }
        })
        answer.push([emoticonsPlus, emoticonsPrice]);
    })
    
    answer.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return b[0] - a[0]
    })
    
    return answer[0];
}