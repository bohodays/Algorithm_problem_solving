// 문자를 두 글자씩 끊어서 다중 집합으로 만드는 함수
const convertStr = (str) => {
    str = str.toUpperCase();
    const ref = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const result = [];
    for (let i = 0; i < str.length - 1; i++) {
        // 공백 체크
        if (str[i] && str[i + 1]) {
            // 숫자 체크
            if (isNaN(str[i]) && isNaN(str[i])) {
                // 특수문자 체크
                if (ref.includes(str[i]) && ref.includes(str[i + 1])) {
                    result.push(str[i] + str[i + 1]);
                }
            }
        }
    }
    
    return result;
}

function solution(str1, str2) {
    let answer = 0;
    
    const convertStr1 = convertStr(str1);
    const convertStr2 = convertStr(str2);
    
    if (!convertStr1.length && !convertStr2.length) answer = 1;
    else {
        const totalArr = [...new Set(convertStr1.concat(convertStr2))];
        const str1Map = new Map();
        convertStr1.forEach((str) => str1Map.set(str, str1Map.has(str) ? str1Map.get(str) + 1 : 1));
        const str2Map = new Map();
        convertStr2.forEach((str) => str2Map.set(str, str2Map.has(str) ? str2Map.get(str) + 1 : 1));
        
        // 교집합
        let intersection = 0;
        totalArr.forEach((item) => {
            if (str1Map.has(item) && str2Map.has(item)) intersection += Math.min(str1Map.get(item), str2Map.get(item));
        })
        
        let union = 0;
        totalArr.forEach((item) => {
            if (str1Map.has(item) && str2Map.has(item)) union += Math.max(str1Map.get(item), str2Map.get(item));
            else if (str1Map.has(item)) union += str1Map.get(item);
            else if (str2Map.has(item)) union += str2Map.get(item);
        })
        
        answer = intersection / union
    }
    
    return parseInt(answer * 65536);
}