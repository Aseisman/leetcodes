/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  inStack: number[];
  outStack: number[];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.inStack.length == 0 && this.outStack.length == 0) return 0;
    if (!this.outStack.length) {
      while (this.inStack.length) {
        const item = this.inStack.pop() as number;
        this.outStack.push(item);
      }
    }
    return this.outStack.pop() as number;
  }

  peek(): number {
    if (!this.outStack.length) {
        while (this.inStack.length) {
          const item = this.inStack.pop() as number;
          this.outStack.push(item);
        }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.outStack.length == 0 && this.inStack.length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
