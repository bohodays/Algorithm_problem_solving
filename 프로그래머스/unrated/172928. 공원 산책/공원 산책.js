function solution(park, routes) {
  let startPoint;
  // 시작 위치 찾기
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        startPoint = [i, j];
      }
    }
  }

  const op = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  routes.forEach((item, idx) => {
    const [pos, range] = item.split(" ");
    let currentPos = [...startPoint];
    let isChecked = true;

    for (let i = 0; i < range; i++) {
      currentPos[0] += op[pos][0];
      currentPos[1] += op[pos][1];

      // 장애물 판별
      if (
        currentPos[0] > park.length - 1 ||
        currentPos[0] < 0 ||
        currentPos[1] > park[0].length - 1 ||
        currentPos[1] < 0
      ) {
        isChecked = false;
        break;
      }

      if (park[currentPos[0]][currentPos[1]] === "X") {
        isChecked = false;
        break;
      }
    }
    if (isChecked) startPoint = currentPos;
  });

  return startPoint;
}