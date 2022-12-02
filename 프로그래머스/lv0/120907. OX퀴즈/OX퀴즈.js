function solution(quiz) {
  var answer = [];
  quiz.forEach((item) => {
    const quizToList = item.split(" ");
    // 부호가 '+'인 경우
    if (quizToList[1] === '+') {
      if (Number(quizToList[0]) + Number(quizToList[2]) === Number(quizToList[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    // 부호가 '-'인 경우
    } else {
      if (Number(quizToList[0]) - Number(quizToList[2]) === Number(quizToList[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
  })
  return answer;
}