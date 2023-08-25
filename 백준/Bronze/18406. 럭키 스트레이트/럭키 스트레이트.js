// 18406 럭키 스트레이트

const fs = require("fs");
const points = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);

const frontPoints = points.splice(0, points.length / 2);

const getSum = (numArray) => {
    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log(getSum(frontPoints) === getSum(points) ? "LUCKY" : "READY");