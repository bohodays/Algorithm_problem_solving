function solution(sizes) {
    // 주어진 배열을 순회하면서 오름차순 정렬한다.
    // 정렬 후 왼쪽 아이템에서 제일 큰 값과 오른쪽 아이템에서 제일 큰 값을 갱신하며 구한다.
    // 왼쪽 아이템에서 제일 큰 값과 오른쪽 아이템에서 제일 큰 값을 곱한다.
    
    let rightMaxValue = 0;
    let leftMaxValue = 0;
    for (const item of sizes) {
        const sotedItem = item.sort((a, b) => a - b);
        leftMaxValue = item[0] > leftMaxValue ? item[0] : leftMaxValue;
        rightMaxValue = item[1] > rightMaxValue ? item[1] : rightMaxValue;
    }
    return leftMaxValue * rightMaxValue
}