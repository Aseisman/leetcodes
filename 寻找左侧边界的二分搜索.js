function binarySearch(nums,target){
    let left =0 ;right =nums.length-1;
    while(left<=right){
        let mid = (left+right)>>1;
        if(nums[mid]==target){
            let temp =mid;
            while(nums[temp]==nums[temp-1]){
                temp--;
            }
            return temp;
        }else if(nums[mid]<target){
            left = mid +1;
        }else if(nums[mid]>target){
            right = mid-1;
        }
    }
    return -1;
}

function binarySearch(nums,target){
    let left = 0;
    let right = nums.length;
    while(left<right){
        let mid = (left+right)>>1;
        if(nums[mid]==target){
            right =mid;
        }else if(nums[mid]<target){
            left = mid +1;
        }else if(nums[mid]>target){
            right =mid -1;
        }
    }
    if(left==nums.length)return -1;
    return nums[left]==target?left:-1;
}

// 寻找右侧边界的二分搜索

function binarySearch(nums,target){
    let left = 0,right=nums.length;
    while(left<right){
        let mid = (left+right)>>1;
        if(nums[mid]==target){
            left = mid;
        }else if(nums[mid]<target){
            left = mid +1;
        }else if(nums[mid]>target){
            right =mid -1;
        }
    }
    if(left==nums.length||nums[left]!==target){
        return -1;
    }
    return left;
}