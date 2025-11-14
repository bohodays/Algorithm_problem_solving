function solution(brown, yellow) {
    const answer = [];
    const total = brown + yellow;
    let width = 0, height = 0;
    // brown + yellow의 약수구하기
    for (let i = 1; i <= parseInt((total)**(1/2)); i++) {
        if (total % i === 0) {
            const j = total / i;
            if (i + j === (brown + 4) / 2) {
                width = j;
                height = i;
            }
        }
    }
    
    return [width, height];
}