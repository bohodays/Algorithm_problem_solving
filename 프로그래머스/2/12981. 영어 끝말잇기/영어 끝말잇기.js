function solution(n, words) {
    const answer = [];
    const checkedWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!checkedWords.length) {
            checkedWords.push(word);
        } else {
            // 3번 규칙 확인
            const lastWord = checkedWords[checkedWords.length - 1];
            console.log(word[0], lastWord[lastWord.length - 1])
            if (word[0] !== lastWord[lastWord.length - 1]) {
                return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
            }
            // 4번 규칙 확인
            else if (checkedWords.includes(word)) {
                return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
            }
            // 5번 규칙 확인
            else if (word.length === 1) {
                return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
            }
            else {
                checkedWords.push(word);
            }
        }
    }
    return [0, 0];
}