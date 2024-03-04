/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let binarySearch=(nums,target)=>{    
        let left = 0; 
        let right = nums.length -1;
        while(left<=right){
            let mid = (left + right) >> 1
            if(nums[mid]==target){
                return mid;
            }else if(nums[mid]>target){
                right= mid-1;
            }else if(nums[mid]<target){
                left = mid+1;
            }
        }
        return -1;
    }
    return binarySearch(nums,target);
};
console.log(search([-1,0,3,5,9,12],9));
// @lc code=end

