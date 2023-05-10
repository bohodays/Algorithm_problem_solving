function solution(babbling) {
    let ans = 0;
    for (let i = 0; i < babbling.length; i++) {
        let flag = true;
        const checkItem = babbling[i];
        for (const item of ['aya', 'ye', 'woo', 'ma']) {
            // 두번 이상 반복한 것이 포함되면 같은 발음을 연속 발음한 것이므로
            // 반복을 멈추고 넘어간다.
            if (checkItem.includes(item.repeat(2))) {
                flag = false;
                break;
            }
        }
        // 두번 연속으로 발음하지 않았으면
        if (flag) {
            // 발음할 수 있는 단어인지 확인
            if (checkItem.replace(/aya|ye|woo|ma/g, '') === '') {
                ans++;
            }
        }
    }
    return ans;
}