/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    max: number = 0
    cache: Map<number, number>
    
    constructor(capacity: number) {
        this.cache = new Map();
        this.max = capacity;
    }

    get(key: number): number {
        let value = this.cache.get(key)
        if(value){
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        let val = this.cache.get(key)
        if(val){
            this.cache.delete(key)
            this.cache.set(key,value)
        } else {
            if(this.cache.size >= this.max){
                // 迭代器的next()函数取第一个值;
                this.cache.delete(this.cache.keys().next().value)
            }
            this.cache.set(key,value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end