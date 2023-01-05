// 1107 리모컨
// 브루트 포스...
// range를 N의 최대 범위인 500,000이 아닌 그 두 배 1,000,000로 해준 것은, 수빈이가 이동하려는 채널의 범위는 500,000 이하이지만 채널 자체는 무한대라는 점 때문이다.
// 따라서, target와 가장 가까운 숫자를 찾을 때 target보다 작은 값은 물론이고 target보다 큰 값도 찾아줘야하고, 이 값은 500,000 이상도 가능하다.
// 만약에 수빈이가 이동하려는 채널이 500,000이고, 리모컨의 숫자 중 1, 2, 3, 4, 5가 고장났다고 가정하자.
// 이 때, range의 범위가 500,000으로 제한되면, 시작점인 100번에서 +만 눌러서 500,000까지 도달하는 총 499,900번 버튼을 클릭하게 할 것이다.
// 하지만 물론 이것은 최적의 해가 아니다.
// 600,000에서 -를 100,000번 눌러 target에 도달하는 것이 최적의 해일 것이다.
// 이러한 이유 때문에 range는 1,000,000까지로 설정해주어야 한다.

const fs = require('fs');
const [[target], [n], brokenButton] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((str) => str.split(' ').map((v) => +v));

if (brokenButton) {
  let minCount = Math.abs(100 - target);
  
  for (let num = 0; num <= 1000000; num++) {
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      // 각 숫자가 고장났는지 확인 후, 고장 났으면 break
      if (brokenButton.includes(Number(num[i]))) break;
      // 고장난 숫자 없이 마지막 자리까지 왔다면 min_count 비교 후 업데이트
      else if (i === num.length - 1) minCount = Math.min(minCount, Math.abs(Number(num) - target) + num.length);
    }
  }
  
  console.log(minCount);
} else {      // 부서진 버튼이 없는 경우, 예외처리해줘야 된다.
  console.log(Math.min(Math.abs(100 - target), String(target).length));
}
