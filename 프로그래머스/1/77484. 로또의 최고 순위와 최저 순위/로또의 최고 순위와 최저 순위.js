function solution(lottos, win_nums) {
    const getRank = (number) => {
        if (number === 6) return 1;
        else if (number === 5) return 2;
        else if (number === 4) return 3;
        else if (number === 3) return 4;
        else if (number === 2) return 5;
        else return 6;
    }
    
    const currCount = lottos.filter((item) => win_nums.includes(item)).length;
    const zeroCount = lottos.filter((item) => item === 0).length;
    
    return [getRank(currCount + zeroCount), getRank(currCount)];
}