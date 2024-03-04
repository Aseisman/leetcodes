/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function(nums, k) {
    //  排序+双指针
    nums.sort((a,b)=>a-b);
    let res = 0;
    let left=0,right=1,len =nums.length;
    while(left<len){
        // 去重
        if(left==0||nums[left]!==nums[left-1]){
               while(right<len&&(nums[right]<nums[left]+k||right<=left)){
                   right++;
               }
               if(right<len&&nums[right]==nums[left]+k){
                   res++;
               }
        }
        left++;
    }
    return res;
}

var findPairs = function(nums, k) {
    //  排序+双指针
    nums.sort((a,b)=>a-b);
    let res = 0;
    let left=0,right=1,len =nums.length;
    while(left<len){
        right = left+1;
        // 去重
        if(left==0||nums[left]!==nums[left-1]){
               while(right<len&&nums[right]<nums[left]+k){
                   right++;
               }
               if(right<len&&nums[right]==nums[left]+k){
                   res++;
               }
        }
        left++;
    }
    return res;
}
// var findPairs = function(nums, k) {
//     // 暴力
//     // 双重for循环
//     let res = 0,map = {};
//     let len = nums.length;
//     for(let i = 0; i<len;i++){
//         for(let j = i+1;j<len;j++){
//             if(Math.abs(nums[i]-nums[j])==k){
//                 let max,min; 
//                 if(nums[i]>nums[j]){
//                     max= nums[i];
//                     min=nums[j];
//                 }else{
//                     max= nums[j];
//                     min=nums[i];
//                 }
//                 if(!map[''+max+'-'+min]){
//                     res++;
//                     map[''+max+'-'+min]=true;
//                 }
//             }
//         }
//     }
//     return res;
// };
// @lc code=end

console.log(findPairs([3, 1, 4, 1, 5],2));