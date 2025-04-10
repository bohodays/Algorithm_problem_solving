const onConvertMinute = (time) => {
    const [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
}

function solution(plans) {
    plans = plans.map(([name, start, duration]) => [
        name,
        onConvertMinute(start),
        Number(duration)
    ]);

    plans.sort((a, b) => a[1] - b[1]);

    const answer = [];
    const stack = [];
    let currentTime = plans[0][1];

    for (let i = 0; i < plans.length; i++) {
        const [name, start, duration] = plans[i];

        // 현재 과제 시작 전까지 멈춘 과제 처리
        while (stack.length && currentTime < start) {
            const [prevName, remaining] = stack.pop();
            if (currentTime + remaining <= start) {
                currentTime += remaining;
                answer.push(prevName);
            } else {
                stack.push([prevName, remaining - (start - currentTime)]);
                currentTime = start;
            }
        }

        // 새 과제 시작
        stack.push([name, duration]);
        currentTime = start;
    }

    // 남은 멈춘 과제 마무리
    while (stack.length) {
        answer.push(stack.pop()[0]);
    }

    return answer;
}
