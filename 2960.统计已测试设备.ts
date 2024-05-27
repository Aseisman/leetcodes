/*
 * @lc app=leetcode.cn id=2960 lang=typescript
 *
 * [2960] 统计已测试设备
 */

// @lc code=start
function countTestedDevices(batteryPercentages: number[]): number {
    let ans = 0;
    for(let i = 0; i < batteryPercentages.length; i++){
        if(batteryPercentages[i] - ans > 0){
            ans++;
        }
    }
    return ans;
};
// @lc code=end