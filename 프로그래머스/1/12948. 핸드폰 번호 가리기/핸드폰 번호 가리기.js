function solution(phone_number) {
    var answer = '';
    return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);
}