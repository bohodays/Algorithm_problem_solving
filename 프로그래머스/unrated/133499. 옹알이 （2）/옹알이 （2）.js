function solution(babbling) {
    let ans = 0;
    for (let i = 0; i < babbling.length; i++) {
        let flag = true;
        const checkItem = babbling[i];
        for (const item of ['aya', 'ye', 'woo', 'ma']) {
            if (checkItem.includes(item.repeat(2))) {
                flag = false;
                break;
            }
        }
        if (flag) {
            if (checkItem.replace(/aya|ye|woo|ma/g, '') === '') {
                ans++;
            }
        }
    }
    return ans;
}