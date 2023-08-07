function solution(priorities, location) {
    let answer = 0;
    
    const locationArray = Array(priorities.length).fill().map((v, i) => i);
    
    while (true) {
        const target = priorities.shift();
        const targetLocation = locationArray.shift();
        
        // 맨 앞의 인쇄물보다 중요도가 높은 타겟이 있는지 확인
        const checkItem = priorities.filter((item) => item > target).length;
        
        // 중요도가 높은 타겟이 있다면 뒤로 보내기
        if (checkItem) {
            priorities.push(target);
            locationArray.push(targetLocation);
        } 
        // 중요도가 높은 타겟이 없다면 프린터하기;
        else {
            answer++;
            if (targetLocation === location) {
                break;
            }
        }
    }
    
    return answer;
}