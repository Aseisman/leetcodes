/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    // 回溯算法
    let ans:number[][] = []; 
    let backtrack = (track, used)=>{
        if(track.length == nums.length){
            ans.push([...track]);
            return ;
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i])continue;
            track.push(nums[i]);
            used[i] = true;
            backtrack(track,used);
            used[i] = false;
            track.pop();
        }
    }
    backtrack([],[]);
    return ans;
};
// @lc code=end

