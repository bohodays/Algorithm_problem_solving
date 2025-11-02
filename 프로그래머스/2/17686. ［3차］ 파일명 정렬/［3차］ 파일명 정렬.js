function solution(files) {
    const answer = [];
    
    let splitedFiles = files.map((file) => {
        let HEAD_FLAG = true;
        let NUMBER_FLAG = true;
        let HEAD = "";
        let NUMBER = "";
        let TAIL = "";
        
        for (const s of file) {
            if (isNaN(s) || s === " ") {
                if (HEAD_FLAG) HEAD += s;
                else {
                    NUMBER_FLAG = false;
                    TAIL += s;
                }
            } else {
                HEAD_FLAG = false;
                if (NUMBER_FLAG) NUMBER += s;
                else {
                    TAIL += s;
                }
            }
        }
        
        return [HEAD.toLowerCase(), Number(NUMBER), TAIL.toLowerCase(), file];
    })

    splitedFiles = splitedFiles.sort((a, b) => {
        if (a[0] < b[0]) return -1; // a가 앞으로 (오름차순)
        if (a[0] > b[0]) return 1; // b가 앞으로 (내림차순)
        return a[1] - b[1];
    }).map((file) => file[3])

    return splitedFiles;
}