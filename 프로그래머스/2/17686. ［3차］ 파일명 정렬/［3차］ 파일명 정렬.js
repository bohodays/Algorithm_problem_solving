function fileFilter(file) {
    let HEAD = "";
    let HEAD_flag = false;
    let NUMBER = "";
    let NUMBER_flag = false;
    let TAIL = "";

    for (let i = 0; i < file.length; i++) {
        if (!HEAD_flag) {
            if (/\d/.test(file[i])) {
                HEAD_flag = true;
            } else {
                HEAD += file[i];
            }
        }

        if (HEAD_flag && !NUMBER_flag) {
            if (/\d/.test(file[i])) {
                NUMBER += file[i];
            } else {
                NUMBER_flag = true;
            }
        }

        if (HEAD_flag && NUMBER_flag) {
            TAIL += file[i];
        }
    }

    return [HEAD, NUMBER, TAIL];
}

function solution(files) {
  let result = files.map(file => fileFilter(file));

    // 정렬: HEAD는 대소문자 구분 없이 비교, NUMBER는 정수로 비교
    result.sort((a, b) => {
        const headA = a[0].toUpperCase();
        const headB = b[0].toUpperCase();
        if (headA < headB) return -1;
        if (headA > headB) return 1;
        return parseInt(a[1], 10) - parseInt(b[1], 10);
    });

    // 원래 형식으로 합쳐 반환
    return result.map(file => file.join(""));
}