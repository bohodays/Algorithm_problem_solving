function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    const answer = A.map((item, index) => item * B[index]).reduce((sum, num) => sum + num);
    return answer;
}