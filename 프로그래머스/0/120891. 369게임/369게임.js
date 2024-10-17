function solution(order) {
    order = String(order).split("").filter((item) => item === "3" || item === "6" || item === "9");
    return order.length;
}