function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = Array(bridge_length).fill(0); // 다리 위 상태(앞이 출구)
    let currentWeight = 0;
    
    while (truck_weights.length) {
        time++;
        currentWeight -= bridge.shift();
        
        if (truck_weights[0] + currentWeight <= weight) {
            const truck = truck_weights.shift();
            bridge.push(truck);
            currentWeight += truck;
        } else {
            bridge.push(0);
        }
        
    }
    
    time += bridge.length;
    
    return time;
}