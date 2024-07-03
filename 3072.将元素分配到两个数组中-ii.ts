/*
 * @lc app=leetcode.cn id=3072 lang=typescript
 *
 * [3072] 将元素分配到两个数组中 II
 */

// @lc code=start
// 树状数组，将 n次在n长度中统计的时间 从n^2转为nlogn
// 原理：https://blog.csdn.net/TheWayForDream/article/details/118436732
// 核心：i += i & -i; 二进制取反与原数取交集，得到树状数组的下一个值。
class BinaryIndexedTree {
    tree;
    constructor(n) {
        this.tree = new Array(n + 1).fill(0);
    }
    add(i) {
        while (i < this.tree.length) {
            this.tree[i]++;
            i += i & -i;
        }
    }
    get(i) {
        let sum = 0;
        while (i > 0) {
            sum += this.tree[i];
            i -= i & -i;
        }
        return sum;
    }
}
function resultArray(nums: number[]): number[] {
    const n = nums.length;
    const sortNums = [...nums].sort((a,b)=>a - b);
    const index = {};
    for(let i = 0; i < n; i++){
        index[sortNums[i]] = i + 1;
    }
    const arr1 = [nums[0]] as number[], arr2 = [nums[1]] as number[];
    const tree1 = new BinaryIndexedTree(n);
    const tree2 = new BinaryIndexedTree(n);
    tree1.add(index[nums[0]]);
    tree2.add(index[nums[1]]);

    for(let i = 2; i < n; i++){
        const count1 = arr1.length - tree1.get(index[nums[i]]);
        const count2 = arr2.length - tree2.get(index[nums[i]]);
        if(count1 > count2 || (count1 === count2 && arr1.length <= arr2.length)){
            arr1.push(nums[i]);
            tree1.add(index[nums[i]])
        }else{
            arr2.push(nums[i]);
            tree2.add(index[nums[i]])
        }
    }
    return arr1.concat(arr2);
};
// @lc code=end