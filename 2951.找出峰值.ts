/*
 * @lc app=leetcode.cn id=2951 lang=typescript
 *
 * [2951] 找出峰值
 */

// @lc code=start
function findPeaks(mountain: number[]): number[] {
    // 二分
    const ans = [] as number[];
    const binarySearch = (left, right) => {
        if(left > right) return;
        const mid = (left + right) >> 1;
        if( mid > 0 && mid < mountain.length - 1){
           if( mountain[mid] > mountain[mid - 1] && mountain[mid] > mountain[mid + 1]){
            ans.push(mid);
           }
        }        
        binarySearch(left, mid - 1);
        binarySearch(mid + 1, right);
    }
    binarySearch(0, mountain.length -1)
    return ans;
};
// @lc code=end

