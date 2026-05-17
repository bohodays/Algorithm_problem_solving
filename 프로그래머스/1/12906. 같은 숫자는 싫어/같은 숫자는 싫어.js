function solution(arr)
{
    const answer = [];

    arr.forEach((num) => {
        if (!answer.length) answer.push(num);
        else {
            if (answer[answer.length - 1] !== num) answer.push(num);
        }
    })
    
    return answer;
}