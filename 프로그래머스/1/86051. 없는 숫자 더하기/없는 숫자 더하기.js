function solution(numbers) {
    let answer = 0;
    const refArray = Array(10).fill(0).map((item, index) => index);
    refArray.forEach((item) => {
        if (!numbers.includes(item)) answer += item;
    })
    return answer;
}