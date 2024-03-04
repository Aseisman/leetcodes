/*
 * @lc app=leetcode.cn id=2248 lang=typescript
 *
 * [2248] 多个数组求交集
 */

// @lc code=start
function intersection(nums: number[][]): number[] {
    let len = nums.length;
    if(len<1)return [];
    if(len==1)return nums[0].sort((a,b)=>a-b);
    let res:number[]=[];
    let map = new Map();
    for(let i=0; i< len; i++){
        let arr = nums[i];
        for(let num of arr){
            if(map.has(num)){
                map.set(num,map.get(num)+1);
            }else{
                map.set(num,1);
            }
        }
    }
    map.forEach((val,key)=>{
        if(val==len){
            res.push(key);
        }
    })
    return res.sort((a,b)=>a-b);
};
// @lc code=end

