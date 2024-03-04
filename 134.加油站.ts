/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let i = 0;
    while (i < n) {
        let sumOfGas = 0, sumOfCost = 0;
        let cnt = 0;
        for(; cnt < n; cnt++){
            const j = (i + cnt) % n;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfCost > sumOfGas) {
                break;
            }
        }
        if (cnt === n) {
            return i;
        } else {
            // 优化， 前面几个都pass过了，到第x个过不了，那么就第x个放最后，我们从第x+1个开始，看看能不能走完；
            // 中间可以省很多路;
            i = i + cnt + 1;
        }
    }
    return -1;
};
// @lc code=end

