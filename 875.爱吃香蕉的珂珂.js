/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // 题目的意思就是找到最小的k，使得h小时内，能以k速度吃完香蕉堆；
    // 找k，范围就是1<=k<=最大的一个堆的数量
    // 再根据二分查找，快速判断k的最小值
    let max = Math.max(...piles);
    let res = max;
    let erfenchazhao = (left,right)=>{
        if(left>=right)return;
        let mid = Math.floor((left+right)/2);
        let temp =0;
        for(let i = 0 ;i<piles.length;i++){
            temp+=Math.ceil(piles[i]/mid);
        }
        if(temp<=h){
            res = Math.min(res,mid);
            erfenchazhao(left,mid);
        }else{
            erfenchazhao(mid+1,right);
        }
    }
    erfenchazhao(1,max);
    return res;
};
// @lc code=end
console.log(minEatingSpeed([3,6,7,11],8));
console.log(minEatingSpeed([30,11,23,4,20],5));
console.log(minEatingSpeed([30,11,23,4,20],6));
