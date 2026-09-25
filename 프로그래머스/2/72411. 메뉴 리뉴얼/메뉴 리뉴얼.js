const getCombinations = (food, n) => {
    const sorted = food.split("").sort();   // 미리 한 번만 정렬
    const result = [];

    const dfs = (start, item) => {
        if (item.length === n) {
            result.push(item);
            return;
        }
        for (let i = start; i < sorted.length; i++) {
            dfs(i + 1, item + sorted[i]);
        }
    };

    dfs(0, "");
    return result;
};


function solution(orders, course) {
    var answer = [];
    

    course.forEach((target) => {
        const foodCombMap = new Map();
        let foodCombArr = [];
        let maxValue = 0;
        orders.forEach((food) => {
            if (food.length >= target) {
                foodCombArr = getCombinations(food, target);
                foodCombArr.forEach((item) => {
                    foodCombMap.set(item, foodCombMap.has(item) ? foodCombMap.get(item) + 1 : 1);
                    maxValue = Math.max(maxValue, foodCombMap.get(item));
                });
            }
        });
        
        [...foodCombMap.keys()].forEach((key) => {
            if (maxValue > 1 && foodCombMap.get(key) === maxValue) answer.push(key);
        })
    })
    
    return answer.sort();
}