function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const stack = Array(bridge_length).fill(0);
    
    while (truck_weights.length) {
        time++;
        stack.shift();
        
        if (stack.filter((i) => i !== 0).length < bridge_length && stack.reduce((sum, num) => sum + num, 0) + truck_weights[0] <= weight) {
            stack.push(truck_weights.shift());
        } else {
            stack.push(0)
        }
    }
    
    const lastIndex = stack.findLastIndex((num) => num !== 0);
    
    return time + (lastIndex + 1);
}