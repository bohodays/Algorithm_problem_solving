function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = Array(bridge_length).fill(0);
    
    while (truck_weights.length) {
        answer++;
        
        const currentBridgeWeight = bridge.slice(1).reduce((sum, num) => sum + num, 0);

        if (currentBridgeWeight + truck_weights[0] <= weight) {
            if (bridge.length === bridge_length) {
                bridge.shift();
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(truck_weights.shift());  
            }

        } else {
            if (bridge.length === bridge_length) {
                bridge.shift();
                bridge.push(0);
            } else {
                bridge.push(0);
            }
        }
    }
    
    let check = 0;
    bridge.forEach((item, index) => {
        if (item !== 0) check = index;
    })
    
    return answer + check + 1;
}