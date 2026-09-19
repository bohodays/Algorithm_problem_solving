function solution(files) {
    const convertedFiles = [];

    for (const file of files) {
        let HEAD = "";
        let NUMBER = "";
        let TAIL = "";
        let numberStarted = false; // NUMBER 구간 시작 여부
        let numberEnded = false;   // NUMBER 구간 종료 여부 (TAIL 진입)

        for (const s of file) {
            const isDigit = !isNaN(s) && s !== " ";

            if (!numberEnded && isDigit) {
                // 아직 NUMBER 구간이 끝나지 않았고, 숫자라면 NUMBER에 추가
                numberStarted = true;
                NUMBER += s;
            } else if (!numberStarted) {
                // 아직 숫자를 한 번도 못 만났으면 HEAD
                HEAD += s;
            } else {
                // NUMBER를 이미 지나온 상태라면(숫자든 아니든) TAIL
                numberEnded = true;
                TAIL += s;
            }
        }

        convertedFiles.push([HEAD, NUMBER, TAIL]);
    }

    const answer = convertedFiles
        .map((file, idx) => [...file, idx]) // 원래 순서 보존용 인덱스 추가
        .sort((a, b) => {
            const headerA = a[0].toUpperCase();
            const headerB = b[0].toUpperCase();
            if (headerA < headerB) return -1;
            if (headerA > headerB) return 1;

            const numberA = Number(a[1]);
            const numberB = Number(b[1]);
            if (numberA !== numberB) return numberA - numberB;

            return a[3] - b[3]; // 안정 정렬 보장
        })
        .map((file) => file[0] + file[1] + file[2]);

    return answer;
}