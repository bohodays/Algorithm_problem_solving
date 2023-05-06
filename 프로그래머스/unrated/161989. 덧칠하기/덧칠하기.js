function solution(n, m, section) {
    let answer = 0;
    
    let currentItem = 0;
    
    section.forEach((item) => {
        if (item > currentItem) {
            currentItem = item + m - 1;
            answer++;
        }
    })
    return answer;
}