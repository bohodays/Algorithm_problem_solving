function solution(babbling) {
    let answer = 0;
    const checkWords = ["aya", "ye", "woo", "ma"];
    babbling.forEach((item) => {
        checkWords.forEach((word) => {
            item = item.replace(word, " ")
        })
        if (!item.trim().length) {
            answer += 1;
        }
    })
    return answer;
}