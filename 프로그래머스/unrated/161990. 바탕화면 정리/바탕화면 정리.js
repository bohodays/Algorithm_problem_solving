function solution(wallpaper) {
  // [시작 Y, 시작 X, 종료 Y, 종료 X]
  const answer = [0, 0, 0, 0];

  const indexs = [];

  wallpaper = wallpaper
    .map((v, i) => {
      // wallpaper의 요소인 문자열에서 첫뱐째 "#"의 index를 변수에 넣어줍니다.
      const index = v.indexOf("#");
      // wallpaper의 요소인 문자열에서 마지막 "#"의 index에 1을 더하고 변수에 넣어줍니다.
      const lastIndex = v.lastIndexOf("#") + 1;

      const check = v.includes("#");

      if (check) indexs.push(index, lastIndex);

      // 문자열에 '#'이 있다면 전체 요소의 index를 리턴
      return check && i;
    })
    .filter((v) => v !== false);

  answer[0] = Math.min(...wallpaper);

  answer[1] = Math.min(...indexs);

  answer[2] = Math.max(...wallpaper) + 1;

  answer[3] = Math.max(...indexs);

  return answer;
}