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
    const str1Obj = {};
    const str2Obj = {};
    
    for (let i = 0; i < str1.length - 1; i++) {
        if (partternEng(str1[i]) && partternEng(str1[i + 1])) {
            const item = (str1[i] + str1[i + 1]).toLowerCase();
            if (str1Obj[item]) str1Obj[item].push(item);
            else str1Obj[item] = [item];
        }

    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        if (partternEng(str2[i]) && partternEng(str2[i + 1])) {
            const item = (str2[i] + str2[i + 1]).toLowerCase();
            if (str2Obj[item]) str2Obj[item].push(item);
            else str2Obj[item] = [item];
        }
    }
    
    const AAndB = [];
    const AOrB = [];
    
    const str1ObjToArrayWithKey = Object.keys(str1Obj);
    const str2ObjToArrayWithKey = Object.keys(str2Obj);

    // 교집합 생성
    for (const item of str1ObjToArrayWithKey) {
        if (str2ObjToArrayWithKey.includes(item)) {
              if (str1Obj[item].length <= str2Obj[item].length) {
                  AAndB.push(...str1Obj[item]);
              } else {
                  AAndB.push(...str2Obj[item]);
              }
        }
        
    }
    
    // 합집합 생성
    for (const item of str1ObjToArrayWithKey) {
        if (str2ObjToArrayWithKey.includes(item)) {
          if (str1Obj[item].length <= str2Obj[item].length) {
              AOrB.push(...str2Obj[item]);
          } else {
              AOrB.push(...str1Obj[item]);
          }
          delete str2Obj[item];
        } else {
            AOrB.push(...str1Obj[item])
        }
    }
    
    for (const item of Object.keys(str2Obj)) {
        AOrB.push(...str2Obj[item])
    }
    
    let ans;
    if (!AAndB.length && !AOrB.length) {
        ans = 1 * 65536;
    } else {
        ans = Math.floor(AAndB.length / AOrB.length * 65536);
    }

    
    return ans;
}