function solution(cards1, cards2, goal) {
    for (const item of goal) {
        if (cards1[0] === item) {
            cards1.shift();
        } else if (cards2[0] === item) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    
    return "Yes"
}