/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 双指针，一数组一个指针
    // 因为两数组长度已知，所以中位数的下标就已知，所以只需要for循环 (num1+num2)/2+1次，然后哪个小，就往前前进一位，时间复杂度O(m+n)
    let left = 0,right = 0;
    let len1 = nums1.length,len2=nums2.length;
    let minIndex =((len1+len2)>>1);
    let pre = -1,cur=-1;
    for(let i = 0 ;i<=minIndex;i++){
        pre = cur;
        if((left<len1||right>=len2)&&nums1[left]<nums2[right]){
            cur=nums1[left];
            left++;
        }else{
            cur=nums2[right];
            right++;
        }
    }
    return (len1+len2)%2?cur:(pre+cur)/2;
};
var findMedianSortedArrays = function(nums1, nums2) {
    /**
      转化成查找第k小的元素(两数组长度已知,所以找第k小)
      二分查找

      k表示第k个元素,k在这里是中位数,即表示(m+n)/2或者(m+n)/2+1;
      
      选 a[k/2-1],b[k/2-1]
      
      若a[k/2-1]<b[k/2-1] 则a[k/2-1]不可能是中位数的其中一个值，因为最多有(a[k/2-2]+b[k/2-2])=(k/2-2+k/2-2)<= k-2个元素比它小，那么它就不能是第k小的数了    
     
     * A: 1 3 4 9
     * B: 1 2 3 4 5 6 7 8 9
     * 第一轮: 长度分别是4,9 共13 中位数是第7,所以找第7个元素
     * k/2-1 = 2 即A[2]和B[2] A[2]>B[2],所以排除B[0-2]
     * 
     * A: 1 3 4 9
     * B: [1 2 3] 4 5 6 7 8 9
     * 第二轮: k= 7-3=4 k/2-1 =1;即A[1]和B[4]; A[1]<B[4] 所以排除A[0]A[1]
     * 
     * A: [1 3] 4 9
     * B: [1 2 3] 4 5 6 7 8 9
     * 第三轮: k= 7-3-2=2 k/2-1 =0;即A[2]和B[3]; A[2]==B[3] 也排除A[0]
     * 
     * A: [1 3 4] 9
     * B: [1 2 3] 4 5 6 7 8 9
     * 第三轮: k= 7-3-2-1=1 比较B[3]和A[3]return B[3];
     */

    
    //nums1 视为较短的数组
    nums1.length > nums2.length && ([nums1, nums2] = [nums2, nums1]);
    const m = nums1.length,n=nums2.length;
    let low = 0, high = m;

    while(low<=high){
        const i = low + Math.floor((high-low)/2),
              j = Math.floor((m+n+1)/2)-i;
              
    }

};

console.log(findMedianSortedArrays([1,3,5,6,7],[2,4,8,9,10]));
// @lc code=end

 var findMedianSortedArrays = function(nums1, nums2) {
    //对数组长度较短的那个进行二分查找操作
    nums1.length > nums2.length && ([nums1, nums2] = [nums2, nums1])
    const m = nums1.length, 
          n = nums2.length
    let low = 0, high = m 
    //二分
    while(low <= high){
        const i = low + Math.floor((high - low) / 2), //i:数组A中 minRightA 的下标
              j = Math.floor((m + n + 1) / 2) - i     //j:数组B中 minRightB 的下标  
        //这里注意特判，在边界的时候为了满足下面的条件，left的就是负无穷，right那头就是正无穷

        const maxLeftA = i === 0 ? -Infinity : nums1[i-1],
              minRightA = i === m ? Infinity : nums1[i]     
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1],
              minRightB = j === n ? Infinity : nums2[j]     
        //进行判断
        if(maxLeftA <= minRightB && maxLeftB <= minRightA){
            return (m + n) & 1 //m+n 的奇偶情况分量讨论
                ? Math.max(maxLeftA, maxLeftB)
                : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB))/2
        }//不满足的话就要根据情况调整 low / high 指针
        else if(maxLeftA > minRightB){
            high = i - 1
        }else {
            low = low + 1
        }
    }
};