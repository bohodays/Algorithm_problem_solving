// 시각을 입력받은 분으로 변환하는 함수
const convertMin = (time) => {
    const splitedTime = time.split(":").map((t) => Number(t));
    return splitedTime[0] * 60 + splitedTime[1];
}

function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    const answer = [];
    const inMap = new Map();
    const outMap = new Map();
    const resultMap = new Map();
    
    for (const record of records) {
        const [time, carNum, type] = record.split(" ");
        
        if (type === "IN") {
            // 입차인 경우
            inMap.set(carNum, convertMin(time));
        } else if (type === "OUT") {
            // 출차인 경우  
            const resultTime = convertMin(time) - inMap.get(carNum);
            resultMap.set(carNum, resultMap.has(carNum) ? resultMap.get(carNum) + resultTime : resultTime);
            inMap.delete(carNum)
        }
    }
    
    // 출차 이력이 없는 차량 계산
    if (inMap.size) {
        for (const key of inMap.keys()) {
            const resultTime = convertMin("23:59") - inMap.get(key);
            resultMap.set(key, resultMap.has(key) ? resultMap.get(key) + resultTime : resultTime);
            inMap.delete(key)
        }
    }
    
    // 요금계산
    for (const [key, value] of resultMap.entries()) {
        answer.push([key, value > defaultTime ? defaultFee + (Math.ceil((value - defaultTime) / unitTime) * unitFee)  : defaultFee])
    }
    
    return answer.sort((a, b) => a[0] - b[0]).map((car) => car[1]);
}