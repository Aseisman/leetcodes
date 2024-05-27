/*
 * @lc app=leetcode.cn id=2739 lang=typescript
 *
 * [2739] 总行驶距离
 */

// @lc code=start
function distanceTraveled(mainTank: number, additionalTank: number): number {
    let ans = 0;
    while(mainTank){
        if(mainTank >=5){
            let count = Math.floor(mainTank / 5);
            ans += count * 5 * 10;
            mainTank = mainTank % 5;
            if(additionalTank >= count){
                mainTank += count;
                additionalTank -= count;
            }else{
                mainTank += additionalTank;
                additionalTank = 0;
            }
        }else{
            ans += mainTank * 10;
            mainTank = 0;
        }
    }
    return ans;
};
// @lc code=end

