function solution(s) {
  let ans = [];
  const testCase = s.split(" ");
  for (const item of testCase) {
    if (item) {
      // 첫 문자가 알파벳인 경우
      if (isNaN(item[0])) {
        const addItem = item.toLowerCase().split("");
        addItem[0] = addItem[0].toUpperCase();
        ans.push(addItem.join(""));
        // 첫 문자가 알파벳이 아닌 경우
      } else {
        ans.push(item.toLowerCase());
      }
    } else {
      ans.push(item);
    }
  }
  return ans.join(" ");
}