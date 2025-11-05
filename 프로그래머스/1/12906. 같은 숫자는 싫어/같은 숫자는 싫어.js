function solution(arr)
{
    const answer = [];

    arr.forEach((item) => {
        if (answer.length === 0) answer.push(item);
        else {
            if (answer[answer.length - 1] !== item) answer.push(item);
        }
    })
    
    return answer;
}