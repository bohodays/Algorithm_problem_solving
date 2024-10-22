function solution(arr)
{
    const answer = [];
    
    arr.forEach((item, i) => {
        if (i === 0) answer.push(item);
        else if (item !== answer[answer.length - 1]) answer.push(item);
    })

    return answer;
}