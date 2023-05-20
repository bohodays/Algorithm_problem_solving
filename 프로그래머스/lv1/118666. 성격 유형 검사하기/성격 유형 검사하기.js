const addType = (s1, s2, personalityType) => {
  if (personalityType[s1] > personalityType[s2]) {
    return s1;
  } else if (personalityType[s1] < personalityType[s2]) {
    return s2;
  } else {
    return [s1, s2].sort()[0];
  }
};

function solution(survey, choices) {
  const personalityType = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const point = [0, 3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < survey.length; i++) {
    // 오른쪽 유형에 점수 주기
    if (choices[i] > 4) {
      personalityType[survey[i][1]] += point[choices[i]];
      // 왼쪽 유형에 점수 주기
    } else if (choices[i] < 4) {
      personalityType[survey[i][0]] += point[choices[i]];
    }
  }

  let ans = "";

  ans += addType("R", "T", personalityType);
  ans += addType("C", "F", personalityType);
  ans += addType("J", "M", personalityType);
  ans += addType("A", "N", personalityType);

  return ans;
}