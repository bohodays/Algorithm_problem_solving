// 1차 비밀지도

function solution(n, arr1, arr2) {
  const answer = Array(n).fill("");

  // 이진수 변환
  const binArray1 = [];
  const binArray2 = [];
  for (let i = 0; i < n; i++) {
    binArray1.push(arr1[i].toString(2).padStart(n, "0"));
    binArray2.push(arr2[i].toString(2).padStart(n, "0"));
  }

  // 규칙에 맞게 해독하기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binArray1[i][j] === "1" || binArray2[i][j] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }

  return answer;
}