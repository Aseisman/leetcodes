/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
    // 关键就是remove方法里，用lists最末尾的数替换要删除的数，然后直接删除最末尾的数即可；
    lists: Array<number>
    map: object;
    constructor() {
        this.lists = [];
        this.map = {};// key：数值，value:索引
    }

    insert(val: number): boolean {
        if(val in this.map){
            return false;
        }
        this.lists.push(val);
        this.map[val] = this.lists.length - 1;
        return true;
    }

    remove(val: number): boolean {
        if(val in this.map){
            const index = this.map[val];
            let last = this.lists[this.lists.length - 1];
            this.lists[index] = last;
            this.map[last] = index;
            delete this.map[val];
            this.lists.pop();
            return true;
        }
        return false;
    }

    getRandom(): number {
        const i = Math.floor(Math.random()* this.lists.length);
        return this.lists[i];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end