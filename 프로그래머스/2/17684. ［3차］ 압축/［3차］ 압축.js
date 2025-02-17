function solution(msg) {
    const answer = [];
    let index = 27;
    const dictionary = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };
    
    while (msg) {
        
        let newWord = "";
        let w = "";
        for (let i = 0; i < msg.length; i++) {
            const targetWord = msg.slice(0, i + 1);
            
            if (dictionary[targetWord]) {
                w = targetWord;
            } else {
                newWord = targetWord;
                break;
            }
        }
        
        answer.push(dictionary[w]);
        dictionary[newWord] = index++;
        msg = msg.replace(w, "")
    }

    
    return answer;
}