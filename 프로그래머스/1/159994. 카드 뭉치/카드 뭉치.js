function solution(cards1, cards2, goal) {
    cards1 = cards1.reverse();
    cards2 = cards2.reverse();
    goal = goal.reverse();
    
    while (goal.length) {
        if (cards1.length && cards1[cards1.length - 1] === goal[goal.length - 1]) {
            cards1.pop();
            goal.pop();
        } else if (cards2.length && cards2[cards2.length - 1] === goal[goal.length - 1]) {
            cards2.pop();
            goal.pop();
        } else {
            return "No";
        }
    }
    return "Yes";
}