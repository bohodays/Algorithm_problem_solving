function isCanTrans(begin, target) {
    let count = 0;
    for (let i = 0; i < begin.length; i++) {
        if (begin[i] !== target[i]) count++;
    }
    return count === 1 ? true : false;
}

function solution(begin, target, words) {
    const visited = {[begin]: 0};    
    const queue = [begin];
    
    while (queue.length) {
        const word = queue.shift();
    
        for (let i = 0; i < words.length; i++) {
            if (isCanTrans(word, words[i]) && !visited[words[i]]) {
                visited[words[i]] = visited[word] + 1
                queue.push(words[i]);
            }
        }
    }
    
    return visited[target] || 0;
}