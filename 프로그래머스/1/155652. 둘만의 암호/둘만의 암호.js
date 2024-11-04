function solution(s, skip, index) {
    const ref = "abcdefghijklmnopqrstuvwxyz".split("").filter((item) => !skip.includes(item));
    
    let answer = '';
    for (const item of s) {
        const targetIndex = ref.indexOf(item) + index;
        answer += ref[targetIndex % ref.length];
    }
    return answer;
}