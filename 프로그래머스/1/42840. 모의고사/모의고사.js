function solution(answers) {
    const answer = [];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const result1 = answers.map((item, index) => item === answer1[index % answer1.length] ? 1 : 0).reduce((sum, num) => sum + num);
    const result2 = answers.map((item, index) => item === answer2[index % answer2.length] ? 1 : 0).reduce((sum, num) => sum + num);
    const result3 = answers.map((item, index) => item === answer3[index % answer3.length] ? 1 : 0).reduce((sum, num) => sum + num);
    const maxValue = Math.max(result1, result2, result3);
    if (result1 === maxValue) answer.push(1);
    if (result2 === maxValue) answer.push(2);
    if (result3 === maxValue) answer.push(3);
    return answer;
}