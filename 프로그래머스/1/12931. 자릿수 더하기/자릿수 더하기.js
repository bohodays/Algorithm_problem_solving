function solution(n)
{
    const answer = String(n).split("").map((item) => Number(item)).reduce((sum, num) => sum + num);
    return answer;
}