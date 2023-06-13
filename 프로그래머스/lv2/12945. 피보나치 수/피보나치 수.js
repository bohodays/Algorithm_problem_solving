function solution(n) {
    let answer;
    let [f0, f1] = [0 , 1];
    let i = 2;
    
    while (i !== n) {
        [f0, f1] = [f1 % 1234567 , (f0 + f1) % 1234567];
        i++
    }
    answer = f0 + f1;
    return answer % 1234567;
}