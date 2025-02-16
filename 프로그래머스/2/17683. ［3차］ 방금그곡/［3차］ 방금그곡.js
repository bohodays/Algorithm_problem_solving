function solution(m, musicinfos) {
    // #이 붙은 음을 변환
    function convertMelody(melody) {
        return melody
            .replace(/B#/g, "U")
            .replace(/C#/g, "X")
            .replace(/D#/g, "Y")
            .replace(/F#/g, "Z")
            .replace(/G#/g, "P")
            .replace(/A#/g, "Q");
    }

    m = convertMelody(m); // 기억한 멜로디 변환

    let result = [];

    for (const info of musicinfos) {
        let [start, end, title, music] = info.split(",");
        
        // 재생 시간 계산
        let [sh, sm] = start.split(":").map(Number);
        let [eh, em] = end.split(":").map(Number);
        let playTime = (eh * 60 + em) - (sh * 60 + sm);

        // 음악 악보 변환
        music = convertMelody(music);

        // 재생 시간만큼 악보 확장
        let fullMelody = music.repeat(Math.ceil(playTime / music.length)).slice(0, playTime);

        // 멜로디 포함 여부 확인
        if (fullMelody.includes(m)) {
            result.push({ playTime, title, index: result.length });
        }
    }

    // 정렬: 재생 시간 내림차순 → 입력된 순서 유지
    result.sort((a, b) => b.playTime - a.playTime || a.index - b.index);

    return result.length ? result[0].title : "(None)";
}
