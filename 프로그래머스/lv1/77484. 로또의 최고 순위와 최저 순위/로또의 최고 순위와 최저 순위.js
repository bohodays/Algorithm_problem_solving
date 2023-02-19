const checkRank = (num) => {
    if (num === 6) return 1;
    else if (num === 5) return 2;
    else if (num === 4) return 3;
    else if (num === 3) return 4;
    else if (num === 2) return 5;
    else return 6;
}

function solution(lottos, win_nums) {
    const selectedArray = lottos.filter((item) => win_nums.includes(item));
    const zeroCount = lottos.filter((item) => item === 0).length;
    const maxValue = selectedArray.length + zeroCount;
    const minValue = selectedArray.length;
    return [checkRank(maxValue), checkRank(minValue)];
}