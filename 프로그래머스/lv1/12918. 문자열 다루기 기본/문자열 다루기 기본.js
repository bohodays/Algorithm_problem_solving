function solution(s) {
    if (s.length === 4 || s.length === 6) {
        for (const item of s) {
            if (item != Number(item)) {
                return false;
            }
        }
        return true;
    }
    return false;
}