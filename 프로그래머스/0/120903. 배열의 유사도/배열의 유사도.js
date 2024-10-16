function solution(s1, s2) {
    let answer = 0;
    s1.forEach((item) => {
        console.log(item, item in s2)
        if (s2.includes(item)) {
            answer++;
        }
    })
    return answer;
}