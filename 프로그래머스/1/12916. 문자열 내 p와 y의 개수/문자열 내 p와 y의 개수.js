function solution(s){
    s = s.toUpperCase().split("");
    const pCount = s.filter((item) => item === "P").length;
    const yCount = s.filter((item) => item === "Y").length;
    return pCount === yCount;
}