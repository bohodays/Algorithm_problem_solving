function solution(k, score) {
    const currArray = [];
    const answer = score.map((item, index) => {
        currArray.push(item);
        if (currArray.length <= k) return Math.min(...currArray);
        return currArray.sort((a, b) => b - a)[k - 1];
    });
    return answer;
}