/*
 * @lc app=leetcode.cn id=1674 lang=typescript
 *
 * [1674] 使数组互补的最少操作次数
 */

// @lc code=start

// 差分数组：diff[x] 表示 nums[i] + nums[n - 1 - i] 为 x 的时候，需要多少次操作。
// 我们只需要计算出所有的 x 对应的 res[x], 取最小值就好了。

// 1.正向思考: 使数组互补的最少操作次数,就得找一个确定的值使得所有和为这个确定值时操作次数最少;
// 2.怎么找这个确定的值; 只能一个一个的试, 由题意1 <= nums[i] <= limit 可知这个和的范围是[2, 2limit];所以[2, 2limit]加2,默认都要操作2次
// 3.所以对每一对数都要范围由大到小讨论2种情况
// - [min(left, right)+1, max(left, right)+limit] 减 1; 如果左右的和在这个范围内只需要操作一次 所以减1
// - [left+ right, left +right] 减1; 如果左右的和刚好等于目标 就不需要操作了 所以再减1
// 4. 最后我们看[2, 2*limit]范围内谁的值最小 谁就是答案
function minMoves(nums: number[], limit: number): number {
    let diff = new Array(2 * limit + 2).fill(0);
    let n = nums.length;
    let size = n>>1;
    for (let i = 0; i < size; i++) {
        let [pre, tail] = [nums[i], nums[n - 1 - i]]
        let [minNum, maxNum] = [Math.min(pre, tail), Math.max(pre, tail)]
        //相当于[2, 2*limit] 都加2;
        diff[2] += 2;
        diff[2*limit + 1] -= 2
        //相当于[1 + minNum, limit + maxNum] 都减1;
        diff[1 + minNum] += -1;
        diff[limit + maxNum + 1] -= -1
        //相当于pre + tail 加1;
        diff[pre + tail] += -1;
        diff[pre + tail + 1] -= -1;
    }
    let result = diff[2];
    let sum = diff[2];
    for (let i = 3; i <= 2 * limit; i++) {
        sum += diff[i];  //求前缀和, 相当于还原数组;
        result = Math.min(result, sum) //求所有操作完成后 数组中最小的值;
    }
    return result
};
// @lc code=end

