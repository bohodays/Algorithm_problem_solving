function solution(n) {
  // 자연수 n을 이진수로 변환했을 때 1의 개수
  const nOneCount = n
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;

  // target 변수를 n 보다 1 큰 수로 초기화
  let target = n + 1;
  // 정답을 찾을 때까지 순회
  while (true) {
    // target 값을 이진수로 변환
    const targetToBinary = target.toString(2).split("");
    // target을 이진수로 변환했을 때 1의 개수
    const targetOneCount = targetToBinary.filter((item) => item === "1").length;

    // n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같으면 정답 반환
    if (nOneCount === targetOneCount) {
      return target;
    }
    target++;
  }
}