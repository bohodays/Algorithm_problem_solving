// 변환할 수 있는지 체크하는 함수
const isCanTrans = (target1, target2) => {
    let count = 0;
    
    for (let i = 0; i < target1.length; i++) {
        if (target1[i] != target2[i]) count++;
    }
    
    return count === 1 ? true : false;
}

function solution(begin, target, words) {
    let answer = 0;
    
    const visited = {[begin]: 0};
    const queue = [begin];
    
    // bfs로 구현
    while (queue.length) {
        const currentItem = queue.shift();
        
        for (const word of words) {
            if (isCanTrans(currentItem, word) && !visited[word]) {
                visited[word] = visited[currentItem] + 1;
                queue.push(word)
            }
        }
    }
    
    return visited[target] ?? 0;
}