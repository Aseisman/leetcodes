/*
 * @lc app=leetcode.cn id=2079 lang=typescript
 *
 * [2079] 给植物浇水
 */

// @lc code=start
function wateringPlants(plants: number[], capacity: number): number {
    // plants[i] <= rest  step + 1
    // plants[i] > rest  step + 2 * i
    let step = 0;
    let rest = capacity;
    for(let i = 0; i < plants.length; i++){
        if(plants[i] <= rest){
            step += 1;
            rest -= plants[i];
        }else{
            rest = capacity - plants[i];
            step += 2 * i + 1;
        }
    }
    return step;
};
// @lc code=end

