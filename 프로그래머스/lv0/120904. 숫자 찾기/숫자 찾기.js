function solution(num, k) {
  const numToList = String(num).split('')
  const targetNum = numToList.indexOf(String(k)) + 1
  if (targetNum === 0) {
    return -1;
  } else {
    return targetNum
  }
}