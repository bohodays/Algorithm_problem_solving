function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.map((_, i) => A[i] * B[i]).reduce((sum, num) => sum + num, 0);
}