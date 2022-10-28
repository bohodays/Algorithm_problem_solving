function solution(array) {
  let sortedArray = array.sort((a,b) => a-b);
  // 최빈값
  let mode = -1;
  // 현재 똑같은 숫자가 몇번 등장했는지
  let repeatCnt = 0;
  // 최빈값이 될때 몇번 반복해서 되는지
  let modeRepeatCnt = 0;
  let cnt = 0;
  // 지금 보고 있는 숫자의 이전 숫자
  let beforeNumber = -1;
  let isDupMod = false;
  while (cnt < array.length) {
    // 경계가 넘어간 경우
    if (beforeNumber !== array[cnt]) {
      repeatCnt = 1;
    // 같은 숫자가 반복되고 있는 경우
    } else {
      repeatCnt += 1;
    }

    if (repeatCnt === modeRepeatCnt) {
      if (mode !== array[cnt]) {
        isDupMod = true;
      }
    }

    if (repeatCnt > modeRepeatCnt) {
      mode = array[cnt];
      modeRepeatCnt = repeatCnt;
      isDupMod = false;
    }
    beforeNumber = array[cnt];
    cnt += 1;
  }
  if (isDupMod) return -1;
  return mode;
}