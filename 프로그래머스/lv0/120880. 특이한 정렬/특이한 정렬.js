function solution(numlist, n) {
  var answer = [];
  const diffNumlist = [];
  for (const num of numlist) {
    diffNumlist.push(Math.abs(num - n))
  }

  let i = 0
  while (i < diffNumlist.length) {
    let minValue = Math.min(...diffNumlist)
    let pickValueIndex1 = diffNumlist.indexOf(minValue)
    let pickValueIndex2 = diffNumlist.lastIndexOf(minValue)
    if (pickValueIndex1 !== pickValueIndex2) {
      if (numlist[pickValueIndex1] > numlist[pickValueIndex2]) {
        answer.push(numlist[pickValueIndex1])
        diffNumlist[pickValueIndex1] = 10001
      } else {
        answer.push(numlist[pickValueIndex2])
        diffNumlist[pickValueIndex2] = 10001
      }
    } else {
      answer.push(numlist[pickValueIndex1])
      diffNumlist[pickValueIndex1] = 10001
    }
    i++
  }
  return answer;
}