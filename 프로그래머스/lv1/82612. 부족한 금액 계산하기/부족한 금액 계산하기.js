function solution(price, money, count) {
    let pay = 0;
    for (let i = 1; i <= count; i++) {
        pay += price * i
    }
    if (money - pay >= 0) {
        return 0;
    } else {
        return pay - money
    }
}