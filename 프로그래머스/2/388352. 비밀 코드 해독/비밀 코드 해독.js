function solution(n, q, ans) {
    let answer = 0;
    
    const numbers = Array(n).fill().map((_, i) => i + 1);
    let table = [];
    const visited = Array(n).fill(false);
    
    const dfs = (arr, count) => {
        if (arr.length === 5) {
            table.push([...arr]);
            return;
        }
        
        for (let i = 0; i < n; i++) {
            if (arr.length) {
                if (!visited[i] && numbers[i] > arr[arr.length - 1]) {
                    visited[i] = true;
                    arr.push(numbers[i]);
                    dfs(arr);
                    arr.pop();
                    visited[i] = false;
                }
            } else {
                if (!visited[i]) {
                    visited[i] = true;
                    arr.push(numbers[i]);
                    dfs(arr);
                    arr.pop();
                    visited[i] = false;
                }
            }

        }
    }
    
    dfs([], 0);
    const test = [];

    table.forEach((item) => {
        let total = 0;
        q.forEach((test, i) => {
            let result = 0;
            for (let j = 0; j < 5; j++) {
                if (test.includes(item[j])) {
                    result++;
                }
            }
            if (result === ans[i]) {
                total++;
            }
        })
        if (total === q.length) answer++;
    })
    
    return answer;
}