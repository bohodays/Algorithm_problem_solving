function solution(cipher, code) {
    let answer = '';
    cipher = cipher.split("");
    cipher.forEach((item, index) => {
        console.log(index)
        if ((index + 1) % code === 0) {
            answer += item;
        }
    })
    return answer;
}