function solution(today, terms, privacies) {
    const answer = [];
    
    // today를 Array형태로 변환
    today = today.split(".").map((item) => +item);
    // 유효기간 확인을 위한 객체 생성
    const expireRef = {};
    terms.forEach((item) => {
        const targetItem = item.split(" ");
        expireRef[targetItem[0]] = +targetItem[1];
    })
    
    // privacies을 순회하면서 유효기간이 지났는지 확인
    privacies.forEach((item, index) => {
        item = item.split(" ");
        const checkDate = item[0].split(".").map((item) => +item);
        const checkType = item[1];
        
        checkDate[1] += expireRef[checkType];
            // console.log({checkDate, checkType}, 444)
        if (checkDate[1] > 12) {
            checkDate[0] += parseInt((checkDate[1] - 1) / 12);
            checkDate[1] = (checkDate[1] - 1) % 12 + 1;
        }

        if (checkDate[0] < today[0]) {
            answer.push(index + 1);
        } else if (checkDate[0] === today[0]) {
            if (checkDate[1] < today[1]) {
                answer.push(index + 1);
            } else if (checkDate[1] === today[1]) {
                if (checkDate[2] <= today[2]) {
                    answer.push(index + 1);
                }
            }
        }
    })
    return answer;
}