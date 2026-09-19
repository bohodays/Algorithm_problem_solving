function solution(n) {
    const D = 1000000007;
    const table = [0, 1, 2];
    
    if (n < 3) return table[n];
    
    for (let i = 3; i <= n; i++) {
        table.push((table[i - 1] % D) + (table[i - 2] % D))
    }

    return table[n] % D;
}
