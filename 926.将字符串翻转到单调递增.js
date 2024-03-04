/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // dp
    // 观察特征：
    // 第一个首字符一定是0 or 1 
    // 0后面可能是0 or 1；1 后面肯定是1  
    // 换句话说：1前面可能是0 or 1； 0 前面肯定是 0
    // 根据这个能怎么推导出来 不懂
    // dp[i][0]分别表示第i个为0时，得到递增的最小数；dp[i][1]

    // 重新来
    // dp[i][j]表示遍历到下标时，以数字j为结尾，前缀[0,i]为单调递增需要翻转的最小次数
    // 初始情况：第一位为0 ，则dp[0][0]=0 不需要翻转，则第一位是1时，dp[0][1]=1;
    // 如果下标数字为0 ，有两种选择，翻or不翻，不翻则前面必须都是0，翻则前面可以是0 or 1 dp[i][0]=dp[i-1][0] dp[i][1]=Math.min(dp[i-1][0],dp[i-1][1])+1;
    // 如果下标数字为1，两种选择，翻or 不翻；翻则前面必须都是0：dp[i][0] = dp[i-1][0]+1; 不翻则前面是0 or 1 都可以 dp[i][1] = Math.min(dp[i-1][0],dp[i-1][1]);

    let len = s.length;
    let dp = new Array(len).fill().map(()=>new Array(2).fill(0));
    // 默认第一个
    dp[0][0]=0,dp[0][1]=1;
    if(s[0]=='1'){
        [dp[0][0],dp[0][1]]=[dp[0][1],dp[0][0]]
    }
    for(let i = 1;i<len;i++){
        if(s[i]=='0'){
            // 0结尾
            dp[i][0]=dp[i-1][0];
            dp[i][1]=Math.min(dp[i-1][0],dp[i-1][1])+1;
        }else{
            dp[i][0]=dp[i-1][0]+1;
            dp[i][1]=Math.min(dp[i-1][0],dp[i-1][1]);
        }
    }
    return Math.min(dp[len-1][0],dp[len-1][1]);
};

var minFlipsMonoIncr = function(s) {
    // dp优化 状态压缩

    let len = s.length;
    let dp0 = 0, dp1 = 1;
    if(s[0]=='1'){
        [dp0,dp1]=[dp1,dp0]
    }
    for(let i = 1;i<len;i++){
        let temp = dp0,temp2 = Math.min(dp0,dp1);
        if(s[i]=='0'){
            // 0结尾
            dp1=temp2+1;
        }else{
            dp0=dp0+1;
            dp1=temp2;
        }
    }
    return Math.min(dp0,dp1);
};
// @lc code=end

console.log(minFlipsMonoIncr('11011'));
