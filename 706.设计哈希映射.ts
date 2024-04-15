/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
class MyHashMap {
  obj: {};
  constructor() {
    this.obj = {};
  }

  put(key: number, value: number): void {
    this.obj[key] = value;
  }

  get(key: number): number {
    return this.obj[key] || (this.obj[key] === 0 ? 0 : -1);
  }

  remove(key: number): void {
    this.obj[key] && delete this.obj[key];
  }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
