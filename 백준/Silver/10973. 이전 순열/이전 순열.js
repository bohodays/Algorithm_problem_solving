// 10973 이전 순열
// 10972 다음 순열 문제 참고 바람.
// 10972에서의 다음 순열은 우선 리스트에서 뒤에 값보다 앞의 값이 작은 애(x)를 찾고 그작은애를 기준으로 다시 리스트의 맨뒤 값부터 
// 그 작은애(x)보다 큰값이 있는지 체크한다. 있다면 그 값과 작은애(x)를 스왑한 후 그 작은애를 기준으로 리스트를 절반으로 나누어 뒤에 
// 값을 오름차순으로 정렬한 채로 다시 새로운 리스트를 만든다. 
// 위 문제는 10972의 과정을 반대로 생각한 것이다.  이전 순열은 우선 리스트에서 뒤에 값보다 앞의 값이 큰 애(y)를 찾고 그 큰애를 
// 기준으로 다시 리스트의 맨뒤 값부터 그 큰애(y)보다 작은 값이 있는지 체크 한다. 있다면 그 값과 큰애(y)를 스왑한 후 그 큰애를 기준으로 
// 리스트를 절반으로 나누어 뒤에 값을 내림차순으로 정렬한 채로 다시 새로운 리스트를 만든다. 

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
let targetSeq = inputData[1].split(' ').map((num) => +num);
let find = false;                                               // 반복문을 정지시키기 위한 장치
let ans = -1;                                                   // 정답으로 출력할 ans는 -1로 초기화

for (let i = n - 1; i > 0; i--) {
  if (targetSeq[i - 1] > targetSeq[i]) {                        // 앞의 값이 뒤의 값보다 크다면
    for (let j = n - 1; j > 0; j--) {
      if (targetSeq[i - 1] > targetSeq[j]) {
        [targetSeq[i - 1], targetSeq[j]] = [targetSeq[j], targetSeq[i - 1]];    // 반복문을 순회하며 위치 교환
        targetSeq = [...targetSeq.slice(0, i), ...targetSeq.slice(i).sort((a, b) => b - a)];    // 이 부분이 어렵다....
        find = true;
        break;
      }
    }
  }
  if (find) {
    ans = targetSeq.join(' ');
    break;
  }
}

console.log(ans);
  