function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const reportObj = {};
    id_list.forEach((item) => {
        reportObj[item] = [0, new Set()]; // 신고당한 횟수, 신고한 사람들
    })
    
    report = [...new Set([...report])];
    report.forEach((item) => {
        const [input, output] = item.split(" ");
        reportObj[output][0] += 1;
        reportObj[output][1].add(input)
    })
    

    const count = {};
    for (const item in reportObj) {
        if (reportObj[item][0] >= k) {
            const targetItems = [...reportObj[item][1]];
            targetItems.forEach((targetItem) => {
                count[targetItem] = count[targetItem] ? count[targetItem] + 1 : 1;
            })
        }
    }
    
    return id_list.map((item) => count[item] ? count[item] : 0);
}