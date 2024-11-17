function solution(video_len, pos, op_start, op_end, commands) {
    function transSeconds(time) {
        return time.split(":").map((item) => +item).reduce((sum, num, i) => sum + num * (i === 0 ? 60 : 1), 0);
    }
    
    // 모든 변수를 초로 변환
    var answer = '';
    let limitVideoLen = transSeconds(video_len);
    let currentPos = transSeconds(pos);
    let opSecondsStart = transSeconds(op_start);
    let opSecondsEnd = transSeconds(op_end);
    
    // 현재 재생 위치가 오프닝 구간인지 확인
    if (currentPos >= opSecondsStart && currentPos <= opSecondsEnd) {
        currentPos = opSecondsEnd
    }
    
    // 명령 수행
    commands.forEach((command) => {
        if (command === "next") {
            currentPos += 10;
        } else if (command === "prev") {
            currentPos -= 10;
        }
        
        // 재생 구간을 벗어나는지 확인
        if (currentPos < 0) currentPos = 0;
        if (currentPos > limitVideoLen) currentPos = limitVideoLen;
        
        // 현재 재생 위치가 오프닝 구간인지 확인
        if (currentPos >= opSecondsStart && currentPos <= opSecondsEnd) {
            currentPos = opSecondsEnd
        }
    })
    
    let min = String(parseInt(currentPos / 60))
    min = min.length === 1 ? "0" + min : min;
    let sec = String(currentPos % 60)
    sec = sec.length === 1 ? "0" + sec : sec;
    
    return min + ":" + sec;
}