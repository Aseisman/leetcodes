/*
 * @lc app=leetcode.cn id=2336 lang=typescript
 *
 * [2336] 无限集中的最小数字
 */

// @lc code=start
class SmallestInfiniteSet {
    set: Set<number>;
    min: number;
    constructor() {
        this.set = new Set();
        this.min = 1;
    }

    popSmallest(): number {
        const res = this.min;
        this.set.add(res);
        let i = 1;
        while(true){
            if(!this.set.has(i)){
                this.min = i;
                break;
            }
            i++;
        }
        return res;
    }

    addBack(num: number): void {
        if(this.set.has(num)){
            this.set.delete(num);
            if(num < this.min){
                this.min = num;
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end

