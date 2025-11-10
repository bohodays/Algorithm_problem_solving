function solution(scoville, K) {
  if (K <= 0) return 0;

  const heap = new MinHeap(scoville);
  if (heap.peek() >= K) return 0;

  let mixes = 0;

  while (heap.size() >= 2 && heap.peek() < K) {
    const a = heap.pop();     // 가장 맵지 않은 음식
    const b = heap.pop();     // 두 번째로 맵지 않은 음식
    const mixed = a + 2 * b;
    heap.push(mixed);
    mixes++;
  }

  return heap.peek() >= K ? mixes : -1;
}

class MinHeap {
  constructor(arr = []) {
    this.h = arr.slice();
    this._heapify();
  }
  size() { return this.h.length; }
  peek() { return this.h.length ? this.h[0] : Infinity; }
  push(val) {
    const h = this.h;
    h.push(val);
    this._siftUp(h.length - 1);
  }
  pop() {
    const h = this.h;
    const n = h.length;
    if (n === 0) return undefined;
    if (n === 1) return h.pop();
    this._swap(0, n - 1);
    const out = h.pop();
    this._siftDown(0);
    return out;
  }

  _heapify() {
    const h = this.h;
    for (let i = (h.length >> 1) - 1; i >= 0; i--) {
      this._siftDown(i);
    }
  }
  _siftUp(i) {
    const h = this.h;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      this._swap(i, p);
      i = p;
    }
  }
  _siftDown(i) {
    const h = this.h;
    const n = h.length;
    while (true) {
      const l = (i << 1) + 1;
      const r = l + 1;
      let s = i;
      if (l < n && h[l] < h[s]) s = l;
      if (r < n && h[r] < h[s]) s = r;
      if (s === i) break;
      this._swap(i, s);
      i = s;
    }
  }
  _swap(i, j) {
    const h = this.h;
    const t = h[i]; h[i] = h[j]; h[j] = t;
  }
}

// 예시 테스트
console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
