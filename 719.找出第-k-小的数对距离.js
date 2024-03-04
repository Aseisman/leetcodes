/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 K 小的数对距离
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    // 变相的topk 
    let arr =[];
    // 双重循环，超时 arr会爆炸
    for(let i =0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            arr.push(Math.abs(nums[i]-nums[j]));
        }
    }
    // 以下就是topk了，用快排分治的想法去做
    let findKthMin = (nums,k)=>{
        let partition = (arr,left,right)=>{
            const k =arr[left];
            let l = left ,r=right;
            while(true){
                while(l<right&&arr[l]<=k)l++;
                while(r>=left+1&&arr[r]>=k)r--;
                if(l>=r)break;
                [arr[l],arr[r]]=[arr[r],arr[l]];
                ++l;--r;
            }
            [arr[left],arr[r]]=[arr[r],arr[left]];
            return r;
        }
        let l = 0 ;r=nums.length-1;
        while(l<=r){
            let mid = partition(nums,l,r);
            if(mid == k-1){
                return nums[mid];
            }else if(mid<k-1){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    }
    return findKthMin(arr,k);
};

var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length, left = 0, right = nums[n - 1] - nums[0];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            const i = binarySearch(nums, j, nums[j] - mid);
            cnt += j - i;
        }
        if (cnt >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

const binarySearch = (nums, end, target) => {
    let left = 0, right = end;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
// @lc code=end

console.log(smallestDistancePair([1,3,5,6,7,8,9],3));