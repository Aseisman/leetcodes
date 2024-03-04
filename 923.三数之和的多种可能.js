/*
 * @lc app=leetcode.cn id=923 lang=javascript
 *
 * [923] 三数之和的多种可能
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let res = 0;
    arr=arr.sort((a,b)=>a-b);
    // 三指针，i循环，jk双指针，与两数之和一样
    for(let i = 0; i<arr.length;i++){
        let sum = target - arr[i];
        let j = i+1, k = arr.length-1;
        while(j<k){
            if(arr[j]+arr[k]<sum){
                j++;
            }else if(arr[j]+arr[k]>sum){
                k--;
            }else if(arr[j]!=arr[k]){
                // 相加等于sum的情况分支1
                let left =1 ,right =1;
                while(j+1<k&&arr[j]==arr[j+1]){
                    left++;
                    j++;
                }
                while(k-1>j&&arr[k]==arr[k-1]){
                    k--;
                    right++;
                }
                res+=left*right;
                res%=10**9+7;
                j++;
                k--;
            }else{
                // 相加等于sum 且 arr[j] arr[k] 值相等,则说明，jk中间的值都相等，则Cn取2,即 n*(n-1)/2;
                res += (k-j+1)*(k-j)/2;
                res%=10**9+7;
                break;
            }
        }
    }
    return res;
};

var threeSumMulti = function(arr, target) {
    // 利用对象存取，然后循环key值，进行计算
    let res = 0;
    let map ={};
    arr.map(item=>{
        if(map[item]){
            map[item]++;
        }else{
            map[item]=1;
        }
    })
    let keys=Object.keys(map).sort((a,b)=>a-b);
    for(let i =0 ;i<keys.length;i++){
        let j = i,k=keys.length-1;//j从i开始，因为i可能有多个值
        let sum = target - keys[i];
        while(j<=k){
            if(parseInt(keys[j])+parseInt(keys[k])<sum){
                j++;
            }else if(parseInt(keys[j])+parseInt(keys[k])>sum){
                k--;
            }else{
                // 这里分几种情况
                if(i<j&&j<k){
                    res+=map[keys[i]]*map[keys[j]]*map[keys[k]];
                }else if(i==j && j<k ){
                    res+=map[keys[i]]*(map[keys[i]]-1)/2*map[keys[k]];
                }else if(i<j&&j==k){
                    res+=map[keys[j]]*(map[keys[j]]-1)/2*map[keys[i]];
                }else{
                    // i==j==k
                    res+=map[keys[i]]*(map[keys[i]]-1)*(map[keys[i]]-2)/6;
                }
                res %=10**9+7;
                j++;
                k--;
            }
        }
    }
    return res;
};
// @lc code=end
console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5],8));
