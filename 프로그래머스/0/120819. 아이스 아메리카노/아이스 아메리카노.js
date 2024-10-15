function solution(money) {
    const cups = parseInt(money / 5500);
    return [cups, money - cups * 5500];
}