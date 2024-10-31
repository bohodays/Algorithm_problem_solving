function solution(N, stages) {
    let result = Array(N).fill().map((item, index) => {
        const reachedUsers = stages.filter((stage) => stage >= index + 1);
        const notClearUsers = stages.filter((stage) => stage === index + 1);
        return [index + 1, notClearUsers.length / reachedUsers.length]
    })
    result = result.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    }).map((item) => item[0])

    return result;
}