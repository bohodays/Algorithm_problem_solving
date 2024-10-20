function solution(polynomial) {
    var answer = '';
    polynomial = polynomial.replaceAll(" +", "").split(" ");
    let xValue = 0;
    let numValue = 0;
    polynomial.forEach((item) => {
        if (item.includes("x")) xValue += item.replace("x", "") ? Number(item.replace("x", "")) : 1;
        else numValue += Number(item);
    })
    if (xValue && numValue) return `${xValue === 1 ? "" : xValue}x + ${numValue}`;
    else if (xValue) return `${xValue === 1 ? "" : xValue}x`;
    return `${numValue}`;
}