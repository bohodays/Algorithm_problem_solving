function solution(n, lost, reserve) {
    let answer = 0;
    
    const students = Array(n + 1).fill(1);
    lost.forEach((item) => students[item] -= 1);
    reserve.forEach((item) => students[item] += 1);

    for (let i = 0; i < students.length; i++) {
        if (i === 0) continue;
        if (students[i] === 0) {
            let flag = false;
            // 앞번호의 학생 확인
            if (i - 1 >= 1) {
                if (students[i - 1] >= 2) {
                    students[i - 1] -= 1;
                    students[i] = 1;
                    flag = true;
                }
            }
            // 뒷번호의 학생 확인
            if (!flag && i + 1 < students.length) {
                if (students[i + 1] >= 2) {
                    students[i + 1] -= 1;
                    students[i] = 1;
                }
            }
        }
    }
    
    return students.filter((item) => item >= 1).length - 1;
}