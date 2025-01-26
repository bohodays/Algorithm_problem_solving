const isPrime = (number) => {
    if (number === 0 || number === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    
    const result = new Set();
    const visited = Array(numbers.length - 1).fill(false);
    const dfs = (number) => {
        
        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                
                const nextNumber = number + numbers[i];
                if (isPrime(Number(nextNumber))) {
                    result.add(Number(nextNumber));
                }
                dfs(nextNumber);
                
                visited[i] = false;
            }
            
        }
    }
    
    dfs("");
    return result.size;
}