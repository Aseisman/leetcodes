/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const res = [] as number[][];
    const dfs = (start:number,track:number[])=>{
      res.push([...track]);
      for(let i = start; i < nums.length; i++){
        track.push(nums[i]);
        dfs(i+1,track);
        track.pop();
      }
    }
    dfs(0,[]);
    return res;
};
// @lc code=end

