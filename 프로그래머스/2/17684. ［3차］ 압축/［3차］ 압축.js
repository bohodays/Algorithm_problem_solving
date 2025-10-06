function solution(msg) {
    const answer = [];
    let currentIndex = 27;
    const indexDictionary = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "10",
        K: "11",
        L: "12",
        M: "13",
        N: "14",
        O: "15",
        P: "16",
        Q: "17",
        R: "18",
        S: "19",
        T: "20",
        U: "21",
        V: "22",
        W: "23",
        X: "24",
        Y: "25",
        Z: "26"
    }
    
    msg = msg.split("").reverse();
    while (msg.length) {
        let currentItem = msg.pop();
        let result = indexDictionary[currentItem];
        
        while (msg.length) {
            currentItem += msg[msg.length - 1];
            
            if (indexDictionary[currentItem]) {
                result = indexDictionary[currentItem];
                msg.pop();
            } else {
                indexDictionary[currentItem] = currentIndex++;
                break;
            }
        }
        
        answer.push(Number(result));
        
    }
    
    return answer;
}