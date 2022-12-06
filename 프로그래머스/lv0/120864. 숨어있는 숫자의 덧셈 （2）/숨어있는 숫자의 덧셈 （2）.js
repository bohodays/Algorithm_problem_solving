function solution(my_string) {
  const exceptStr = my_string.replace(/[^0-9]/g, ' ');
  const strToArray = exceptStr.split(' ');
  let answer = 0;
  strToArray.forEach((number) => {
    if (number !== '') {
      answer += Number(number);
    }
  })
  
  return answer;
}