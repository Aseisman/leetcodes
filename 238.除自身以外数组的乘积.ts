/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
// function productExceptSelf(nums: number[]): number[] {
//     // 从左往右相乘生成一个数组,再从右往左相乘生成第二个数组,然后两个数组的值相乘即为结果;
//     // 左右边初始化为1;
//     const len = nums.length;
//     const answer = new Array<number>(len);
//     const left = new Array<number>(len);
//     const right = new Array<number>(len);
//     left[0]=1;
//     for(let i = 1; i < len; i++){
//         left[i] = nums[i-1]*left[i-1];
//     }
//     right[len-1] = 1;
//     for(let i = len - 2 ; i >= 0; i--){
//         right[i] = right[i+1]*nums[i+1];
//     }
//     for(let i = 1; i < len; i++){
//         answer[i] = left[i]*right[i];
//     }
//     return answer;
// };

function productExceptSelf(nums: number[]): number[] {
    // 时间复杂度要求O(n) 空间复杂度要求o(1)
    // 不能使用除法
    const len = nums.length;
    const answer = new Array<number>(len);
    answer[0]=1;
    for(let i = 1; i < len; i++){
        answer[i] = nums[i-1]*answer[i-1];
    }

    let R = 1;
    for(let i = len -1; i >= 0; i--){
        answer[i] = answer[i]*R;
        R *= nums[i];
    }
    return answer;
};
// @lc code=end