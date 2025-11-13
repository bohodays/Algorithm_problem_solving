const isPrime = (n) => {
    if (n <= 1) return false;
    
    for (let i = 2; i <= parseInt(n**(1/2)); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    let answer = 0;
    
    const visited = Array(numbers.length).fill(false);
    const numberSet = new Set();
    
    const dfs = (number, count) => {
        
        if (number.length) numberSet.add(Number(number));
        
        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(number + numbers[i], count++);
                visited[i] = false;
            }
        }
    }
    
    dfs("", 0);
    
    [...numberSet].forEach((number) => {
        if (isPrime(number)) answer++;
    })
    
    return answer;
}