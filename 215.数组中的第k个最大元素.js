/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 快排优化，可以到o(n) 普通排序o(nlogn)
    // 堆排 o(nlogn)
    // 冒泡 o(nlogn)

    let partition = (arr, start, end)=>{
        const k = arr[start];
        let l = start + 1,
            r = end;
        while (1) {
            while (l <= end && arr[l] <= k) ++l;
            while (r >= start + 1 && arr[r] >= k) --r;
            if (l >= r) {
                break;
            }
            [arr[l], arr[r]] = [arr[r], arr[l]];
            ++l;
            --r;
        }
        [arr[r], arr[start]] = [arr[start], arr[r]];
        return r;
    }

    let l=0,r = nums.length-1;
    let targetIndex= nums.length-k;
    while(l<=r){
        let mid = partition(nums,l,r);
        if(mid == targetIndex){
            return nums[mid];
        }else if( mid < targetIndex){
            l = mid + 1;
        }else {
            r = mid - 1;
        }
    }
};
// @lc code=end
console.log(findKthLargest([3,2,1,5,6,4],2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));

let partition = (arr,left,right)=>{
    const k = arr[left];
    let l = left, r = right;
    while(true){
        while(l<right&&arr[l]<=k)l++;
        while(r>=left+1 && arr[r]>=k)r--;
        if(l>=r)break;

        [arr[l],arr[r]]=[arr[r],arr[l]];
        ++l; --r;
    }
    [arr[left],arr[r]]=[arr[r],arr[left]];
    return r;
}
let quickSort = (arr,left,right)=>{
    if(left>=right)return;
    const k = arr[left];
    let l = left, r = right;
    while(true){
        while(l<right&&arr[l]<=k)l++;
        while(r>=left+1 && arr[r]>=k)r--;
        if(l>=r)break;

        [arr[l],arr[r]]=[arr[r],arr[l]];
        ++l; --r;
    }
    [arr[left],arr[r]]=[arr[r],arr[left]];
    quickSort(arr,left,l-1);
    quickSort(arr,l+1,right);
    return arr;
}
let arr =[3,2,3,1,2,4,5,5,6];
console.log(quickSort(arr,0,arr.length-1));