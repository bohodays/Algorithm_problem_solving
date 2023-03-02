function solution(s){
    let pCount = 0;
    let yCount = 0;
    
    for (const item of s) {
        if (item === 'p' || item === 'P') {
            pCount++;
        } else if (item === 'y' || item === 'Y') {
            yCount++;
        }
    }
    
    if (pCount === yCount) {
        return true;
    } else {
        return false;
    }
}