function solution(emergency) {
    var answer = Array(emergency.length).fill(0);
    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    emergency.forEach((item, i) => {
        const index = sortedEmergency.indexOf(item);
        answer[i] = index + 1;
    })
    return answer;
}