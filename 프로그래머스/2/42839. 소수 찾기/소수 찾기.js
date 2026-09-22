const isPrime = (num) => {
    if (num <= 1) return false;
    
    for (let i = 2; i <= parseInt(num**(1/2)); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    const visited = Array(numbers.length).fill(false);
    const nums = new Set();
    
    const dfs = (num) => {
        if (num) nums.add(Number(num));
        
        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(num + numbers[i]);
                visited[i] = false;
            }
        }
    };
    
    dfs("");
    
    const answer = [...nums].filter((num) => isPrime(num)).length;
    
    return answer;
}