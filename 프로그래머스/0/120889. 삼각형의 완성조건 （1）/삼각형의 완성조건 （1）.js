function solution(sides) {
    let sortedSides = sides.sort((a, b) => a - b);
    if (sortedSides[2] < sortedSides[0] + sortedSides[1]) return 1
    return 2;
}