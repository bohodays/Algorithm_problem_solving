function solution(picks, minerals) {
    let answer = 0;
    
    const staminaRef = {
        0: {
            0: 1,
            1: 1,
            2: 1
        },
        1: {
            0: 5,
            1: 1,
            2: 1
        },
        2: {
            0: 25,
            1: 5,
            2: 1
        },
    }
    
    const total = picks.reduce((sum, num) => sum + num, 0);
    const sliceCount = Math.ceil(minerals.length / 5);
    const checkItems = [];
    for (let i = 0; i < sliceCount; i++) {
        if (i >= total) break;
        
        const mineral = [0, 0, 0];
        minerals.splice(0, 5).forEach((item) => {
            if (item === "diamond") mineral[0] += 1;
            else if (item === "iron") mineral[1] += 1;
            else mineral[2] += 1
        })
        checkItems.push(mineral);
    }
    
    checkItems.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] === b[1]) {
                return b[2] - a[2];
            }
            return b[1] - a[1];
        }
        return b[0] - a[0];
    })
    
    checkItems.forEach((item) => {
        const [d, i, s] = item;
        let curr = 0;
        if (picks[0]) curr = 0
        else if (picks[1]) curr = 1
        else if (picks[2]) curr = 2;
        
        // 남은 곡괭이가 있으면
        if (picks[curr]) {
            answer += staminaRef[curr][0] * d;
            answer += staminaRef[curr][1] * i;
            answer += staminaRef[curr][2] * s;
            picks[curr]--;
        }
    })
    
    return answer;
}