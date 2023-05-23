function solution(today, terms, privacies) {
  // 정답을 저장할 배열 생성
  const answer = [];

  // 약관 종류에 따른 유효기간 객체 생성
  const termsItems = {};
  for (const term of terms) {
    const item = term.split(" ");
    termsItems[item[0]] = +item[1];
  }

  const todayYear = +today.slice(0, 4);
  const todayMonth = +today.slice(5, 7);
  const todayDay = +today.slice(8);
  let i = 1;
  // 개인정보 수집 일자를 순회하며 유효기간 확인하기
  for (const item of privacies) {
    const targetYear = +item.slice(0, 4);
    const targetMonth = +item.slice(5, 7);
    const targetDay = +item.slice(8, 10);
    const privacy = item[item.length - 1];
    // console.log(targetYear, targetMonth, targetDay, privacy);

    let resultYear = targetYear;
    let resultMonth = targetMonth + termsItems[privacy];
    let resultDay = targetDay - 1;

    // 만약 달이 12보다 클 경우
    if (resultMonth > 12) {
      // 12의 배수이면 년도는 바뀌지 않음
      if (resultMonth % 12 === 0) {
        resultYear += parseInt(resultMonth / 12) - 1;
        resultMonth = 12;
      } else {
        // 12의 배수가 아닌 경우 년도가 바뀜
        resultYear += parseInt(resultMonth / 12);
        resultMonth = resultMonth % 12;
      }
    }

    if (resultDay === 0) {
      resultMonth--;
      resultDay = 28;

      if (resultMonth === 0) {
        resultYear--;
        resultMonth = 12;
      }
    }

    if (resultYear < todayYear) {
      answer.push(i);
    } else if (resultYear === todayYear) {
      if (resultMonth < todayMonth) {
        answer.push(i);
      } else if (resultMonth === todayMonth) {
        if (resultDay < todayDay) {
          answer.push(i);
        }
      }
    }
    i++;
  }

  return answer;
}