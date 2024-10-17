function solution(num_list) {
    const evenNums = num_list.filter((item) => item % 2 === 0).length;
    return [evenNums, num_list.length - evenNums];
}