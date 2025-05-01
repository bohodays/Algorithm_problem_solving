function solution(info, query) {
  const db = new Map();

  // 1. info 전처리 - 가능한 모든 조합 저장
  for (const line of info) {
    const [lang, job, career, food, scoreStr] = line.split(" ");
    const score = Number(scoreStr);
    const attrs = [lang, job, career, food];

    // 2. '-'를 포함한 16개 조합 생성
    const combs = getCombinations(attrs);
    for (const comb of combs) {
      const key = comb.join(" ");
      if (!db.has(key)) db.set(key, []);
      db.get(key).push(score);
    }
  }

  // 3. 각 key에 대해 점수 정렬 (이진 탐색용)
  for (const scores of db.values()) {
    scores.sort((a, b) => a - b);
  }

  const answer = [];

  // 4. query 처리
  for (let q of query) {
    const cleaned = q.replace(/ and /g, " ").split(" ");
    const key = cleaned.slice(0, 4).join(" ");
    const target = Number(cleaned[4]);

    const scores = db.get(key) || [];
    const idx = lowerBound(scores, target); // target 이상 위치
    answer.push(scores.length - idx);
  }

  return answer;
}

// 가능한 16개 조합 생성
function getCombinations(attrs) {
  const results = [];

  const dfs = (idx, path) => {
    if (idx === attrs.length) {
      results.push([...path]);
      return;
    }
    dfs(idx + 1, [...path, attrs[idx]]);
    dfs(idx + 1, [...path, "-"]);
  };

  dfs(0, []);
  return results;
}

// 이진 탐색: target 이상 처음 나오는 인덱스
function lowerBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}
