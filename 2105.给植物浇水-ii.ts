/*
 * @lc app=leetcode.cn id=2105 lang=typescript
 *
 * [2105] 给植物浇水 II
 */

// @lc code=start
function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
    let count = 0;
    let restA = capacityA, restB = capacityB;
    let left = 0, right = plants.length - 1;
    const checkA = (i)=>{
        if(restA >= plants[i]){
            restA -= plants[i];
        }else{
            restA = capacityA - plants[i];
            count++;
        }
    }
    const checkB = (i)=>{
        if(restB >= plants[i]){
            restB -= plants[i];
        }else{
            restB = capacityB - plants[i];
            count++;
        }
    }
    while(left <= right){
        if(left == right){ 
           if(restA >= restB){
            checkA(left);
            left++;
           }else{
            checkB(right);
            right--;
           }
           continue;
        }
        checkA(left);
        checkB(right);
        left++;
        right--;
    }
    return count;
};
// @lc code=end

