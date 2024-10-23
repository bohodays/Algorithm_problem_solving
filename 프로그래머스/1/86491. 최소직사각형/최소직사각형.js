function solution(sizes) {
    sizes.forEach((item) => {
        item.sort((a, b) => a - b);
    })
    let [w, h] = [0 ,0];
    sizes.forEach((item) => {
        w = Math.max(w, item[0]);
        h = Math.max(h, item[1]);
    })
    return w * h;
}