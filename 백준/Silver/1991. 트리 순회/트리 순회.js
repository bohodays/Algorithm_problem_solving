// 1991 트리 순회

const fs = require('fs');
const inputData= fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(inputData[0]);
const input = inputData.slice(1).map((nodes) => nodes.trim().split(' '));

const tree = {};      // object 생성
// 트리 구현
// key : 해당 노드, value : [왼쪽 자식, 오른쪽 자식]
for (const nodes of input) {
  tree[nodes[0]] = [nodes[1], nodes[2]];
}

const result = [];                      // 값을 임시로 저장하기 위한 배열

//전위 순회
const preOrder = (node) => {
  if (node !== '.') {                   // 해당 노드가 '.'이 아니면
    result.push(node);                  // 해당 노드 임시 배열에 저장
    preOrder(tree[node][0]);            // 왼쪽 자식 방문
    preOrder(tree[node][1]);            // 오른쪽 자식 방문
  }
};

// 중위 순회
const inOrder = (node) => {
  if (node !== '.') {                   // 해당 노드가 '.'이 아니면
    inOrder(tree[node][0]);             // 왼쪽 자식 방문
    result.push(node);                  // 해당 노드 임시 배열에 저장
    inOrder(tree[node][1]);             // 오른쪽 자식 방문
  }
};

// 후위 순회
const postOrder = (node) => {
  if (node !== '.') {                   // 해당 노드가 '.'이 아니면
    postOrder(tree[node][0]);           // 왼쪽 자식 방문
    postOrder(tree[node][1]);           // 오른쪽 자식 방문
    result.push(node);                  // 해당 노드 임시 배열에 저장
  }
};

preOrder('A');
result.push('.')
inOrder('A');
result.push('.');
postOrder('A');

const ans = result.join('').split('.').join('\n');
console.log(ans);