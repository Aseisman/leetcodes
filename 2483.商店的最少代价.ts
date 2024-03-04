/*
 * @lc app=leetcode.cn id=2483 lang=typescript
 *
 * [2483] 商店的最少代价
 */

// @lc code=start

/**
 * 
function bestClosingTime(customers: string): number {
  // 暴力一下 超时啦，只能用dp
    let res = [Infinity, -1],
      len = customers.length;
    for (let i = 0; i <= len; i++) {
      let temp = 0;
      for (let j = 0; j < len; j++) {
        let cur = customers[j] == "Y" ? 1 : 0;
        if (j < i) {
          temp += 1 - cur;
        } else {
          temp += cur - 0;
        }
      }
      if (res[0] > temp) {
        res[0] = temp;
        res[1] = i;
      }
    }
    return res[1] == -1 ? 0 : res[1];
} 
*/


/** 
//  dp的方式
function bestClosingTime(customers: string): number {
  let dp: number[] = []; //dp表示第i个小时的最小代价
  let len = customers.length;
  // 初始化dp[0]
  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    customers[i] == "Y" && (dp[0] += 1);
  }
  // 循环dp dp[i] = dp[i-1] +1 or dp[i-1]-1;
  for (let i = 0; i < len; i++) {
    if(customers[i]=='Y'){
        dp[i+1] = dp[i]-1;
    }else{
        dp[i+1] = dp[i]+1;
    }
  }
  // 找最小值
  let res = 0,temp = dp[0];
  dp.forEach((d,i)=>{
    if(d<temp){
        temp=d;
        res = i;
    }
  })
  return res;
} 
*/



function bestClosingTime(customers: string): number {
  let countY=0,min=0,index=0;
  // 在第i小时 Y的数量>N的数量，这个时候就应该开门，反之关门
  // 说白了，只要Y的数量大于N，达到最大，那么就可以在最后的Y那里关门，也就是countY = Y - N的数量达到最大的时候；
  for(let i = 0; i < customers.length; i++){
    if(customers[i] == 'Y'){
      countY++;
    }else{
      countY--;
    }
    if(min<countY){
      min = countY;
      index = i+1;
    }
  }
  return index;
}
// @lc code=end
