function solution(array) {
    const numArray = Array(Math.max(...array) + 1).fill(0);
    array.forEach((item) => {
        numArray[item] += 1;
    })
    const answer = numArray.filter((item) => item === Math.max(...numArray));
    const oneValueAnswer = numArray.indexOf(Math.max(...numArray));
    return answer.length === 1 ? oneValueAnswer : -1;
}