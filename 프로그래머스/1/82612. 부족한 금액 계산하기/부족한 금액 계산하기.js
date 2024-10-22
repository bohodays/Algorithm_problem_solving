function solution(price, money, count) {
    let totalPay = 0;
    for (let i = 1; i <= count; i++) {
        totalPay += price * i;
    }
    return totalPay > money ? totalPay - money : 0;
}