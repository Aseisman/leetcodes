/*
 * @lc app=leetcode.cn id=705 lang=typescript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
class MyHashSet {
    arr: {}
    constructor() {
        this.arr = {}
    }

    add(key: number): void {
        this.arr[key] = 1;
    }

    remove(key: number): void {
        this.arr[key] && delete this.arr[key];
    }

    contains(key: number): boolean {
        return this.arr[key] == 1
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

