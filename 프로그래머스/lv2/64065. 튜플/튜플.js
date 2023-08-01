function solution(s) {
    const answer = [];
    
    s = s.slice(1, s.length - 1);
    
    const result = [];
    let tmp = [];
    let tmpString = '';
    for (const item of s) {
        if (item === '}') {
            if (tmpString) {
                tmp.push(+tmpString);
                tmpString = '';
            }
            result.push(tmp);
            tmp = [];
        }
        else if (item === ',' && tmpString) {
            tmp.push(+tmpString);
            tmpString = '';
        }
        
       else if (item !== '{' && item !== ',') {
           tmpString += item;
       } 
    }
    
    result.sort((a, b) => {
        return a.length - b.length
    })
    
    for (const item of result) {
        for (let i = 0; i < item.length; i++) {
            if (!answer.length) answer.push(item[i]);
            else {
                if (!answer.includes(item[i])) answer.push(item[i]);
            }
        }
    }
    
    return answer;
}