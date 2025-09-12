// 문자열을 입력받아 두글자씩 끊어서 집합을 만드는 함수
// 특수문자는 제외하며, 집합의 결과는 객체 형태로 반환함.
const makeObject = (str) => {
    const ref = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = {};
    for (let i = 0; i < str.length - 1; i++) {
        const [str1, str2] = [str[i].toUpperCase(), str[i + 1].toUpperCase()];
        if (ref.includes(str1) && ref.includes(str2)) {
            result[str1 + str2] = (result[str1 + str2] ?? 0) + 1;
        }
    }
    return result;
}

function solution(str1, str2) {
    let answer = 0;
    const str1ToObj = makeObject(str1);
    const str2ToObj = makeObject(str2);
    
    const intersection = Object.keys(str1ToObj).map((key) => {
        if (Object.keys(str2ToObj).includes(key)) {
            return Math.min(str1ToObj[key], str2ToObj[key]);
        }
        return 0;
    }).reduce((sum, num) => sum + num, 0);
    
    const unionArray = [];
    for (const key of Object.keys(str1ToObj)) {
        if (str2ToObj[key]) unionArray.push(Math.max(str1ToObj[key], str2ToObj[key]));
        else unionArray.push(str1ToObj[key])
    }
    for (const key of Object.keys(str2ToObj)) {
        if (!str1ToObj[key]) unionArray.push(str2ToObj[key]);
    }
    const union = unionArray.reduce((sum, num) => sum + num, 0)
    
    return parseInt((union ? intersection / union : 1) * 65536)
}