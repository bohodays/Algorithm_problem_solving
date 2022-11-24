function solution(s) {
  // 스트링을 공백기준으로 배열로 만들기
  const stringsToArray = s.split(' ');
  const addNumbers = [];
  // 배열 순회
  for (let i = 0; i < stringsToArray.length; i++) {
    // Z를 만나면
    if (stringsToArray[i] === 'Z') {
      // 만약 addNumbers배열에 숫자가 있다면 마지막 숫자 제거
      if (addNumbers.length) {
        addNumbers.pop()
      }
      // Z를 만나지 않으면 배열에 숫자 추가
    } else {
      addNumbers.push(Number(stringsToArray[i]))
    }
  }
  // 배열에 숫자가 있으면 더하기
  if (addNumbers.length) {
    return addNumbers.reduce((total, number) => total + number);
  }
  // 없으면 0 반환
  return 0
}