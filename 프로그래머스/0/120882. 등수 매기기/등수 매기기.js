function solution(score) {
    const avgs = score.map((item) => (item[0] + item[1]) / 2);
    const refs = [...avgs].sort((a, b) => b - a);
    const answer = avgs.map((item) => refs.indexOf(item) + 1);
    return answer;
}