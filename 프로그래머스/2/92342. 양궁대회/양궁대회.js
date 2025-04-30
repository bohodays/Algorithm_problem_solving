function solution(n, info) {
    let maxDiff = 0;
    let answer = [-1];

    const dfs = (idx, remain, ryanInfo) => {
        if (idx === 11) {
            // 화살을 모두 소진한 경우, 점수 계산
            if (remain > 0) ryanInfo[10] += remain; // 남은 화살은 0점에 몰아줌

            let ryanScore = 0;
            let apeachScore = 0;
            for (let i = 0; i < 11; i++) {
                if (info[i] === 0 && ryanInfo[i] === 0) continue;
                if (ryanInfo[i] > info[i]) {
                    ryanScore += 10 - i;
                } else {
                    apeachScore += 10 - i;
                }
            }

            const diff = ryanScore - apeachScore;

            if (diff > 0) {
                if (diff > maxDiff) {
                    maxDiff = diff;
                    answer = [...ryanInfo];
                } else if (diff === maxDiff) {
                    // 점수차가 같을 때 더 낮은 점수를 많이 맞힌 경우 선택
                    for (let i = 10; i >= 0; i--) {
                        if (ryanInfo[i] > answer[i]) {
                            answer = [...ryanInfo];
                            break;
                        } else if (ryanInfo[i] < answer[i]) break;
                    }
                }
            }

            if (remain > 0) ryanInfo[10] -= remain; // 원상 복구
            return;
        }

        // 라이언이 이 점수를 가져가려면 어피치보다 1발 더 맞혀야 함
        if (remain > info[idx]) {
            ryanInfo[idx] = info[idx] + 1;
            dfs(idx + 1, remain - (info[idx] + 1), ryanInfo);
            ryanInfo[idx] = 0; // 백트래킹
        }

        // 이 점수를 포기하고 다음 점수로
        dfs(idx + 1, remain, ryanInfo);
    };

    dfs(0, n, Array(11).fill(0));

    return answer;
}
