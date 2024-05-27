/*
 * @lc app=leetcode.cn id=1752 lang=typescript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
function check(nums: number[]): boolean {
    const n = nums.length;
    const findStopPoint = (i)=>{
        for(;i < n - 1; i++){
            if(nums[i] > nums[i + 1]){
                // 第一次到边界
                return i + 1;
            }
        }
        return -1;
    }
    let x = findStopPoint(0);
    if(x == -1)return true;//全部为升序;

    x = findStopPoint(x);//继续找;
    if(x != -1 && x <= n) return false;

    return nums[0] >= nums[n - 1];

    // 三条件:
    // nums[i] < nums[i + 1]
    // nums[i] > nums[i + 1] 时,为分隔边界,进行下边判断
    // nums[0] > nums[n - 1]
};
// @lc code=end

