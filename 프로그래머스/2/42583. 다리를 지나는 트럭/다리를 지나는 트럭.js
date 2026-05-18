function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = Array(bridge_length).fill(0);
    let currentWeight = 0;
    
    while (truck_weights.length) {
        time++;
        currentWeight -= bridge.shift();
        
        if (currentWeight + truck_weights[0] <= weight) {
            const shiftedTruck = truck_weights.shift();
            currentWeight += shiftedTruck;
            bridge.push(shiftedTruck);
        } else {
            bridge.push(0)
        }
    }
    
    return time + bridge_length;
}