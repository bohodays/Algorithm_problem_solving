const partternEng = (str) => {
    const pattern_eng = /[a-zA-Z]/;
    
    // 특수문자이면 false 리턴
    if (str === ' ') {
        return false;
    } else if (!pattern_eng.test(str)) {
        return false;
    } else {
        return true;
    }
}


function solution(str1, str2) {
    let answer = 0;
    const str1Array = [];
    const str2Array = [];
    
    // 두 글자씩 끊어서 배열로 만들기
    for (let i = 0; i < str1.length - 1; i++) {
        if (partternEng(str1[i]) && partternEng(str1[i + 1])) {
            str1Array.push((str1[i] + str1[i + 1]).toUpperCase())
        }
    }
    for (let i = 0; i < str2.length - 1; i++) {
        if (partternEng(str2[i]) && partternEng(str2[i + 1])) {
            str2Array.push((str2[i] + str2[i + 1]).toUpperCase())
        }
    }
    
    const refSet = new Set([...str1Array, ...str2Array])
    
    // 교집합 만들기
    let intersection = 0;
    for (const item of refSet) {
        if (str1Array.includes(item) && str2Array.includes(item)) {
            intersection += Math.min(str1Array.filter((str) => str === item).length, str2Array.filter((str) => str === item).length) 
        }
    }
    
    // 합집합 만들기
    let union = 0;
    for (const item of refSet) {
        if (str1Array.includes(item) && str2Array.includes(item)) {
            union += Math.max(str1Array.filter((str) => str === item).length, str2Array.filter((str) => str === item).length) 
        } else if (str1Array.includes(item)) {
            union += str1Array.filter((str) => str === item).length;
        } else if (str2Array.includes(item)) {
            union += str2Array.filter((str) => str === item).length;
        }
    }
    
    if (!intersection && !union) answer = 1;
    else answer = intersection / union
    
    return parseInt(answer * 65536);
}