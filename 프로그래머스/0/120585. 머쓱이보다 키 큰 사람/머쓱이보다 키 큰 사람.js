function solution(array, height) {
    let answer = 0;
    const sortedArray = array.sort((a, b) => b - a);
    for (item of sortedArray) {
        if (item > height) answer += 1
    }
    return answer;
}