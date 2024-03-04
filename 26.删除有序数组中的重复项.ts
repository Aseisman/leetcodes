/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    // 需要O(N)的空间复杂度
    // let ans = 0;
    // let map = {};
    // nums.forEach(num=>{
    //     if((map[num] || 0) < 1){
    //         nums[ans++] = num;
    //         map[num] = (map[num] || 0) + 1;
    //     }
    // })
    // return ans;
    
    // O(1)的空间复杂度
    // 双指针,快慢指针
    // let ans = 0;
    // nums.forEach((num) => {
    //   if(num !== nums[ans]){
    //     ans++;
    //     nums[ans] = num;
    //   }
    // });
    // return ans + 1;
    let i = 1;
    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i - 1]){
            nums[i++] = nums[j];
        }
    }
    return i;
};
// @lc code=end
