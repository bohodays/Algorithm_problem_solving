const transferMinute = (time) => {
    const [hour, minute] = time.split(":").map((item) => +item);
    return hour * 60 + minute
}

function solution(fees, records) {
    const enter = {};
    const out = {};
    const totalMinute = {};
    const [defaultMinute, defaultFee, unitMinute, unitFee] = fees;
    
    // 입차, 출차 내역으로 주차시간 계산
    for (const record of records) {
        const [time, carId, type] = record.split(" ");
        
        if (type === "IN") {
            enter[carId] = transferMinute(time);
        } else {
            totalMinute[carId] = totalMinute[carId] ? totalMinute[carId] + (transferMinute(time) - enter[carId]) : (transferMinute(time) - enter[carId]);
            enter[carId] = false;
        }
    }
    
    // 입차 내역만 있는 경우 체크
    for (const key in enter) {
        if (enter[key] !== false) {
            totalMinute[key] = totalMinute[key] ? totalMinute[key] + (transferMinute("23:59") - enter[key]) : (transferMinute("23:59") - enter[key]);       
        }
    }

    let result = [];
    for (const item in totalMinute) {
        if (totalMinute[item] <= defaultMinute) {
            result.push([item, defaultFee])
        } else {
            result.push([item, defaultFee + (Math.ceil((totalMinute[item] - defaultMinute) / unitMinute)) * unitFee]);
        }
    }
    
    result = result.sort((a, b) => a[0] - b[0]).map((item) => item[1]);
    
    return result;
}