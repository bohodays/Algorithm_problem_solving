function solution(array) {
  var answer = 0;
  array.forEach((item) => {
    const itemToList = String(item).split('')
    itemToList.forEach((check) => {
      if (check === '7') {
        answer++;
      }
    })
  })
  return answer;
}