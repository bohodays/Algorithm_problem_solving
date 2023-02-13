function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);

  lost.map((item) => (clothes[item - 1] = 0));

  reserve.map((item) => clothes[item - 1]++);

  for (let i = 0; i < n; i++) {
    // 체육복이 0개인 학생이 앞사람한테 받아왔을 때
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    }
    // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때
    else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter((item) => item > 0).length;
}