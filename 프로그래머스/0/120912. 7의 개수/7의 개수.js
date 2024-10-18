function solution(array) {
    let answer = 0;
    array.forEach((num) => {
        String(num).split("").forEach((item) => {
            if (item === "7") answer++;
        })
    })
    return answer;
}