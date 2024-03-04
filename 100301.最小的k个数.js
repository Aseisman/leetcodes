/*
 * @lc app=leetcode.cn id=100301 lang=javascript
 *
 * [剑指 Offer 40] 最小的k个数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    // 傻逼做法：排序，返回前k个数
    // 来个快排吧
    let quickSort = (arr)=>{
        if(arr.length<2)return arr;

        let left = [],right=[],cur=[];
        let temp = arr[0];
        arr.forEach(item=>{
            item>temp&&(right.push(item));
            item<temp&&(left.push(item));
            item==temp&&(cur.push(item));
        })
        return quickSort(left).concat([...cur,...quickSort(right)]);
    }
    return quickSort(arr).slice(0,k);
};
var getLeastNumbers = function(arr, k) {
    // 快排实现方式2
    let quickSort = (arr,left,right)=>{
        if(left>=right)return;
        let l=left,r=right;
        let temp = arr[l];
        while(l<r){
            while(arr[r]>=temp&&l<r){
                r--;
            }
            if(l<r){
                arr[l]=arr[r];
                l++;
            }
            while(arr[l]<=temp&&l<r){
                l++;
            }
            if(l<r){
                arr[r]=arr[l];
                r--;
            }
        }
        arr[l]=temp;
        quickSort(arr,left,l-1);
        quickSort(arr,r+1,right);
        return arr;
    }
    return quickSort(arr,0,arr.length-1).slice(0,k);
};
var getLeastNumbers = function(arr, k) {
    function partition(arr, start, end) {
        const k = arr[start];
        let left = start + 1,
            right = end;
        while (1) {
            while (left <= end && arr[left] <= k) ++left;
            while (right >= start + 1 && arr[right] >= k) --right;
    
            if (left >= right) {
                break;
            }
    
            [arr[left], arr[right]] = [arr[right], arr[left]];
            ++left;
            --right;
        }
        [arr[right], arr[start]] = [arr[start], arr[right]];
        return right;
    }
    // 优化快排适应题目，本不需要全部排序，针对特定进行排序即可
    let left = 0, right = arr.length - 1;
    while(left<=right){
        let index = partition(arr, left, right);
        if(index<k){
            left = index + 1;
        }else if(index>k){
            right = index - 1 ;
        }else{
            break;
        }
    }
    // let index = partition(arr, left, right);
    // while (index !== k) {
    //     if (index < k) {
    //         left = index + 1;
    //         index = partition(arr, left, right);
    //     } else if (index > k) {
    //         right = index - 1;
    //         index = partition(arr, left, right);
    //     }
    // }

    return arr.slice(0, k);
};
// @lc code=end
console.log(getLeastNumbers([4,5,1,6,2,7,3,8],6));