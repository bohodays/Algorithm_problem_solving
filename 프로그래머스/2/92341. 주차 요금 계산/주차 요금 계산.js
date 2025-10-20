const transMinutes = (time) => {
    const [h, m] = time.split(":").map(item => +item);
    return h * 60 + m;
}

function solution(fees, records) {
    const carsRecords = {}; // current, total, status
    const stack = [];
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    
    records.forEach((item) => {
        const [time, carNumber, status] = item.split(" ")
        
        // 기록이 없는 경우
        if (!carsRecords[carNumber]) {
            carsRecords[carNumber] = [transMinutes(time), 0, status]
        }
        // 기록이 있는 경우
        else {
            // 입차인 경우
            if (status === "IN") {
                carsRecords[carNumber] = [transMinutes(time), carsRecords[carNumber][1], status]
            }
            // 출차인 경우
            else {
                const [startTime, totalMinute] = carsRecords[carNumber];
                carsRecords[carNumber] = [0, totalMinute + (transMinutes(time) - startTime), status]
            }
            
        }
    })
    
    // 출차 기록이 없는 경우 체크
    Object.entries(carsRecords).forEach(([key, value]) => {
        const [currentTime, totalTime, status] = value;
        if (status === "IN") {
            carsRecords[key][1] += transMinutes("23:59") - currentTime;
        }
    })
    
    const answer = Object.entries(carsRecords).sort((a, b) => a[0] - b[0]).map(([key, value]) => {
        const [_, totalMinutes] = value;
        return totalMinutes > defaultTime ? defaultFee + Math.ceil((totalMinutes - defaultTime) / unitTime) * unitFee : defaultFee
    })
    
    return answer;
}