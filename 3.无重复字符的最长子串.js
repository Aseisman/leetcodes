/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
      // 暴力
    //   if(s.length<1)return 0;
    //   let max = 1;
    //   for(let i = 0;i<s.length;i++){
    //     let map = new Map();
    //     map.set(s[i],1);
    //     for(let j =i+1;j<s.length;j++){
    //       if(!map.has(s[j])){
    //         map.set(s[j],1);
    //         max = Math.max(max,j+1-i);
    //       }else{
    //         break;
    //       }
    //     }
    //   }
    //   return max;

    // // 特殊的滑动窗口思想
    // const set = new Set();
    // let i=0,j=0,maxLength=0;
    // if(s.length==0)return 0;
    // for(let i =0;i<s.length;i++){
    //     if(!set.has(s[i])){
    //         set.add(s[i]);
    //         maxLength = Math.max(maxLength,set.size);
    //     }else{
    //         while(set.has(s[i])){
    //             set.delete(s[j]);
    //             j++;
    //         }
    //         set.add(s[i]);
    //     }
    // }
    // return maxLength;

    // 滑动窗口
    let window = {};
    let left = 0,right = 0;
    let res = 0 ;
    while(right<s.length){
        let c = s[right++];
        window[c]?window[c]++:window[c]=1;
        while(window[c]>1){
            let d = s[left];
            left ++;
            window[d]--;
        }
        res = Math.max(res,right - left);
    }
    return res;


    // // dp 方程是什么呢：dp[i]表示以s[i]结尾的最长无重复子串的开始下标
    // // j 表示起始位置
    // // dp[i]=i-j;无重复的情况下
    // // dp[i]= dp[i-1]+1;前面有重复的情况下
    // let dp=[];
    // let res=0;
    // dp[0]=1;
    // for(let i =1;i<s.length;i++){
    //     let j = i-1;
    //     while(j>=0&&s[i]!=s[j]){
    //         j--;
    //     }
    //     dp[i]= dp[i-1] < (i-j)? dp[i-1]+1 : i-j;
    //     res=Math.max(res,dp[i]);
    // }
    // return res;
};
// @lc code=end

var lengthOfLongestSubstring = function(s){
    // 滑动窗口 左开右闭
    let window = {};
    let left = 0 ,right =0;
    let res = 0;
    while(right<s.length){
        let c = s[right++];
        window[c]?window[c]++:window[c]=1;
        while(window[c]>1){
            let d = s[left];
            left++;
            window[d]--;
        }
        res = Math.max(res,right-left);
    }
    return res;
}

console.log(lengthOfLongestSubstring("bbb"));;
